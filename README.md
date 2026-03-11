# Hotel Management System (React + Redux)

A simple **Hotel Management System** built using **React.js, Redux, Bootstrap, and JSON Server**.
This project allows users to view rooms, make reservations, and manage bookings using CRUD operations.

---

## 📌 Project Overview

The Hotel Management System is a web application that helps manage hotel room bookings.
Users can view available rooms, reserve a room, and check reservation details.

The application uses **Redux for state management** and **JSON Server as a mock backend API** to simulate real server operations.

---

## 🚀 Features

* View available hotel rooms
* Book / reserve a room
* Display reservation list
* Cancel reservations
* Responsive UI using Bootstrap
* State management using Redux
* Backend simulation using JSON Server
* CRUD operations for reservation management

---

## 📂 Project Structure

```
src
│
├── components
│   ├── Navbar.jsx
│   ├── RoomList.jsx
│   ├── ReservationForm.jsx
│   ├── ReservationList.jsx
│   └── PrivateRoute.jsx
│
├── redux
│   ├── actions.jsx
│   ├── reducers.jsx
│   └── store.jsx
│
├── App.jsx
├── main.jsx
└── styles.css
```

---


## 📊 Application Workflow

1. Rooms are fetched from the API and displayed.
2. Users can book a room using the reservation form.
3. The reservation is saved to JSON Server.
4. Reservation list fetches and displays booking data.
5. Users can cancel reservations.

---

## 🎯 Key Concepts Used

* React Functional Components
* React Hooks (`useState`, `useEffect`)
* Redux Global State Management
* Redux Thunk for async API calls
* React Router for navigation
* Bootstrap for responsive UI

---

## 📷 Screens

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4284ca37-1f64-4f40-9cb9-76c7043f7dc0" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/060e8bc2-0052-449b-96b5-d21ee1c45c87" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1cb31515-7cac-4b20-b21a-8bc8dbc79ef0" />

---

## 📌 Future Improvements

* Add room images
* Add room availability filter
* Add user authentication
* Add update/edit reservation feature

---

## 👨‍💻 Author

**Mann Patel**

---

## 📄 License

This project is for educational and learning purposes.
