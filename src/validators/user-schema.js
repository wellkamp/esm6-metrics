import Joi from 'joi'

import { validateSchema } from '../helpers/joi'

const UserValidate = {
    create: () =>
      validateSchema({
        body: {
          email: Joi.string().required(),
          password: Joi.string().required(),
        }
      }),
  
}

export default UserValidate