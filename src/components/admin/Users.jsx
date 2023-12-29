import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div className="mx-5 my-3">
      <div className="d-flex justify-content-between">
        <h2 className="text-muted fs-3">Users</h2>
        <div className="w-50">
          <input
            class="form-control w-100"
            list="datalistOptions"
            id="radioDataList"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            <option value="San Francisco" />
          </datalist>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center flex-column mt-5">
        <i className="bi bi-search icon-lg"></i>

        <p className="">Unfortunately we did not find any users</p>
        <button className="btn bg-primary-color m-3">
          <Link to="/admin/add_user">Add User</Link>
        </button>
      </div>
    </div>
  );
};

export default Users;
