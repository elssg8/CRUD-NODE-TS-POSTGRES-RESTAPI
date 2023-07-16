import { Request, Response } from 'express';
import { pool } from '../database';
import { QueryResult } from "pg";


export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM users'); 
        return res.status(200).json(response.rows); // response.rows es el array de objetos que devuelve la consulta
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error');
    }    
}

export const getUserbyId = async (req: Request, res: Response): Promise<Response> => { 
    const id = parseInt(req.params.id); // el req.params.id es el id que se pasa por la url
    const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]) //
    return res.json(response.rows); // response.rows es el array de objetos que devuelve la consulta
}

export const createUser = async (req: Request, res: Response): Promise<Response> => { 
    // console.log(req.body); // req.body es el objeto que se pasa por el body
    const { name, email } = req.body;
    const response: QueryResult = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    return res.json({
        message: 'User Added Successfully',
        body: {
            user: {
                name, email
            }
        }
    })
    
}

// export const updateUser = (req, resp): Promise<Response> => {}

// export const deleteUser = (req, resp): Promise<Response> => {}