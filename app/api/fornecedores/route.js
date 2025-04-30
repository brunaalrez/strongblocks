// app/api/fornecedores/route.js
import mysql from 'mysql2/promise';

export async function GET() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'strong_blocks',
  });

  try {
    const [rows] = await connection.execute('SELECT DISTINCT fornecedor FROM estoque');
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  } finally {
    await connection.end();
  }
}
