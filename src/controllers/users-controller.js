import User from '../models/User'
import bcrypt from 'bcryptjs'
import { encryptPassword, generateJWTToken } from '../helpers/password'
import { Unauthorized } from '../helpers/errors'


export const login = async ctx => {
    const { body } = ctx.request
    
    const user = await new User({ email: body.email })
        .fetch()
        .catch(() => {
            throw 'erro'
    })

    const isValid = await bcrypt.compare(body.password, user.attributes.password)

    if(!isValid) {
        ctx.body = Unauthorized('Unauthorized, password is invalid')
    }

    const parsedUser = user.toJSON()

    ctx.body = {
        ...parsedUser,
        token: generateJWTToken({ id: parsedUser.id })
    }
}

export const index = async ctx => {
    const users = await new User().fetchAll()
    ctx.body = users
}

export const show = async ctx => {
    const user = await new User({ id: ctx.params.id }).fetch()
    ctx.body = user
} 


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
    create,
    login
}