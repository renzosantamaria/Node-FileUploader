const {CustomError} = require('../errors/index')

const errorHandler = (error, req, res, next) => {
    if (error instanceof CustomError) {
        res
        .status(error.errorCode)
        .json({error: error.errorMessage})
    }else{
        console.error(error)
        res
          .status(500)
          .json({error: 'Something went wrong, please contact your system admin'})
      }     
}




module.exports = {
    errorHandler
}