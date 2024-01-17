import { sql } from '@vercel/postgres';

async function crearTabla() {
    try {
        const result = await sql`
        CREATE TABLE IF NOT EXISTS articulos (
            id SERIAL PRIMARY KEY,
            nombre TEXT NOT NULL,
            descripcion TEXT,
            precio DECIMAL(10,2),
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

async function crearTablaProveedores() {
    try {
        const result = await sql`
        CREATE TABLE IF NOT EXISTS proveedores (
            id SERIAL PRIMARY KEY,
            nombre TEXT NOT NULL,
            telefono INT,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

crearTabla();
crearTablaProveedores();
