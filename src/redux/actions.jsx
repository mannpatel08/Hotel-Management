import axios from "axios";

const API = "http://localhost:5000";

// fetch rooms
export const fetchRooms = () => async (dispatch) => {
  const res = await axios.get(`${API}/rooms`);

  dispatch({
    type: "SET_ROOMS",
    payload: res.data
  });
};

// fetch reservations
export const fetchReservations = () => async (dispatch) => {
  const res = await axios.get(`${API}/reservations`);

  dispatch({
    type: "SET_RESERVATIONS",
    payload: res.data
  });
};

// make reservation
export const makeReservation = (data) => async (dispatch) => {
  await axios.post(`${API}/reservations`, data);

  dispatch(fetchReservations());
};

// cancel reservation
export const cancelReservation = (id) => async (dispatch) => {
  await axios.delete(`${API}/reservations/${id}`);

  dispatch(fetchReservations());
};