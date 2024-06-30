import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phoneNumber, serviceType, dateTime } = req.body;
    console.log("Received data:", { name, phoneNumber, serviceType, dateTime });

    try {
      // Test database connection
      await prisma.$connect();
      console.log("Connected to database");

      const reservation = await prisma.reservation.create({
        data: {
          name,
          phoneNumber,
          serviceType,
          dateTime: new Date(dateTime)
        }
      });
      console.log("Reservation created:", reservation);
      res.status(200).json(reservation);
    } catch (error) {
      console.error("Error creating reservation:", error);
      res.status(500).json({ error: 'Error creating reservation' });
    } finally {
      await prisma.$disconnect();
      console.log("Disconnected from database");
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
