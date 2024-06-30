// components/ReviewForm.js
import React, { useState } from 'react';
import db from '../models'; // Import model Sequelize

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    rating: '',
    comment: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const review = await db.Review.create(formData);
      console.log('Review created:', review);
      // Tambahkan logika umpan balik atau pengalihan setelah berhasil
    } catch (error) {
      console.error('Failed to create review:', error);
      // Tangani error: tampilkan pesan kesalahan kepada pengguna
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} placeholder="Your Name" required />
      <input type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating (1-5)" min="1" max="5" required />
      <textarea name="comment" value={formData.comment} onChange={handleChange} placeholder="Your Review"></textarea>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
