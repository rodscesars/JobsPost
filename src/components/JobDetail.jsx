import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import api from '../config/api'


function JobDetail() {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [job, setJob] = useState(null)
  const [company, setCompany] = useState(null)

  const fetchJob = async () => {
    const response = await api.get(`/Job/${jobId}`);
    setJob(response.data);
    const companyId = response.data.company.objectId
    const companyResponse = await api.get(`/Company/${companyId}`)
    setCompany(companyResponse.data);
  }

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir este trabalho?');
    if (confirmDelete) {
      try {
        await api.delete(`/Job/${jobId}`);
        alert("Job deletado com sucesso!")
        console.log('Job deleted successfully!');
        navigate("/")
      } catch (error) {
        console.error(error);
      }
    }

  }

  useEffect(() => {
    fetchJob()
  }, [])

  if (!job || !company) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="title">
        {job.title}
      </h1>

      <h2 className="subtitle">
        {company && (<Link to={`/companies/${company.objectId}`}>
          {company.name}
        </Link>)}

      </h2>

      <div className="box">
        {job.description}
      </div>


      <button className="button is-success" onClick={() => {
        navigate(`/jobs/{${job.objectId}/edit`, { state: { job: job, company: company } })
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

export default JobDetail;