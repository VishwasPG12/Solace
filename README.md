# Solace Vault

Solace Vault is a minimalist, full-stack AI-powered wellness companion designed to provide a secure, confidential space for users to reflect and process their thoughts. Leveraging the high-speed Groq inference engine, the platform delivers near-instant responses while enforcing hardcoded safety guardrails and strict user privacy.

Live Demo: https://solace-vault.vercel.app

---

## Key Features

* **AI Wellness Interface:** Fast conversational processing powered by Groq (Llama 3.1) with custom system prompting configured for empathetic active listening.
* **Crisis Middleware Intercept:** An automated Node.js/Express validation layer that scans incoming inputs for high-risk keywords, drops the AI connection instantly, and surfaces human lifelines.
* **Frontend Security Lock:** A reactive client-side state mechanism that freezes user input upon crisis detection to prioritize professional support.
* **Interactive Grounding:** A 1-minute visual box-breathing tool driven by pure CSS animations to assist with grounding and regulation.
* **Privacy-First Architecture:** Decentralized session metrics that utilize local browser context, ensuring zero long-term database footprint.

---

## Tech Stack

### Frontend
* React.js (Vite)
* Tailwind CSS v4.0
* React Router v6

### Backend
* Node.js & Express
* Groq Cloud SDK

---

## Environment Variables

To run this project locally, configure the following keys:

### Backend (/backend/.env)
PORT=5000
GROQ_API_KEY=your_groq_api_key

### Frontend (/frontend/.env)
VITE_API_URL=http://localhost:5000

---

## Local Setup Instructions

### 1. Clone the Repository
git clone https://github.com/VishwasPG12/Solace.git
cd solace

### 2. Run the Backend
cd backend
npm install
npm run dev

The server will initialize at http://localhost:5000.

### 3. Run the Frontend
cd ../frontend
npm install
npm run dev

The client will initialize at http://localhost:5173.

---

## System Architecture

1. **Client Layer:** User interfaces track local mood states and pass conversational history vectors to the server.
2. **Middleware Intercept:** Backend parses text streams for emergency triggers before hitting the LLM wrapper.
3. **Inference Execution:** Validated tokens are processed securely via Groq Cloud's LPU runtime environments.

---

## Medical Disclaimer

Solace Vault is an AI-powered wellness companion built for emotional support and self-reflection. It does not provide clinical diagnoses, medical treatment, or formal crisis intervention. If you are experiencing a mental health emergency, please contact your local emergency services or a verified human lifeline immediately.