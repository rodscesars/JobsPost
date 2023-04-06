import { Link } from 'react-router-dom';

function CompanyItem({ company }) {
  const name = company.name;
  return (
    <li className="media">
      <div className="media-content">
        <Link to={`/companies/${company.objectId}`}>
          {name}
        </Link>
      </div>
    </li>
  );
}

function CompanyList({ companies }) {
  return (
    <ul className="box">
      {companies.map((company) => (
        <CompanyItem key={company.objectId} company={company} />
      ))}
    </ul>
  );
}

export default CompanyList;