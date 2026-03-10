import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">

        <span className="navbar-brand fw-bold">
          Hotel Management
        </span>

        <div>
          <Link className="btn btn-light mx-1" to="/">Rooms</Link>
          <Link className="btn btn-light mx-1" to="/reserve">Book Room</Link>
          <Link className="btn btn-light mx-1" to="/reservations">Reservations</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;