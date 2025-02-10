require('dotenv').config();

app.post('/analyze-emotion', async (req, res) => {
    const { text } = req.body;
  
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }
  
    try {
      const response = await axios.post(
        'https://api.hume.ai/v1/analyze', // Replace with Hume AI's actual API endpoint
        { text },
        {
          headers: {
            'Authorization': `Bearer ${process.env.HUME_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      res.json(response.data);
    } catch (error) {
      console.error('Error calling Hume AI API:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: 'Failed to analyze emotion' });
    }
  });