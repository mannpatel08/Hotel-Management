import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeReservation } from "../redux/actions";

const ReservationForm = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    room: "",
    checkin: "",
    checkout: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makeReservation(formData));
    alert("Reservation Successful");
  };

  return (
    <div className="container mt-4">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <h3 className="mb-4 text-center">
              Book a Room
            </h3>

            <form onSubmit={handleSubmit}>

              <input
                className="form-control mb-3"
                placeholder="Customer Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                className="form-control mb-3"
                placeholder="Room Type"
                onChange={(e) =>
                  setFormData({ ...formData, room: e.target.value })
                }
              />

              <input
                type="date"
                className="form-control mb-3"
                onChange={(e) =>
                  setFormData({ ...formData, checkin: e.target.value })
                }
              />

              <input
                type="date"
                className="form-control mb-3"
                onChange={(e) =>
                  setFormData({ ...formData, checkout: e.target.value })
                }
              />

              <button className="btn btn-primary w-100">
                Reserve Room
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ReservationForm;