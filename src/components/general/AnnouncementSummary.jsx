import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AnnouncementSummary = ({ announcement }) => {
  const navigate = useNavigate();

  const url = useLocation().pathname;

  // get user from url either admin or radio
  const user = url.split("/")[1];

  const handleAnnouncementClick = () => {
    // save announcement to session storage
    sessionStorage.setItem("announcement", JSON.stringify(announcement));
    navigate(`/radio/announcements/${announcement.id}`);
  };

  return (
    <div
      className="border rounded p-3 mb-3 hover"
      onClick={() => handleAnnouncementClick()}
    >
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          {user === "admin" ? <span>{announcement.radioName}</span> : null}
          <span>{announcement.categoryName}</span>
          <span>
            {announcement.numberOfBroadcasts}{" "}
            {announcement.numberOfBroadcasts == 1 ? "broadcast" : "broadcasts"}
          </span>
        </div>
        <div>
          <span>
            <span className="text-muted" style={{ fontSize: "0.7rem" }}>
              UGX
            </span>
            <strong> {announcement.amount.toLocaleString("en-US")}</strong>
          </span>
        </div>
      </div>

      <div className="d-flex align-items-center">
        {announcement.broadcastStatus === "pending" ? (
          <button className="btn btn-outline-success my-2">
            Mark as complete
          </button>
        ) : null}

        {announcement.broadcastStatus === "completed" ? (
          <button className="btn btn-outline-success my-2">
            Mark as pending
          </button>
        ) : null}
        <div>
          <i className="bi bi-download text-success fs-2 mx-3 hover"></i>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementSummary;
