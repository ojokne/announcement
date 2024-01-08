import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import Pending from "./Pending";
import Completed from "./Completed";
import All from "./All";

const AnnouncementsWrapper = () => {
  const [loading, setLoading] = useState(true);

  // state to hold the active tab
  const [active, setActive] = useState("pending");

  // state to hold all announcements
  const [announcements, setAnnouncements] = useState([]);

  // state to hold pending announcements
  const [pending, setPending] = useState([]);

  // state to hold completed announcements
  const [completed, setCompleted] = useState([]);

  // function to set the active tab
  const handleActive = (tab) => {
    setActive(tab);
  };

  useEffect(() => {
    const fetchAnnouncements = async () => {
      // fetch users with radioId
      let radioId = sessionStorage.getItem("radioId");

      const q = query(
        collection(db, "announcements"),
        where("radioId", "==", radioId)
      );

      const response = await getDocs(q);
      setAnnouncements([]);
      setPending([]);
      setCompleted([]);

      response.docs.forEach(async (data) => {
        let announcement = {
          id: data.id,
          ...data.data(),
        };
        setAnnouncements((prev) => [...prev, announcement]);

        // check for pending announcements
        if (announcement.broadcastStatus === "pending") {
          setPending((prev) => [...prev, announcement]);
        }

        // check for completed announcements
        if (announcement.broadcastStatus === "completed") {
          setCompleted((prev) => [...prev, announcement]);
        }
      });

      setLoading(false);
    };

    fetchAnnouncements();
    return () => {
      setAnnouncements([]);
      setPending([]);
      setCompleted([]);
      setLoading(true);
    };
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="m-4">
      <div>
        <button
          className={`m-3 btn position-relative ${
            active === "pending" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => handleActive("pending")}
        >
          Pending
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {pending.length}
            <span className="visually-hidden">pending announcements</span>
          </span>
        </button>
        <button
          className={`m-3 btn position-relative ${
            active === "completed" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => handleActive("completed")}
        >
          Completed
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {completed.length}
            <span className="visually-hidden">completed announcements</span>
          </span>
        </button>
        <button
          className={`m-3 btn position-relative ${
            active === "all" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => handleActive("all")}
        >
          All
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {announcements.length}
            <span className="visually-hidden">all announcements</span>
          </span>
        </button>
      </div>

      <div className="mx-3">
        {active === "pending" ? <Pending pending={pending} /> : null}
        {active === "completed" ? <Completed completed={completed} /> : null}
        {active === "all" ? <All announcements={announcements} /> : null}
      </div>
    </div>
  );
};

export default AnnouncementsWrapper;
