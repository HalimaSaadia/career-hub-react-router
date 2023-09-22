

const AppliedJob = ({job}) => {
    const {logo, job_title,  company_name,job_description,remote_or_onsite} = job
   
    return (
        <div className="border p-5 my-5 space-y-3">
            <img src={logo} alt="" className="mb-10"/>
            <h1 className="text-4xl font-bold">{job_title}</h1>
            <h2 className="text-2xl font-bold">{company_name}</h2>
            <p>{job_description}</p>
            <h2 className="text-xl font-bold">{remote_or_onsite}</h2>
        </div>
    );
};

export default AppliedJob;