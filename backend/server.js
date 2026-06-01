import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Groq from 'groq-sdk';

// Load system environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize the Groq SDK client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Middleware Configuration
app.use(cors());          // Allows our React app (port 5173) to securely fetch data from Express
app.use(express.json());  // Allows Express to parse JSON data sent in request bodies

// 🚨 1. EMERGENCY MIDDLEWARE INTERCEPT
// This function scans user input for high-risk words BEFORE hitting the Groq API cloud.
const crisisSafetyCheck = (req, res, next) => {
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: "Message content cannot be blank." });
  }

  // Common crisis-related terminology
  const crisisKeywords = [
    "suicide", "harm myself", "end my life", "kill myself", 
    "overdose", "self-harm", "want to die", "cutting myself"
  ];

  const containsCrisisWord = crisisKeywords.some(word => 
    message.toLowerCase().includes(word)
  );

  if (containsCrisisWord) {
    // Intercept immediately! Halt normal execution and return a specific safety payload flag
    return res.json({
      crisisTriggered: true,
      reply: "It sounds like you're going through a deeply challenging moment. Because your safety is our absolute priority, we cannot handle this with an AI assistant. Please access our immediate human support lines using the red emergency button at the top of your screen, or call a verified lifeline right away. You do not have to carry this weight alone."
    });
  }

  // If everything is completely safe, hand control over to the normal chat route handler
  next();
};

// 💬 2. THE AI CHAT CHANNELS ROUTE
app.post('/api/chat', crisisSafetyCheck, async (req, res) => {
  const { message, history } = req.body;

  try {
    // Shape the personality, tone, and guardrails of our open-source LLM engine
    const systemPrompt = {
      role: "system",
      content: "You are a compassionate, active-listening AI wellness companion named Solace. You are NOT a licensed psychologist, therapist, or medical doctor. Your tone is warm, grounding, gentle, non-judgmental, and deeply human-like. Keep your responses thoughtful but concise—avoid overwhelming walls of text. Never use medical jargon, and never diagnose conditions or prescribe treatments. If a user brings up heavy emotional weight, validate their feelings authentically, ask gentle open-ended questions, and offer a safe space for them to reflect."
    };

    // Construct the message array using past conversation history if available
    // This allows Solace to actually remember what you said 2 text messages ago!
    const formattedMessages = [
      systemPrompt,
      ...(history || []).map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      })),
      { role: "user", content: message }
    ];

    // Request text completion directly from Groq using the ultra-fast Llama-3 model layout
    const completion = await groq.chat.completions.create({
      messages: formattedMessages,
      model: "llama-3.1-8b-instant", // High speed, great conversational response metrics
      temperature: 0.6,         // Balanced setting to ensure creativity but keep output structured/safe
      max_tokens: 500,
    });

    const aiReply = completion.choices[0]?.message?.content || "I am listening closely, please go on...";

    // Send the clean, verified payload string back to your React client
    res.json({ crisisTriggered: false, reply: aiReply });

  } catch (error) {
    console.error("Groq API Execution Error:", error);
    res.status(500).json({ error: "Something went wrong on our AI servers. Please try again in a moment." });
  }
});

// Start listening for inbound incoming traffic
app.listen(PORT, () => {
  console.log(`🚀 Solace Secure Backend Active at http://localhost:${PORT}`);
});