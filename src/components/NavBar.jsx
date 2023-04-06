import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Jobs
        </Link>
        <Link className="navbar-item" to="/companies">
          Empresas
        </Link>
        <Link className="navbar-item" to="/jobs/new">
          Criar Job
        </Link>
        <Link className="navbar-item" to="/companies/new">
          Criar Empresa
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;