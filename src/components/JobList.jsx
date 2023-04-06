import { Link } from 'react-router-dom';

function JobItem({ job }) {
  const title = job.title;
  return (
    <li className="media">
      <div className="media-content">
        <Link to={`/jobs/${job.objectId}`}>
          {title}
        </Link>
      </div>
    </li>
  );
}

function JobList({ jobs }) {
  return (
    <ul className="box">
      {jobs.map((job) => (
        <JobItem key={job.objectId} job={job} />
      ))}
    </ul>
  );
}

export default JobList;