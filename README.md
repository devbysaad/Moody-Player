<div align="center">

# 🎵 Moody Player

**An AI-powered music player that reads your face and plays songs that match your mood.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20App-6366f1?style=for-the-badge&logo=vercel)](https://moodytyunes.vercel.app/)
![React](https://img.shields.io/badge/React-Vite-61DAFB?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb)

</div>

---

## 🧠 Overview

**Moody Player** uses your webcam to detect facial expressions in real-time using **Face API.js** — *happy, sad, neutral, surprised*, and more — then automatically fetches and plays mood-matched songs from a MongoDB database through an Express backend.

Minimal UI. Smart detection. Seamless vibes.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎥 **Real-time Mood Detection** | Detects your facial expression live via webcam using Face API.js |
| 🎧 **Mood-based Song Fetching** | Pulls songs from MongoDB that match your detected mood |
| ▶️ **Per-song Play / Pause** | Only one track plays at a time — clean and controlled |
| 🌗 **Dark Modern UI** | Sleek interface built with TailwindCSS |
| ⚙️ **Full-stack Integration** | React frontend + Express backend + MongoDB |
| 🧩 **Modular Architecture** | Clean hooks and component structure throughout |

---

## 🛠 Tech Stack

### Frontend
- ⚛️ **React** (Vite)
- 🎨 **Tailwind CSS**
- 🤖 **Face API.js** — facial expression detection
- 📡 **Axios** — backend API calls

### Backend
- 🟢 **Node.js**
- 🚀 **Express.js**
- 💾 **MongoDB** via Mongoose
- ☁️ **Multer** — file upload handling
- 🖼️ **ImageKit** — media storage (optional)

---

## 📂 Project Structure

```
moody-player/
├── client/                  # React frontend (Vite)
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── hooks/           # Custom React hooks
│   │   └── App.jsx
│   └── public/
│       └── models/          # Face API.js model files
│
└── server/                  # Express backend
    ├── routes/              # API routes
    ├── models/              # Mongoose schemas
    └── index.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### 1. Clone the repo
```bash
git clone https://github.com/your-username/moody-player.git
cd moody-player
```

### 2. Setup the backend
```bash
cd server
npm install
```

Create a `.env` file:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

```bash
npm run dev
```

### 3. Setup the frontend
```bash
cd client
npm install
npm run dev
```

App runs at `http://localhost:5173`

---

## 🌐 Live Demo

👉 [moody-player-xi6t.vercel.app](https://moodytyunes.vercel.app/)

---

<div align="center">
  <sub>Built by <strong>Muhammad Saad</strong></sub>
</div>
