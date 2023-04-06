import { useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../config/api'

function CompanyForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const createCompany = async () => {
    try {
      const response = await api.post('/Company', { name, description });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const company = await createCompany()
    navigate(`/companies/${company.objectId}`)
  };

  return (
    <div>
      <h1 className="title">
        Nova Empresa
      </h1>

      <div className="box">
        <form>

          <div className="field">
            <label className="label">
              Nome
            </label>
            <div className="control">
              <input className="input" type="text" value={name}
                onChange={(event) => setName(event.target.value)}
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

export default CompanyForm;