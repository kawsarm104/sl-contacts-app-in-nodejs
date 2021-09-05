const router = require("express").Router()
const {
    getAllContacts,
    createContact,
    getContactById,
    getUpdateContact,
    deleteContact
} = require('./contactController')

router.get('/',getAllContacts)
router.post('/',createContact)
router.get('/:id',getContactById)
router.put('/:id',getUpdateContact)
router.delete('/:id',deleteContact)

module.exports = router