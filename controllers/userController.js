const { Users } = require('../models')

module.exports = {

  async checkUser (username) {
    let response = await new Promise((resolve, reject) => {
      console.log(`checkUser user is ${username}`)
      Users.findOne( {where: { 
        username: username } })
        .then( result => { 
          if ( result === '' || result === null || result === "null"){
            reject(new Error)
          } else {
            result ? resolve(true) : resolve(false) 
          }
        })
        .catch( e => reject(e))
    })
    return response
  }
}