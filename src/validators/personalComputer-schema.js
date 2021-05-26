import Joi from 'joi'

import { validateSchema } from '../helpers/joi'

const PersonalComputerValidate = {
    create: () =>
      validateSchema({
        body: {
          mainboard: Joi.string().required(),
          core: Joi.string().required(),
          gpu: Joi.string().required(),
          memory: Joi.string().required(),
        }
      }),
  
}

export default PersonalComputerValidate