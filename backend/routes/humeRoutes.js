import express from 'express';
import axios from 'axios';
const router = express.Router();

const apiKey = process.env.HUME_API_KEY;

const config = {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
};
// Route to fetch data from the external API
router.get('/external-data', async (req, res) => {
  try {
    const response = await axios.get('https://api.hume.ai/v0/evi/chats?page_number=0&page_size=1&ascending_order=true', config);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from external API');
  }
});

export default router;

list_chats = {
  'url':'https://api.hume.ai/v0/evi/chats?page_number=0&page_size=1&ascending_order=true',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  }
chat = 'wss://api.hume.ai/v0/evi/chat?api_key=50lU0bn2bbQDR6Rm5i0PIzwPEZoNAjqKxhGEkDVfJf6yXsu7'