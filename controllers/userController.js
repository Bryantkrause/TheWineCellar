const { Users } = require('../models')

module.exports = {

  async checkUser (username) {
    let response = await new Promise((resolve, reject) => {
      console.log(`checkUser user is ${username}`)
      Users.findOne( {where: { 
        username: username } })
        .then( result => { 
          result ? resolve(true) : resolve(false) 
          if ( result === ''){
            reject(new Error)
          }
        })
        .catch( e => reject(e))
    })
    return response
  }
}