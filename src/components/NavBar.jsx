import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/jobs/new">
          Criar Job
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;