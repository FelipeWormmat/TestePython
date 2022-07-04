
import Varejao from "../models/varejao";
import Macapa from "../models/macapa";
import { formatphone } from '../format/phone_format'

function createContacts(model, payload, res){
    try {
        model.bulkCreate(payload, {
            returning: false
        }).then(() => {
            return res.status(201).send()
        })
    } catch (error) {
        return res.status(500).send({ message: error }) 
    }
}

function saveVarejao (req, res) {
    const data = req.body.contacts
    const payload = data.map((contact) => {
        const phone = contact.cellphone.replace(/\D/g, "")
        return{
            nome: contact.name,
            celular: phone.substr(0,4).concat(phone.substr(5, phone.length)) 
        }
    })
    createContacts(Varejao, payload, res)
}

function saveMacapa(req, res) {
    const data = req.body.contacts
    const payload = data.map((contact) => {
        return{
            nome: contact.name.toUpperCase(),
            celular: formatphone(contact.cellphone)
        }
    })
    createContacts(Macapa, payload, res)
}

export default () => {
    const controller = {}
    controller.savecontato = (req, res) => {
        const caller = res.locals.user
        if(caller === 'macapa')
            return saveMacapa(req, res)
        if(caller === 'varejao')
            return saveVarejao(req, res)  
        
        return res.status(501).send({ message: 'Cliente inválido' })
    }

    return controller
    
}