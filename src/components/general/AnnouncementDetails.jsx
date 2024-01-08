import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../config/firebase";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const AnnouncementDetails = () => {
  const [loading, setLoading] = useState(true);

  const url = useLocation().pathname;
  const [announcement, setAnnouncement] = useState({});

  // state to hold alerts
  const [alert, setAlert] = useState({
    alert: false,
    message: "",
  });

  useEffect(() => {
    const announcementId = url.split("/")[3];

    let announcement =
      JSON.parse(sessionStorage.getItem("announcement")) ?? false;
    if (announcement) {
      // fetch announcement from session storage
      setAnnouncement(announcement);
      setLoading(false);
    } else {
      const fetchAnnouncements = async () => {
        try {
          let announcementRef = await getDoc(
            doc(db, "announcements", announcementId)
          );
          let announcement = {
            id: announcementRef.id,
            ...announcementRef.data(),
          };

          // save announcement to session storage
          sessionStorage.setItem("announcement", JSON.stringify(announcement));
          setAnnouncement(announcement);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
          setAlert({
            alert: true,
            message: "An error occurred. Please try again.",
          });
        }
      };

      fetchAnnouncements();
    }

    return () => {
      sessionStorage.removeItem("announcement");
      setAnnouncement({});
      setLoading(true);
    };
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="m-4">
      {alert.alert === true ? (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {alert.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-between">
            <h2 className="text-muted fs-3">Announcement Details</h2>
            <div>
              <button className="btn btn-primary">Mark as broadcast</button>
            </div>
          </div>
          <div className="my-3 border rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="d-flex align-items-center">
                  <span>
                    <i className="bi bi-person-circle fs-3 text-primary"></i>
                  </span>
                  <span className="px-3">{announcement.clientName}</span>
                </div>

                <div>
                  <span>
                    <i className="bi bi-telephone fs-3 text-warning"></i>
                  </span>
                  <span className="px-3">{announcement.clientContact}</span>
                </div>

                <div>
                  <span>
                    <i className="bi bi-tag fs-3 text-danger"></i>
                  </span>
                  <span className="px-3">{announcement.categoryName}</span>
                </div>

                <div>
                  <span>
                    <i className="bi bi-broadcast fs-3 text-success"></i>
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
                <div>
                  <span className="text-muted">UGX</span>
                  <span className="fs-3 px-3">
                    {announcement.amount.toLocaleString("en-US")}
                  </span>
                </div>
              </div>
            </div>

            <div className="my-3">{announcement.message}</div>
          </div>

          <div>
            <Link to="/radio/announcements">
              <button className="btn btn-primary">Back</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementDetails;
