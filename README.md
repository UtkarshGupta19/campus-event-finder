# Campus Event Finder

Campus Event Finder is a responsive, mobile-first web platform that allows students to discover, RSVP to, and track campus events in real-time. Designed to replace fragmented communication channels with a centralized, live system.

![Demo Banner](https://images.unsplash.com/photo-1540575467063-112fa2be8a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🚀 Features

- **Event Discovery Feed**: Infinite scroll feed with filters (category, date) and search functionality.
- **Live RSVP Tracking**: Real-time capacity visualization utilizing WebSockets.
- **Strict Capacity Limits**: Database transactions and locking to strictly enforce event capacities.
- **Organizer Dashboard**: Interface for organizers to create events and track attendee numbers.
- **Mock SSO Authentication**: Simulated University SSO using JWT authentication for development.

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript, Socket.IO
- **Database**: SQLite (Development) / PostgreSQL (Production ready), Prisma ORM
- **Deployment**: Vercel (Frontend compatible), Localhost tunneling

## 📂 Project Structure

This is a monorepo setup containing both frontend and backend environments:

```
campus-event-finder/
├── frontend/      # Next.js React application
├── backend/       # Express.js API & Socket server
└── README.md
```

## ⚙️ Local Development Setup

To run this project locally, ensure you have Node.js (v20+) installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/UtkarshGupta19/campus-event-finder.git
cd campus-event-finder
```

### 2. Setup Backend
```bash
cd backend
npm install
npx prisma db push
npx prisma generate
npm run dev
```
The backend server will run on `http://localhost:5000`.

### 3. Setup Frontend
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
The frontend will run on `http://localhost:3000`.

## 🌐 Live Deployment
- **Live Local Tunnel (Temp)**: [https://54d7e3b708bce4.lhr.life](https://54d7e3b708bce4.lhr.life)

## 📝 License
This project was built for Hackathon purposes. All rights reserved.
