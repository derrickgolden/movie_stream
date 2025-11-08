# 🎬 Movie Stream Platform

A local network + online movie streaming platform built with **Node.js**, **TypeScript**, and **React**.  
Supports authentication, video playback, and episode management.

---

## 🚀 Features

- Stream movies and series locally or online  
- User authentication (JWT-based)  
- Admin panel for managing users and uploads  
- Reverse-proxy ready (Caddy / Nginx)  
- Built with TypeScript on both backend and frontend

---

## 🧰 Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React + Vite + TypeScript |
| Backend | Node.js + Express + TypeScript |
| Database | MySQL |
| Server | Caddy (reverse proxy), PM2 for process management |

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/derrickgolden/movie_stream.git
cd movie-stream

### 1. Install dependencies
cd movie_stream/backend
npm install


cd ../frontend
npm install


#### Run in development
#backend
cd movie_stream/backend
npx ts-node src/app.ts

#frontend
cd movie_stream/frontend
npm run dev

#### Build for production
#backend
cd movie_stream/backend
npm run build
pm2 start build/app.js --name movie-stream-backend ## OR RESTART SERVER

#frontend
cd movie_stream/frontend
npm run build

Then move dist to the backend;
Then is severed through caddy


