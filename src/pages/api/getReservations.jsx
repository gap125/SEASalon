import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const reservations = await prisma.reservation.findMany();
      res.status(200).json(reservations);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      res.status(500).json({ error: 'Error fetching reservations' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
