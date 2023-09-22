import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplications } from "../utilities/localstorage";


const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    const {logo, job_title,  company_name,job_description, experiences , contact_information} = job
    const {phone, email, address} = contact_information
    return (
        <div className="grid gap-5 grid-cols-4">
            <div className="col-span-3 border ">
                <img src={logo} className="mb-5" alt="" />
                <h2 className="text-3xl font-bold">{job_title}</h2>
                <h3 className="text-2xl font-bold">{company_name}</h3>
                <p className="w-96">{job_description}</p>
                <p className="font-bold">Experience: {experiences}</p>
            </div>
            <div className=" flex flex-col col-span-1 border space-y-4">
                <p className="font-bold">Phone: {phone}</p>
                <p className="font-bold">Email: {email}</p>
                <p className="font-bold flex-grow">Address: {address}</p>
                <button onClick={()=> saveJobApplications(id)} className="btn btn-primary">Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;