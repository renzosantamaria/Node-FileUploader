
class CustomError extends Error{}

class accessDenied extends CustomError {
    constructor() {
        super()
        this.errorCode = 403
        this.errorMessage = "Access denied!"
    }
}

class missingCredentials extends CustomError{
    constructor(...params){
    super()
    this.errorCode = 400
    this.errorMessage = `Invalid query. ${params} required`
    }
}

module.exports = {
    CustomError,
    accessDenied,
    missingCredentials
}