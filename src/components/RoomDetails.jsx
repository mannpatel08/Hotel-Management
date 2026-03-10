const RoomDetails = ({ room }) => {

  return (
    <div className="card p-3">
      <h5>{room.name}</h5>
      <p>Type: {room.type}</p>
      <p>Price: ₹{room.price}</p>
      <p>Status: {room.available ? "Available" : "Booked"}</p>
    </div>
  );

};

export default RoomDetails;