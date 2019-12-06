// Gets wine type
document.getElementById('wineType').addEventListener('click', e => {
    e.preventDefault()
    let wineValue = e.target.dataset.set

    })

// Add wine Modal
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.modal');
    let instance = M.Modal.init(elems)
})

let wine;
// add wine to user storage
const addWine = wine => {
  axios.post('./wines', wine)
    .then(() => {
    })
}
// retrieve wine based on user selection
document.getElementById('addMyWine').addEventListener('click', e => {
  e.preventDefault()
  wines = {
    type: document.getElementById('type').value,
    name: document.getElementById('name').value,
    brand: document.getElementById('brand').value,
    yearBottled: document.getElementById('yearBottled').value,
    quantity: document.getElementById('quantity').value,
    userId: parseInt(localStorage.getItem('userId'))
  }
  console.log(wines)
  addWine(wines)
})


// get all wines from user storage
const getAllWine = wine => {
  axios.get('./wines/:id', wine)
    .then(() => {
    })
}

// display selected wine based on user criteria
document.getElementById('mAllWine').addEventListener('click', e => {
    e.preventDefault()
   getAllWine() 

})

// get one wine from user storage
const getWine = wine => {
  axios.get('./wines/:id/:type', wine)
    .then(() => {
      console.log(wine)
    })
}