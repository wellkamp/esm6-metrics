import { Model } from './index'
import User from './User'

const PersonalComputer = Model({
    tableName: 'personal_computers',
    user: function() {
        return this.hasOne(User)
    }
})

export default PersonalComputer