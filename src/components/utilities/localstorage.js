const getStoredJobApplications = () => {
    const savedJobApplications = localStorage.getItem('job_applications')
    if(savedJobApplications){
        return JSON.parse(savedJobApplications)
    }
    return []
}

const saveJobApplications = id => {
    const idInt = parseInt(id)
    const storedJobApplication = getStoredJobApplications();
    const isExist = storedJobApplication.find(job => job === id)
    if(!isExist){
        storedJobApplication.push(idInt)
        localStorage.setItem('job_applications', JSON.stringify(storedJobApplication))
    }
}

export {getStoredJobApplications, saveJobApplications}