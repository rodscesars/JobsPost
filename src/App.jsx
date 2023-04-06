import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import JobBoard from './components/JobBoard';
import JobDetail from './components/JobDetail';
import JobForm from './components/JobForm'
import JobEdit from './components/JobEdit'
import NavBar from './components/NavBar';
import CompanyDetail from './components/CompanyDetail';

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
        </Routes>
      </main>
    </BrowserRouter>
  )
}
