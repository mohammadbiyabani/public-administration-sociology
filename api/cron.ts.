import express, { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';

const app = express();

app.use(express.json());

// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Health check endpoints
app.get(['/api', '/api/chat'], (req: Request, res: Response) => {
  res.status(200).json({ status: 'API is fully active via Express!' });
});

// Main chat endpoint
app.post(['/api', '/api/chat'], async (req: Request, res: Response) => {
  try {
    const { message } = req.body || {};

    if (!message) {
      return res.status(400).json({ error: 'Message payload is missing' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on Vercel' });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
    });

    return res.status(200).json({ reply: response.text });
  } catch (error: any) {
    console.error('Gemini Execution Error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

export default app;
