import db from '../utils/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { customerName, starRating, comment } = req.body;
    try {
      // Simpan review ke database
      const sql = 'INSERT INTO reviews (customer_name, star_rating, comment) VALUES (?, ?, ?)';
      const values = [customerName, starRating, comment];

      db.query(sql, values, (err, result) => {
        if (err) {
          console.error('Failed to insert review:', err);
          return res.status(500).json({ message: 'Failed to insert review' });
        }
        console.log('Review added:', result);

        // Kirim respons sukses ke client
        res.status(201).json({ message: 'Review added successfully' });
      });
    } catch (error) {
      console.error('Failed to add review:', error);
      res.status(500).json({ error: 'Failed to add review' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

