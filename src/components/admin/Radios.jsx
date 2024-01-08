import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";
import { useState, useEffect } from "react";
import Spinner from "../general/Spinner";

const Radios = () => {
  const [radios, setRadios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRadios = async () => {
      const response = await getDocs(collection(db, "radioStations"));
      setRadios([]);
      response.docs.forEach((doc) => {
        let radio = {
          id: doc.id,
          ...doc.data(),
        };
        setRadios((prev) => [...prev, radio]);
      });
      setLoading(false);
    };

    fetchRadios();
    return () => {
      setRadios([]);
      setLoading(true);
    };
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className="mx-5 my-3">
      <div className="d-flex justify-content-between">
        <h2 className="text-muted fs-3">Radios</h2>
        <div>
          <Link to="/admin/add_radio">
            <button className="btn btn-primary">Add Radio Station</button>
          </Link>
        </div>
      </div>

      {radios.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
          <i className="bi bi-search icon-lg"></i>

          <p className="">Unfortunately we did not find any radio station</p>
          <Link to="/admin/add_radio">
            <button className="btn btn-primary m-3">Add Radio Station</button>
          </Link>
        </div>
      ) : (
        <div className="border rounded mt-3 p-3">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Frequency</th>
                <th scope="col">Email</th>
                <th scope="col">District</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {radios.map((radio, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{radio.name}</td>
                    <td>{radio.frequency}</td>
                    <td>{radio.email}</td>
                    <td>{radio.district}</td>
                    <td>
                      <span
                        className={`badge ${
                          radio.status === "active" ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {radio.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Radios;
