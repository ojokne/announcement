import { useLocation, useNavigate } from "react-router-dom";

const AnnouncementSummary = ({ announcement }) => {
  const navigate = useNavigate();

  const url = useLocation().pathname;

  // get user from url either admin or radio
  const user = url.split("/")[1];

  const handleAnnouncementClick = () => {
    // save announcement to session storage
    sessionStorage.setItem("announcement", JSON.stringify(announcement));
    if (user == "radio") {
      navigate(`/radio/announcements/${announcement.id}`);
    }

    if (user == "admin") {
      navigate(`/admin/announcements/${announcement.id}`);
    }
  };

  return (
    <div
      className="border rounded p-3 mb-3 hover"
      onClick={() => handleAnnouncementClick()}
    >
      <div className="d-flex justify-content-between">
        <div>
          {user === "admin" ? (
            <div>
              <span>
                <i className="bi bi-boombox text-primary"></i>
              </span>
              <span className="px-3">{announcement.radioName}</span>
            </div>
          ) : null}

          <div>
            <span>
              <i className="bi bi-tag text-danger"></i>
            </span>
            <span className="px-3">{announcement.categoryName}</span>
          </div>

          <div>
            <span>
              <i className="bi bi-broadcast  text-success"></i>
            </span>
            <span className="px-3">
              {announcement.numberOfBroadcasts}{" "}
              {announcement.numberOfBroadcasts == 1
                ? "broadcast"
                : "broadcasts"}
            </span>
          </div>
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
    </div>
  );
};

export default AnnouncementSummary;
