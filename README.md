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

## 🛠 Technologies Used

* React.js
* Redux
* Redux Thunk
* React Router DOM
* Bootstrap
* JSON Server
* JavaScript (ES6)
* HTML5 & CSS3

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

## ⚙️ Installation & Setup

### 1️⃣ Clone the project

```
git clone <repository-link>
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Install Bootstrap

```
npm install bootstrap
```

### 4️⃣ Run React App

```
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## 🔧 Setup JSON Server (Mock Backend)

Create a file called **db.json** in the root folder.

Example:

```
{
  "rooms": [
    {
      "id": 1,
      "name": "Deluxe Room",
      "type": "Deluxe",
      "price": 3000,
      "available": true
    }
  ],
  "reservations": []
}
```

Run JSON Server:

```
npx json-server --watch db.json --port 5000
```

API endpoints:

```
http://localhost:5000/rooms
http://localhost:5000/reservations
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

* Room List Page
* Reservation Form
* Reservation List Table

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
