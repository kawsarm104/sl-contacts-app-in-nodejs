const Contact = require('./Contact')

exports.getAllContact = (req, res) => {
    Contact.find()
        .then(contacts => { res.json(contacts) })
        .catch(e => {
            console.log(e)
            res.json({message:"error occured"})
    })
}
exports.singleContact = (req, res) => {
    let { id } = req.params
    Contact.findById(id)
            .then(contact => { res.json(contact) })
        .catch(e => {
            console.log(e)
            res.json({message:"error occured"})
    })
}
exports.createContact = (req, res) => {
    let { name, phone, email } = req.body //destructuring 
    let contact = new Contact({
        name,
        email,
        phone
    })
    contact.save()
        .then(c => {
            res.json(c)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message:"error occured"
            })
    })
    
}
exports.updateContact = (req, res) => {

}
exports.deleteContact = (req, res) => {

}