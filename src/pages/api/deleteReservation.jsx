import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.body;
    console.log("Received ID:", id);  // Log the received ID

    try {
      await prisma.reservation.delete({
        where: { id: Number(id) },
      });
      console.log("Reservation deleted successfully");  // Log successful deletion
      res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (error) {
      console.error("Error deleting reservation:", error);  // Log the error
      res.status(500).json({ error: 'Error deleting reservation' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

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
      await fetchReservations();
    } catch (error) {
      console.error("Error in handleDelete:", error);
    }
  };
  