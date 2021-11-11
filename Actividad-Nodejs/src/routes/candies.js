const express = require('express')
const router = express.Router()

const candiesController = require('../controllers/candiesController')

router.get('/', candiesController.list) 
router.post('/add', candiesController.save)
router.get('/delete/:id', candiesController.delete)

router.get('/update/:id', candiesController.edit)
router.post('/update/:id', candiesController.update)


module.exports = router