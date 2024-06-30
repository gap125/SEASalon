import db from '../utils/db'; // Pastikan path ke db.js Anda sesuai dengan struktur proyek Anda

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const sql = 'SELECT * FROM reviews ORDER BY id DESC'; // Query untuk mengambil review dari database
      
      db.query(sql, (err, results) => {
        if (err) {
          console.error('Failed to fetch reviews:', err);
          return res.status(500).json({ message: 'Failed to fetch reviews' });
        }
        res.status(200).json(results);
      });
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
      res.status(500).json({ error: 'Failed to fetch reviews' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
