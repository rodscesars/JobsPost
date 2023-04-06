import { useParams } from 'react-router';
import { useState, useEffect } from 'react'
import api from '../config/api'
import JobList from './JobList';

function CompanyDetail() {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);
  const [jobs, setJobs] = useState([]);


  const fetchCompany = async () => {
    const response = await api.get(`/Company/${companyId}`);
    setCompany(response.data);
    const jobsResponse = await api.get("/Job", {
      params: {
        where: {
          company: {
            __type: 'Pointer',
            className: 'Company',
            objectId: companyId
          }
        }
      }
    })
    setJobs(jobsResponse.data.results);
  }

  useEffect(() => {
    fetchCompany()
  }, [companyId])

  if (!company || !jobs) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
      <h5 className="title is-5">
        Jobs em {company.name}
      </h5>
      <JobList jobs={jobs} />
    </div>
  );
}

export default CompanyDetail;