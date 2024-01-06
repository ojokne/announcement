import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      // fetch users with radioId
      let radioId = sessionStorage.getItem("radioId");

      const q = query(collection(db, "users"), where("radioId", "==", radioId));

      const response = await getDocs(q);
      setUsers([]);
      response.docs.forEach((doc) => {
        let user = {
          id: doc.id,
          ...doc.data(),
        };
        console.log(user);
        setUsers((prev) => [...prev, user]);
      });
      setLoading(false);
    };

    fetchUsers();
    return () => {
      setUsers([]);
      setLoading(true);
    };
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="mx-5 my-3">
      <div className="d-flex justify-content-between">
        <h2 className="text-muted fs-3">Users</h2>
        <div>
          <Link to="/radio/add_user">
            <button className="btn btn-primary">Add User</button>
          </Link>
        </div>
      </div>

      {users.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
          <i className="bi bi-search icon-lg"></i>

          <p className="">Unfortunately we did not find any users</p>
          <Link to="/radio/add_user">
            <button className="btn btn-primary m-3">Add User</button>
          </Link>
        </div>
      ) : (
        <div className="border rounded mt-3 p-3">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.contact}</td>
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

export default Users;
