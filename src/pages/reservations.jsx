import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './navbar';

export default function Reservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const res = await fetch('/api/getReservations');
      if (!res.ok) {
        throw new Error('Failed to fetch reservations');
      }
      const data = await res.json();
      setReservations(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    console.log("Deleting reservation with ID:", id);

    try {
      const res = await fetch('/api/deleteReservation', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to delete reservation: ${errorText}`);
      }

      console.log("Reservation deleted successfully");
      toast.success('Reservation deleted successfully');  // Tampilkan notifikasi sukses
      await fetchReservations();
    } catch (error) {
      console.error("Error in handleDelete:", error);
      toast.error('Failed to delete reservation');  // Tampilkan notifikasi gagal
    }
  };

  return (
    <div className='h-screen bg-gray-100'>
        <Navbar></Navbar>
        <div className="flex items-center justify-center pt-14 ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Current Reservations</h2>
            <table className="min-w-full bg-white">
            <thead>
                <tr>
                <th className="py-2">No.</th>
                <th className="py-2">Name</th>
                <th className="py-2">Phone Number</th>
                <th className="py-2">Service Type</th>
                <th className="py-2">Date and Time</th>
                <th className="py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {reservations.map((reservation, index) => (
                <tr key={reservation.id}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{reservation.name}</td>
                    <td className="border px-4 py-2">{reservation.phoneNumber}</td>
                    <td className="border px-4 py-2">{reservation.serviceType}</td>
                    <td className="border px-4 py-2">{new Date(reservation.dateTime).toLocaleString()}</td>
                    <td className="border px-4 py-2">
                    <button
                        onClick={() => handleDelete(reservation.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                    >
                        Delete
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        <ToastContainer />  {/* Container untuk menampilkan notifikasi */}
        </div>
    </div>
  );
}
