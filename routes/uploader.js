const express = require ('express')
const router = express.Router()
const uploaderController = require('../controller')
const Authenticate = require('../middlewares/authenticate')



router.get('/', uploaderController.get)
router.get('/users', uploaderController.getUsers)
router.post('/login', Authenticate)
router.post('/upload', uploaderController.uploadHandler)

// router.post('/register', uploaderController.registerUser)



module.exports = router