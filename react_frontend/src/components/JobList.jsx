import { useEffect, useState } from 'react'
import Job from './Job';
import './JobList.css'

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://127.0.0.1:8081/api/v1/all");
                if (!response.ok) {
                    throw new Error('Could not fetch resource');
                }
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [jobs.length]);
  return (
    <div className='jobList-container'>
        {jobs.map((job) => 
            (<Job key={job.appId} {...job}/>)
        )}
    </div>
  )
}

export default JobList