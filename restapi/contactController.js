const contacts = require('./Contacts')

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts())
}

exports.createContact = (req, res) => {
    // res.json(contacts.getAllContacts())
    console.log(req.body)
    let { name, phone, email } = req.body;
    let contact = contacts.createContact({
        name,
        phone,
        email
    })
    res.json(contact)
}

exports.getContactById = (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    let contact = contacts.getContactsById(id)
    res.json(contact)
}
exports.getUpdateContact = (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    let { name, emai, phone } = req.body
    let contact = contacts.updateContactById(id, {
        name,
        emai,
        phone
    })
    res.json(contact)
}
exports.deleteContact = (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    let { name, emai, phone } = req.body
    let contact = contacts.deleteContactById(id)
    res.json(contact)
}