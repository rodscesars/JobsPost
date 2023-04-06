import { useParams } from 'react-router';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import api from '../config/api'
import JobList from './JobList'


function CompanyDetail() {
  const navigate = useNavigate();
  const { companyId } = useParams();
  const [company, setCompany] = useState(null)
  const [jobs, setJobs] = useState([])

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


  const handleDelete = async () => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir esta companhia?');
    if (confirmDelete) {
      try {
        await api.delete(`/Company/${companyId}`);
        alert("Companhia deletada com sucesso!")
        navigate("/")
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    fetchCompany()
  }, [companyId])

  if (!company || !jobs) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>

      {jobs.length == 0 ? <p>Não há jobs cadastrados para essa empresa!</p> : (<> <h5 className="title is-5">Jobs em {company.name}</h5>
        <JobList jobs={jobs} /> </>)}


      <button className="button is-success" onClick={() => {
        navigate(`/companies/{${company.objectId}/edit`, { state: { company: company } })
      }}>
        <span className="icon is-small">
          <i className="fas fa-check"></i>
        </span>
        <span>Editar</span>
      </button>

      <button className="button is-danger is-outlined" onClick={handleDelete}>
        <span>Deletar</span>
        <span className="icon is-small">
          <i className="fas fa-times"></i>
        </span>
      </button>

    </div>

  );
}

export default CompanyDetail;