import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-2xl">
      <figure>
        <img
          src={logo}
          alt="Shoes"
          className="py-5 drop-shadow-xl"
        />
      </figure>
      <div className="card-body text-left  space-y-3">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-5 py-2 border rounded mr-3">{remote_or_onsite}</button>
            <button className="px-5 py-2 border rounded">{job_type}</button>
        </div>
        <p>location: {location}</p>
        <p>salary: {salary}</p>
        <div className="card-actions">
          <Link to={`/job/${id}`}><button className="btn btn-primary">Show Detail</button></Link>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};
export default Job;
