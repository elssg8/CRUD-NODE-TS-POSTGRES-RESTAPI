import e, { Request, Response } from 'express';
import { pool } from '../database';
import { QueryResult } from "pg";


export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM uaemexuser'); 
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
    console.log(req.body); // req.body es el objeto que se pasa por el body
    const { email, unip } = req.body; // destructuring del objeto que se pasa por el body para obtener los valores de name y email
    const response: QueryResult = await pool.query('INSERT INTO uaemexuser (email, unip) VALUES ($1, $2)', [email, unip]); 
    return res.json({ 
        message: 'User Added Successfully',
        body: {
            user: {
                email, unip
            }
        }
    })
    
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id); // el req.params.id es el id que se pasa por la url
    const { name, email } = req.body; // destructuring del objeto que se pasa por el body para obtener los valores de name y email
    const response: QueryResult = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    //validar si el usuario existe
    if (response.rowCount === 0) {
        return res.json(`User ${id} does not exist`);
    }
    else{
        return res.json(`User ${id} Updated Successfully`); 
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id); // el req.params.id es el id que se pasa por la url
    const response: QueryResult = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    //validar si el usuario existe
    if (response.rowCount === 0) {
        return res.json(`User ${id} does not exist`);
    }
    else{
        return res.json(`User ${id} Deleted Successfully`);
    }
}