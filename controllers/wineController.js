const { Wines } = require('../models')

module.exports = {

  async checkWine (wine) {
    console.log('running checkWine')
    let response = await new Promise((resolve, reject) => {
      console.log(`checkWine wine is ${JSON.stringify(wine)}`)
      Wines.findOne({
        where: { 
          type: wine.type,
          name: wine.name,
          brand: wine.brand,
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
  }, //end checkWine

  updateWine(wineSource) {
    console.log('running updateWine')
    Wines.findOne({
      where: { 
        type: wineSource.type,
        name: wineSource.name,
        brand: wineSource.brand,
        yearBottled: wineSource.yearBottled
      } // end where
    })
    .then( wine => {
      let q = parseInt(wine.quantity) + parseInt(wineSource.quantity)
      wine.update({quantity: q})
    })
  } // end updateWine
} //end module.export
