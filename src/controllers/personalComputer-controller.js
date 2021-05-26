import PersonalComputer from '../models/PersonalComputer'

export const index = async ctx => {
    const users = await new PersonalComputer().fetchAll()
    ctx.body = users
}

export const show = ctx => new PersonalComputer({ id: ctx.params.id }).fetch()


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