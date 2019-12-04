const { Wines } = require('../models')

module.exports = {

  async checkWine (wine) {
    let response = await new Promise((resolve, reject) => {
      console.log(`checkWine wine is ${JSON.stringify(wine)}`)
      Wines.findOne({
        where: { 
          type: wine.type,
          name: wine.name,
          description: wine.description,
          brand: wine.brand,
          region: wine.region, 
          yearBottled: wine.yearBottled
        } // end where
      })
        .then( result => { 
          if ( result === '' || result === null || result === 'null'){
            reject(new Error)
          } else {
            result ? resolve(true) : resolve(false)
          }
        })
        .catch( e => reject(e))
    })
    return response
  } //end checkWine
}
