import bcrypt from 'bcryptjs'

export const encryptPassword = (password, length = 10) =>
password ? bcrypt.hash(password, length) : undefined