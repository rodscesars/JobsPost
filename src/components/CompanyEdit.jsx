import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import api from '../config/api'


function CompanyEdit() {
  const location = useLocation();
  const company = location.state.company;
  const companyId = location.state.company.objectId;
  
  const navigate = useNavigate();
  
  const [name, setName] = useState(company.name);
  const [description, setDescription] = useState(company.description);
  const [newCompanyId, setNewCompanyId] = useState(companyId)

  const updateCompany = async () => {
  try {
    await api.put(`/Company/${company.objectId}`, {name, description});
    alert("Empresa atualizada com sucesso!")
  } catch (error) {
    console.error(error);
  }
};
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateCompany()
    navigate(`/companies/${company.objectId}`)
  };


  return (
    <div>
      <h1 className="title">
        Atualizar Empresa
      </h1>

      <div className="box">
        <form>

          <div className="field">
            <label className="label">
              Name
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

export default CompanyEdit;