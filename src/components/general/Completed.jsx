import { Link } from "react-router-dom";
import AnnouncementSummary from "./AnnouncementSummary";

/**
 *
 * @returns announcements in the database for the radio station that have been broadcast
 *
 *
 */
const Completed = ({ completed }) => {
  return (
    <div>
      {completed.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center flex-column mt-3 p-5 border rounded">
          <i className="bi bi-search icon-lg"></i>

          <p className="">
            Unfortunately, there are no announcements marked as complete
          </p>
          <Link to="/radio">
            <button className="btn btn-primary m-3">Dashboard</button>
          </Link>
        </div>
      ) : (
        <div>
          {completed.map((announcement, index) => {
            return <AnnouncementSummary key={index} announcement={announcement} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Completed;
