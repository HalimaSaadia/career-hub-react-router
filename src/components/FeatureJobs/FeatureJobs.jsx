import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeatureJobs = () => {
    const [jobs, setJobs] = useState([])
    const [jobLength, setJobLength] = useState(4)

    useEffect(()=> {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="text-center">
            <h1 className="text-5xl">Featured Jobs</h1>
            <div className="grid grid-cols-2 gap-5">
                {jobs.slice(0,jobLength).map(job => <Job key={job.id} job={job} />)}
            </div>
            <div>
                <button onClick={()=> jobLength === jobs.length ? setJobLength(4) : setJobLength(jobs.length)} className="btn btn-primary mt-10">{jobLength === jobs.length ? "Show Less": "Show More"}</button>
            </div>
        </div>
    );
};

export default FeatureJobs;