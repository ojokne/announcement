import { Link } from "react-router-dom";
import AnnouncementSummary from "./AnnouncementSummary";

/**
 *
 * @returns announcements in the database for the radio station
 * waiting to be broadcast
 *
 *
 */
const Pending = ({ pending }) => {
  return (
    <div>
      {pending.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center flex-column mt-3 p-5 border rounded">
          <i className="bi bi-search icon-lg"></i>

          <p className="">
            Hooray, there are no announcements waiting to be broadcast
          </p>
          <Link to="/radio">
            <button className="btn btn-primary m-3">Dashboard</button>
          </Link>
        </div>
      ) : (
        <div>
          {pending.map((announcement, index) => {
            return (
              <AnnouncementSummary key={index} announcement={announcement} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pending;
