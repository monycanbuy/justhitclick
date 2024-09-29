// api/contact.js
import axios from 'axios';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    try {
      // Forward the POST request to your HTTP-only API
      const response = await axios.post('http://justhitclick.somee.com/api/Contact', req.body);
      
      // Send back the API's response to the client
      res.status(200).json(response.data);
    } catch (error) {
      // Handle errors and send an appropriate error response
      res.status(error.response?.status || 500).json({ error: 'Failed to contact API' });
    }
  } else {
    // Only allow POST requests for this endpoint
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
