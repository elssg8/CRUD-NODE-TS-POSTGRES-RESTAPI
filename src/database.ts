import { Pool } from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '$elssG8;',
    database: 'firstapi',
    port: 5432
})