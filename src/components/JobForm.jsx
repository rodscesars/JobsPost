import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import api from '../config/api'


function JobForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [companyId, setCompanyId] = useState("");
  const [companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    const response = await api.get("Company")
    setCompanies(response.data.results)
  }

  const createJob = async () => {
    try {
      const response = await api.post('/Job', {
        title, description, company: {
          __type: 'Pointer',
          className: 'Company',
          objectId: companyId
        }
      });
      return response.data;
      console.log(company)
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const job = await createJob()
    navigate(`/jobs/${job.objectId}`)
  };

  useEffect(() => {
    getCompanies()
  }, [])

  return (
    <div>
      <h1 className="title">
        Novo Job
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
                value={companyId}
                onChange={(event) => setCompanyId(event.target.value)}>
                {companies.map(company => (
                  <option key={company.objectId} value={company.objectId}>{company.name}</option>))}
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

export default JobForm;