const router = require("express").Router()
const {
    getAllContact,
    singleContact,
    createContact,
    updateContact,
    deleteContact,
} = require('./controller')

router.get('/', getAllContact)
router.get('/:id', singleContact)
router.post('/', createContact)
router.put('/:id', updateContact)
router.delete('/:d', deleteContact)

module.exports = router