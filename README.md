# Solace Vault

A minimalist, full-stack AI wellness companion providing a private space to reflect and process thoughts. Built using the MERN stack and powered by the Groq inference engine.

Live Demo: https://solace-vault.vercel.app

## Features
* Fast AI Conversational Interface: Near-instant, empathetic responses powered by Groq (Llama 3.1).
* Crisis Middleware Intercept: Backend scans input for high-risk words, drops the AI connection, and surfaces lifelines.
* Frontend Security Lock: UI freezes form inputs immediately upon crisis detection.
* Interactive Grounding Tool: Animated 1-minute box-breathing guide built with pure CSS.
* Privacy-First Design: Stores mood tracking and history in local context with no data footprints.

## Tech Stack
* Frontend: React.js (Vite), Tailwind CSS v4.0, React Router v6
* Backend: Node.js, Express, Groq Cloud SDK

## Configuration

### Backend Setup (/backend/.env)
PORT=5000
GROQ_API_KEY=your_groq_api_key

### Frontend Setup (/frontend/.env)
VITE_API_URL=http://localhost:5000

## Quick Start

1. Clone project:
git clone https://github.com/VishwasPG12/Solace.git
cd solace

2. Start Backend (Port 5000):
cd backend && npm install && npm run dev

3. Start Frontend (Port 5173):
cd ../frontend && npm install && npm run dev

## Medical Disclaimer
Solace Vault is an AI-powered wellness companion built for emotional support and self-reflection. It does not provide clinical diagnoses, medical treatment, or formal crisis intervention. If you are experiencing a mental health emergency, please contact your local emergency services or a verified human lifeline immediately.