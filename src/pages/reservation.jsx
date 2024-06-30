import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './navbar';

export default function Reservation() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    serviceType: 'Haircuts and styling',
    dateTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Error creating reservation');
      }

      const result = await res.json();
      console.log('Reservation created:', result);

      // Tampilkan notifikasi sukses
      toast.success('Reservation added successfully');

      // Reset form setelah submit berhasil
      setFormData({
        name: '',
        phoneNumber: '',
        serviceType: 'Haircuts and styling',
        dateTime: ''
      });

      // Refresh halaman atau navigasi ke halaman lain setelah submit berhasil
      router.replace(router.asPath); // Ini akan memuat ulang halaman

    } catch (error) {
      console.error('Failed to add reservation:', error);
      // Tampilkan notifikasi gagal
      toast.error('Failed to add reservation');
    }
  };

  return (
    <div> 
      <Navbar></Navbar>
      <div className="min-h-screen flex flex-col items-center pt-14 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Salon Reservation</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Active Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Type of Service</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="Haircuts and styling">Haircuts and Styling</option>
                <option value="Manicure and pedicure">Manicure and Pedicure</option>
                <option value="Facial treatments">Facial Treatments</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date and Time</label>
              <input
                type="datetime-local"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                required
                min="T09:00"
                max="T21:00"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Reserve
            </button>
          </form>
          <ToastContainer /> {/* Container untuk menampilkan notifikasi */}
        </div>
      </div>
    </div> 
  );
}
