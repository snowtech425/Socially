import dotenv from 'dotenv';
import { fetchAccessToken } from 'hume';
import { VoiceClient } from '@humeai/voice';

dotenv.config(); // Make sure environment variables are loaded

import WebSocket from 'ws';

import express from 'express';
const app = express();

// const ws = new WebSocket('wss://api.hume.ai/v0/voice');

// ws.on('open', () => console.log('✅ WebSocket Connected'));
// ws.on('message', (message) => console.log('📩 Received:', message));
// ws.on('close', () => console.log('❌ WebSocket Closed'));
// ws.on('error', (error) => console.error('⚠️ WebSocket Error:', error));

import router from './routes/humeRoutes.js';

app.use('/api', router);

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${3000}`);
});

// async function testAuth() {
//   try {
//     const accessToken = await fetchAccessToken({
//       apiKey: process.env.HUME_API_KEY,
//       secretKey: process.env.HUME_CLIENT_SECRET,
//     });

//     console.log("Access Token:", accessToken);
//   } catch (error) {
//     console.error("Error fetching access token:", error);
//   }
// }

// testAuth();

// async function initializeVoiceClient() {
//   const accessToken = await fetchAccessToken({
//     apiKey: process.env.HUME_API_KEY,
//     secretKey: process.env.HUME_CLIENT_SECRET,
//   });

//   if (!accessToken) {
//     throw new Error('Failed to obtain access token');
//   }

//   const client = new VoiceClient({
//     auth: { type: 'accessToken', value: accessToken },
//   });

//   client.on('open', () => {
//     console.log('WebSocket connection established');
//     // Start streaming audio data
//   });

//   client.on('message', (message) => {
//     console.log('Received message:', message);
//     // Handle EVI's response
//   });

//   client.on('close', () => {
//     console.log('WebSocket connection closed');
//   });

//   client.on('error', (error) => {
//     console.error('WebSocket error:', error);
//   });

//   client.connect();
// }

// // Initialize the voice client
// initializeVoiceClient();
