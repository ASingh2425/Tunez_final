# 🎵 Tunez — Full-Stack Music Discovery Platform

A dynamic full-stack web application for music lovers to explore, search, favorite songs, submit contact messages, and view listener reviews — built with **Next.js App Router**, **Tailwind CSS**, **Express**, and **MongoDB**.

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.3-06B6D4?logo=tailwind-css)
![Express](https://img.shields.io/badge/Express-4.19.2-gray?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-8.3.5-47A248?logo=mongodb)

---

## 📑 Project Features

✅ Music discovery cards with images and descriptions  
✅ Filter by language, genre, and search bar  
✅ Individual Song Details pages using dynamic routes  
✅ Contact form with real-time submission to MongoDB  
✅ /Reviews page to display submitted messages  
✅ Favorites page (local-only for now)  
✅ Responsive, mobile-friendly Tailwind UI  
✅ Smooth animations and transitions  

---

## 📦 Tech Stack

- **Frontend:** Next.js (App Router), Tailwind CSS  
- **Backend:** Express, Node.js, MongoDB (via Mongoose)  
- **State Management:** useState, useEffect, useParams  
- **API:** Fetch (REST)  
- **Deployment:** Netlify (for frontend in original version)

---

## 📂 Folder Structure

tunez/
├── frontend/
│ ├── app/
│ │ ├── components/
│ │ ├── explore/
│ │ ├── contact/
│ │ ├── reviews/
│ │ ├── favorites/
│ │ ├── song/[id]/
│ │ └── page.jsx
│ ├── public/
│ ├── styles/
│ ├── package.json
│ ├── tailwind.config.js
│ └── next.config.mjs
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ ├── package.json
│ └── .env


---

## 📖 How It Works

### 🎧 Explore Page  
Displays music cards with filtering by **genre**, **language**, and **search bar** using `useState` and `.filter()`.

### 🎶 Song Details  
Each card links to a dynamic route `/song/[id]` displaying its details using `useParams()`.

### 📩 Contact Page  
A form submits data via `POST /api/contact` to Express → MongoDB.  

### 📃 Reviews Page  
Fetches all contact submissions via `GET /api/contact` and displays them.

---

## ⚙️ Installation & Setup

### 📌 Prerequisites:
- Node.js
- MongoDB Atlas / local MongoDB

---

### 📥 Clone the Repo
```bash
git clone https://github.com/yourusername/tunez-fullstack
cd tunez
```
### Install Dependencies
- Frontend
  cd frontend
  npm install
  npm run dev
  
- Backend
  cd backend
  npm install
  npm start

### Set Environment Variables
in/backend/.env
MONGO_URI=mongodb+srv://your_mongo_connection_string

### 📚 Concepts Implemented
Next.js App Router

useState / useEffect / useParams

Dynamic Routing

REST APIs

Conditional Rendering

Tailwind CSS Responsive Design

Animations with Tailwind transitions

MongoDB Integration with Mongoose

Express Routing and Controllers

## 📣 Author
Anvesha Singh — LinkedIn
