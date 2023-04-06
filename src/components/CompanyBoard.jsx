import { useState, useEffect } from 'react'
import api from '../config/api'
import CompanyList from './CompanyList';

function CompanyBoard() {
  const [companies, setCompanies] = useState([])

  const fetchCompanies = async ()=> {
    const response = await api.get("/Company")
    setCompanies(response.data.results) 
  }

  useEffect(()=>{
  fetchCompanies()
  }, [companies])

  if(companies.length === 0) {
    return <p>Desculpe, não há companhias cadastradas!</p>
  }
  
  return (
    <div>
      <h1 className="title">
        Company Board
      </h1>
    <CompanyList companies={companies} />
    </div>
  );
}

export default CompanyBoard;