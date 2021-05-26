import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const generateJWTToken = ({ id }) => {
    return jwt.sign({ id }, 'supersecret')
  }

export const encryptPassword = (password, length = 10) =>
password ? bcrypt.hash(password, length) : undefined


