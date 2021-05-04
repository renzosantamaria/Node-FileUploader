const {missingCredentials} = require(('../errors/index'))
const fileUploaderModel = require('../model/fileUploader.js')
const path = require('path')
const { v4: uuid } = require('uuid')



const get = (req, res, next) => {
    res.send("<h1>It still works!</h1>")
}

const uploadHandler = (req, res, next) => {
    const file = req.files.pic
    const extension = path.extname(file.name)
    const newFileName = uuid() + extension

    const outputPath = path.join("uploads", newFileName)
    
    file.mv(outputPath)

    res.send('Done')
}

const registerUser = async (req, res, next) => {
    try{
        const userName = req.body.userName
        const password = req.body.password
        if (!userName || !password) {
            throw new missingCredentials('email, password')
        }

        const isCreated  = await fileUploaderModel.registerUser()

        // logic for isCreated ==> true or false

    }catch(error){
        console.log(error.errorMessage)
        next(error)
    }
        
}

const getUsers = async ( req, res, next) => {
    const response = await fileUploaderModel.getUsers()
    res.json(response)
}

module.exports = {
    get,
    uploadHandler,
    getUsers
}