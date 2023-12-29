import { Link } from "react-router-dom";

const Radios = () => {
  return (
    <div className="mx-5 my-3">
      <div className="d-flex justify-content-between">
        <h2 className="text-muted fs-3">Radios</h2>
        <div className="w-50">
          <input
            className="form-control w-100"
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

        <p className="">Unfortunately we did not find any radio station</p>
        <button className="btn bg-primary-color m-3">
          <Link to="/admin/add_radio">Add Radio Station</Link>
        </button>
      </div>
    </div>
  );
};

export default Radios;
