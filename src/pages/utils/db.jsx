import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ganti dengan username MySQL Anda
  password: 'Popokbasi12', // Ganti dengan password MySQL Anda
  database: 'SEASALON' // Ganti dengan nama database yang digunakan
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

export default db;
