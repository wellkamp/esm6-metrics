import PersonalComputer from '../models/PersonalComputer'
import User from '../models/User'

export const index = async ctx => {
    const users = await new PersonalComputer().fetchAll()
    ctx.body = users
}

export const show = async ctx => {
    console.log(ctx.params.id)
    const personalComputer = await new PersonalComputer({user_id: ctx.params.id}).fetchAll()
    ctx.body = personalComputer
    
}

export const create = async ctx => {
    const { body } = ctx.request
    console.log(body)
    return new PersonalComputer({
        mainboard: body.mainboard,
        core: body.core,
        gpu: body.gpu,
        memory: body.memory,
        user_id: 1
    }).save()
}

export default {
    index,
    show,
    create
}