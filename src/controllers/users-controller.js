import User from '../models/User'
import bcrypt from 'bcryptjs'


import {
    encryptPassword
} from '../helpers/password'

export const index = async ctx => {
    const users = await new User().fetchAll()
    ctx.body = users
}

export const show = ctx => new User({ id: ctx.params.id }).fetch()


export const create = async ctx => {
    const { body } = ctx.request

    const hashedPassword = await encryptPassword(body.password)
    
    return new User({
        email: body.email,
        password: hashedPassword
    }).save()
}

export default {
    index,
    show,
    create
}