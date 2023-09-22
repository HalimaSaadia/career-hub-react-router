import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../utilities/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleFilter = (filter) => {
    if (filter == "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter == "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite == "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter == "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite == "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };
  useEffect(() => {
    const storedJobs = getStoredJobApplications();
    const jobApplied = jobs.filter((job) => storedJobs.includes(job.id));
    setAppliedJobs(jobApplied);
    setDisplayJobs(jobApplied);
  }, []);

  return (
    <div>
      <h1 className="text-4xl">Job I applied</h1>
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          All
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={()=> handleFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={()=> handleFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=> handleFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </div>
      {displayJobs.map((job) => (
        <AppliedJob key={job.id} job={job} />
      ))}
    </div>
  );
};

export default AppliedJobs;
