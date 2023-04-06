import { useState, useEffect } from 'react'
import api from '../config/api'
import JobList from './JobList';

function JobBoard() {
  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    const response = await api.get("/Job")
    setJobs(response.data.results)
  }

  useEffect(() => {
    fetchJobs()
  }, [jobs])

  if (jobs.length === 0) {
    return <p>Desculpe, não há trabalhos cadastrados!</p>
  }

  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobBoard;