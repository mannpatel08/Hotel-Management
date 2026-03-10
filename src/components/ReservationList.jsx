import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservations, cancelReservation } from "../redux/actions";

const ReservationList = () => {

  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div className="container mt-4">

      <h3 className="text-center mb-4">
        Reservation List
      </h3>

      <div className="card shadow p-3">

        <table className="table table-bordered table-hover">

          <thead className="table-primary">

            <tr>
              <th>Name</th>
              <th>Room</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {reservations.map((r) => (

              <tr key={r.id}>

                <td>{r.name}</td>
                <td>{r.room}</td>
                <td>{r.checkin}</td>
                <td>{r.checkout}</td>

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(cancelReservation(r.id))}
                  >
                    Cancel
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ReservationList;