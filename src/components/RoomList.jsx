import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../redux/actions";

const RoomList = () => {

  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  return (
    <div className="container mt-4">

      <h3 className="text-center mb-4">Available Rooms</h3>

      <div className="row">

        {rooms.map((room) => (

          <div className="col-md-4 mb-4" key={room.id}>

            <div className="card shadow h-100">

              <div className="card-body">

                <h5 className="card-title">{room.name}</h5>

                <p className="card-text">
                  <strong>Type:</strong> {room.type}
                </p>

                <p className="card-text">
                  <strong>Price:</strong> ₹{room.price}
                </p>

                <span className={`badge ${room.available ? "bg-success" : "bg-danger"}`}>
                  {room.available ? "Available" : "Booked"}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RoomList;