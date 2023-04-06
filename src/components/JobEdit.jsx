import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import api from '../config/api'


function JobEdit() {
  const location = useLocation();
  const job = location.state.job;
  const companyId = location.state.company.objectId;
  
  const navigate = useNavigate();
  
  const [title, setTitle] = useState(job.title);
  const [description, setDescription] = useState(job.description);
  const [newCompanyId, setNewCompanyId] = useState(companyId)
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    const response = await api.get("Company")
    setCompanies(response.data.results)
  }

  const updateJob = async () => {
  try {
    await api.put(`/Job/${job.objectId}`, {title, description, company: {
    __type: 'Pointer',
    className: 'Company',
    objectId: newCompanyId
    }});
    alert("Job atualizado com sucesso!")
  } catch (error) {
    console.error(error);
  }
};
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateJob()
    navigate(`/companies/${job.objectId}`)
  };

  useEffect(() => {
  fetchCompanies();
  }, []);


  return (
    <div>
      <h1 className="title">
        Atualizar Job
      </h1>

      <div className="box">
        <form>

          <div className="field">
            <label className="label">
              Título
            </label>
            <div className="control">
              <input className="input" type="text" value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">
              Descrição
            </label>
            <div className="control">
              <textarea className="textarea" rows={10} value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>

          <div className="field">
            
            <label className="label">
              Empresa
            </label>
            
            <div className="control">
              <select
                value={newCompanyId}
                onChange={(event) =>       setNewCompanyId(event.target.value)}>
                {companies.map(company => (
                  <option key={company.objectId} value={company.objectId}>{company.name}                      </option>))}
              </select>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-link"
                onClick={handleSubmit}>
                Salvar
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}

export default JobEdit;
