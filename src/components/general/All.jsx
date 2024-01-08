import { Link } from "react-router-dom";
import AnnouncementSummary from "./AnnouncementSummary";

/**
 *
 * @returns all announcements in the database for the radio station
 *
 *
 */
const All = ({announcements}) => {
  return (
    <div>
    {announcements.length === 0 ? (
      <div className="d-flex justify-content-center align-items-center flex-column mt-3 p-5 border rounded">
        <i className="bi bi-search icon-lg"></i>

        <p className="">
          Unforturnately, you have not yet recieved any announcements 
        </p>
        <Link to="/radio">
          <button className="btn btn-primary m-3">Dashboard</button>
        </Link>
      </div>
    ) : (
      <div>
        {announcements.map((announcement, index) => {
          return (
            <AnnouncementSummary key={index} announcement={announcement} />
          );
        })}
      </div>
    )}
  </div>
  );
};

export default All;
