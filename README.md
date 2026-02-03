🏫 School App (React + Node.js + MySQL)

A full-stack School Management Application built using React for the frontend and Node.js, Express, and MySQL for the backend.
Users can add schools, upload school images, and view all schools in a structured UI.

🚀 Tech Stack
Frontend

React.js

Axios

React Router DOM

CSS

Backend

Node.js

Express.js

MySQL

Multer (image upload)

CORS

Dotenv

📁 Project Structure
school_app/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.js
│   ├── package.json
│   └── .gitignore
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── schoolImages/
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md

✨ Features

Add school details

Upload school images

Fetch and display schools from MySQL database

RESTful API architecture

Image hosting using Express static folder

Responsive frontend UI

⚙️ Backend Setup (Node + Express + MySQL)

Navigate to backend:

cd backend


Install dependencies:

npm install


Create .env file:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_db


Start backend server:

npm start


Backend runs on:

http://localhost:5000

🎨 Frontend Setup (React)

Navigate to frontend:

cd frontend


Install dependencies:

npm install


Start frontend:

npm start


Frontend runs on:

http://localhost:3000

🔗 API Endpoints
Method	Endpoint	Description
POST	/api/schools	Add a school
GET	/api/schools	Get all schools

School images are served from:

/schoolImages

🗄️ Database Schema (MySQL)
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  contact VARCHAR(20),
  email_id VARCHAR(255),
  image VARCHAR(255)
);

🌐 Deployment

Frontend: Vercel

Backend: Render / Railway

Database: MySQL (cloud/local)

👩‍💻 Author

Aanchal Tiwari
B.Tech IT Student | Full Stack Developer

🔗 GitHub: https://github.com/Aanchal42

💻 Skills: React, Node.js, MySQL, MERN, Java, DSA
