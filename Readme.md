
---

# 🧠 User Authentication API with Express & MongoDB

This is a basic Node.js REST API using Express and MongoDB for user registration and login with password hashing using `bcryptjs`.

## 📁 Project Structure

```
project-root/
├── models/
│   └── user.moduls.js
├── .env
├── server.js
├── package.json
└── README.md
```

## 🚀 Features

* User registration with password hashing
* User login with password verification
* CORS enabled for frontend communication
* MongoDB connection using Mongoose
* API built with Express

## 📦 Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcryptjs
* dotenv
* CORS

## 📥 Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

## 🛠️ Environment Variables

Create a `.env` file in the root directory and add:

```
MONGO_URL=your_mongodb_connection_string
```

## 🧪 API Endpoints

### `GET /`

Check if the API is running.

**Response:**

```json
"This is home api"
```

---

### `POST /register`

Register a new user.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

**Success Response:**

```json
{
  "message": "User is created",
  "user": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "password": "hashed_password"
  }
}
```

---

### `POST /signup`

Login an existing user.

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

**Success Response:**

```json
{
  "message": "Login successful",
  "user": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "password": "hashed_password"
  }
}
```

---

### `GET /user`

Fetch all users.

**Success Response:**

```json
[
  {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com"
  },
  ...
]
```

## ✅ To Do

* Add JWT for session management
* Implement user profile and role-based access
* Add email verification or password reset

## 🧑‍💻 Author

**Sukhdeep Singh**

## 📜 License

This project is licensed under the MIT License.

---

