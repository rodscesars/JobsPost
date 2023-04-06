import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import JobBoard from './components/JobBoard';
import JobDetail from './components/JobDetail';
import JobForm from './components/JobForm'
import JobEdit from './components/JobEdit'
import NavBar from './components/NavBar';
import CompanyDetail from './components/CompanyDetail';
import CompanyBoard from './components/CompanyBoard';
import CompanyForm from './components/CompanyForm'
import CompanyEdit from './components/CompanyEdit'



export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/"
            element={<JobBoard />}
          />
          <Route path="/jobs/:jobId"
            element={<JobDetail />}
          />
          <Route path="/jobs/:jobId/edit"
            element={<JobEdit />}
          />
          <Route exact path="/jobs/new"
            element={<JobForm />}
          />
          <Route path="/companies/:companyId"
            element={<CompanyDetail />}
          />
          <Route exact path="/companies"
            element={<CompanyBoard />}
          />
          <Route path="/companies/:companyId"
            element={<CompanyDetail />}
          />
          <Route path="/companies/:companyId/edit"
            element={<CompanyEdit />}
          />
          <Route exact path="/companies/new"
            element={<CompanyForm />}
          />
          <Route path="/companies/:companyId"
            element={<CompanyDetail />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
