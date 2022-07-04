import { Sequelize } from 'sequelize'
import { mysql } from '../database/database'

const Varejao = mysql.define('index', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Varejao