import {pool} from '../../../db.js'
import bcrypt from 'bcryptjs'


export const createUserModel = async (user) => {
    const {email, password_hash, rol} = user
    const hashPass = await bcrypt.hash(password_hash,10)
    const [insert_database] = await pool.query('INSERT INTO users(email,password_hash, rol) VALUES (?,?,?)', [email, hashPass,rol])
    return insert_database;
}

export const findUserByEmail = async(email) =>{
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
}