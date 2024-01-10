import { useEffect } from "react";
import BarChart from "./BarChart";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Spinner from "../general/Spinner";

const Dashboard = () => {
  const navigate = useNavigate();
  // state to hold loading status
  const [loading, setLoading] = useState(true);

  // state to hold total amount
  const [amount, setAmount] = useState({
    total: 0,
    death: 0,
    business: 0,
    corporate: 0,
    totalAnnouncements: 0,
  });

  // state to hold  Pending announcements
  const [pending, setPending] = useState({
    total: 0,
    death: 0,
    business: 0,
    corporate: 0,
  });

  // state to completed announcements
  const [completed, setCompleted] = useState({
    total: 0,
    death: 0,
    business: 0,
    corporate: 0,
  });

  // state to hold announcement totals
  const [announcements, setAnnouncements] = useState({
    total: 0,
    death: 0,
    business: 0,
    corporate: 0,
  });

  useEffect(() => {
    let unsubcribeFromFirestore;
    const fetchAnnouncements = async () => {
      let clientRef = await getDoc(doc(db, "users", auth.currentUser.uid));
      const querySnapShot = query(
        collection(db, "announcements"),
        where("radioId", "==", clientRef.data().radioId)
      );

      unsubcribeFromFirestore = onSnapshot(
        querySnapShot,
        (snapshot) => {
          if (snapshot.empty) {
            setDisplay(false);
            setLoading(false);
          } else {
            let totalAmount = 0;
            let amountDeath = 0;
            let amountBusiness = 0;
            let amountCorporate = 0;

            let totalPending = 0;
            let totalPendingDeath = 0;
            let totalPendingBusiness = 0;
            let totalPendingCorporate = 0;

            let totalCompleted = 0;
            let totalCompletedDeath = 0;
            let totalCompletedBusiness = 0;
            let totalCompletedCorporate = 0;

            let totalAnnouncements = snapshot.docs.length;
            let totalDeath = 0;
            let totalBusiness = 0;
            let totalCorporate = 0;

            for (let i = 0; i < snapshot.docs.length; i++) {
              let announcement = snapshot.docs[i].data();
              totalAmount += announcement.amount;

              if (announcement.categoryId == 1) {
                amountDeath += announcement.amount;
                totalDeath += 1;
                if (announcement.broadcastStatus == "pending") {
                  totalPending += 1;
                  totalPendingDeath += 1;
                }
                if (announcement.broadcastStatus == "completed") {
                  totalCompletedDeath += 1;
                  totalCompleted += 1;
                }
              }

              if (announcement.categoryId == 2) {
                amountBusiness += announcement.amount;
                totalBusiness += 1;
                if (announcement.broadcastStatus == "pending") {
                  totalPending += 1;
                  totalPendingBusiness += 1;
                }
                if (announcement.broadcastStatus == "completed") {
                  totalCompleted += 1;
                  totalCompletedBusiness += 1;
                }
              }

              if (announcement.categoryId == 3) {
                amountCorporate += announcement.amount;
                totalCorporate += 1;
                if (announcement.broadcastStatus == "pending") {
                  totalPending += 1;
                  totalPendingCorporate += 1;
                }
                if (announcement.broadcastStatus == "completed") {
                  totalCompleted += 1;
                  totalCompletedCorporate += 1;
                }
              }
            }

            setAmount((prev) => {
              return {
                ...prev,
                total: totalAmount,
                death: amountDeath,
                business: amountBusiness,
                corporate: amountCorporate,
              };
            });

            setPending((prev) => {
              return {
                ...prev,
                total: totalPending,
                death: totalPendingDeath,
                business: totalPendingBusiness,
                corporate: totalPendingCorporate,
              };
            });

            setCompleted((prev) => {
              return {
                ...prev,
                total: totalCompleted,
                death: totalCompletedDeath,
                business: totalCompletedBusiness,
                corporate: totalCompletedCorporate,
              };
            });

            setAnnouncements((prev) => {
              return {
                ...prev,
                total: totalAnnouncements,
                death: totalDeath,
                business: totalBusiness,
                corporate: totalCorporate,
              };
            });

            setLoading(false);
          }
        },
        (err) => {
          console.log(err.code);
          setLoading(false);
        }
      );
    };

    let unsubcribeFromAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchAnnouncements();
      } else {
        navigate("/login");
      }
    });

    return () => {
      if (unsubcribeFromAuth) {
        unsubcribeFromAuth();
      }
      if (unsubcribeFromFirestore) {
        unsubcribeFromFirestore();
      }
    };
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="mx-3 my-3">
      <h2 className="text-muted fs-3">Dashboard</h2>

      <div className="border rounded">
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-5">
              <div className="row">
                <div className="col mt-4 d-flex justify-content-around align-items-center">
                  <span className="text-muted">Total Amount </span>
                  <span className="fs-1 text-success">
                    {amount.total.toLocaleString("en-US")}
                  </span>
                </div>
              </div>
              <div className="row g-3 mt-2">
                <div className="col">
                  <div className="row">
                    <div className="col-6">
                      <div className="border rounded bg-light p-2 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-muted lead me-3">Pending</span>
                          <i className="bi bi-clock fs-3 text-warning"></i>
                        </div>
                        <span className="fs-3">
                          {pending.total.toLocaleString("en-US")}
                        </span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="border rounded bg-light p-2  mb-3 d-flex justify-content-between">
                        <div>
                          <div className="text-muted">Death</div>
                          <div className="text-muted">Business</div>
                          <div className="text-muted">Corporate</div>
                        </div>
                        <div>
                          <div>{pending.death.toLocaleString("en-US")}</div>
                          <div>{pending.business.toLocaleString("en-US")}</div>
                          <div>{pending.corporate.toLocaleString("en-US")}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <div className="border rounded bg-light p-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-muted lead me-3">
                            Completed
                          </span>
                          <i className="bi bi-check2 fs-3 text-success"></i>
                        </div>
                        <span className="fs-3">
                          {completed.total.toLocaleString("en-US")}
                        </span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="border rounded bg-light p-2  mb-3 d-flex justify-content-between">
                        <div>
                          <div className="text-muted">Death</div>
                          <div className="text-muted">Business</div>
                          <div className="text-muted">Corporate</div>
                        </div>
                        <div>
                          <div>{completed.death.toLocaleString("en-US")}</div>
                          <div>
                            {completed.business.toLocaleString("en-US")}
                          </div>
                          <div>
                            {completed.corporate.toLocaleString("en-US")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7 bg-light">
              <div className="p-3">
                <BarChart
                  title="Announcements per category"
                  labels={["Death", "Business", "Corporate"]}
                  values={[
                    announcements.death,
                    announcements.business,
                    announcements.corporate,
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-5">
              <div className="row g-3 mt-3">
                <div className="col-4">
                  <div className="d-flex flex-column border rounded p-3 bg-light">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted">Death</span>
                    </div>
                    <div>
                      <span className="text-muted pe-2">UGX</span>
                      <span>{amount.death.toLocaleString("en-US")}</span>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex flex-column border rounded p-3 bg-light">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted">Business</span>
                    </div>
                    <div>
                      <span className="text-muted pe-2">UGX</span>
                      <span>{amount.business.toLocaleString("en-US")}</span>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex flex-column border rounded p-3 bg-light">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted">Corporate</span>
                    </div>
                    <div>
                      <span className="text-muted pe-2">UGX</span>
                      <span>{amount.corporate.toLocaleString("en-US")}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col mt-4 d-flex justify-content-around align-items-center">
                  <span className="text-muted">Total Announcements </span>
                  <span className="fs-1 text-success">
                    {announcements.total.toLocaleString("en-US")}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-7 bg-light">
              <BarChart
                title="Amount per category"
                labels={["Death", "Business", "Corporate"]}
                values={[amount.death, amount.business, amount.corporate]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
