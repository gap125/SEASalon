// components/ReservationForm.js
import React, { useState } from 'react';
import db from '../config/database'; // Import model Sequelize

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    activePhoneNumber: '',
    typeOfService: '',
    dateAndTime: ''
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
      const reservation = await db.Reservation.create(formData);
      console.log('Reservation created:', reservation);
      // Tambahkan logika umpan balik atau pengalihan setelah berhasil
    } catch (error) {
      console.error('Failed to create reservation:', error);
      // Tangani error: tampilkan pesan kesalahan kepada pengguna
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="activePhoneNumber" value={formData.activePhoneNumber} onChange={handleChange} placeholder="Phone Number" required />
      <select name="typeOfService" value={formData.typeOfService} onChange={handleChange} required>
        <option value="">Select Service Type</option>
        <option value="Haircuts and styling">Haircuts and styling</option>
        <option value="Manicure and pedicure">Manicure and pedicure</option>
        <option value="Facial treatments">Facial treatments</option>
      </select>
      <input type="datetime-local" name="dateAndTime" value={formData.dateAndTime} onChange={handleChange} required />
      <button type="submit">Submit Reservation</button>
    </form>
  );
};

export default ReservationForm;
