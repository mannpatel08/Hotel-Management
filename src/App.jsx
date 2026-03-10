import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import RoomList from "./components/RoomList";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<RoomList />} />
        <Route path="/reserve" element={<ReservationForm />} />
        <Route path="/reservations" element={<ReservationList />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;