import { Sequelize } from 'sequelize'
import { mysql } from '../database/database'

const Macapa = mysql.define('contacts', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Macapa