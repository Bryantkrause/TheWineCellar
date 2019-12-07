let id = localStorage.getItem('userId')
let type = ''

// Get all wine
const alllWine = (id, type, typeBody) => {
  if (type === 'allWine') {
    axios.get(`/wines/${parseInt(id)}`)
      .then(({ data }) => {
        data.forEach(wine => {
          let newWineRow = document.createElement('tr')
          newWineRow.dataset.type = wine.type
          newWineRow.dataset.yearBottled = wine.yearBottled
          newWineRow.dataset.name = wine.name
          newWineRow.dataset.quantity = wine.quantity
          newWineRow.innerHTML = `
        <td>${wine.type}</td>
        <td>${wine.yearBottled}</td>
        <td>${wine.name}</td>
        <td>${wine.quantity}&nbsp;&nbsp;&nbsp;<i class="tiny material-icons">autorenew</i></td>
        `
          document.getElementById(typeBody).append(newWineRow)
        })
      })
  } else {
    // Get specific wine
    axios.get(`/wines/${parseInt(id)}/${type}`)
      .then(({ data }) => {
        data.forEach(wine => {
          let newWineRow = document.createElement('tr')
          newWineRow.dataset.type = wine.type
          newWineRow.dataset.yearBottled = wine.yearBottled
          newWineRow.dataset.name = wine.name
          newWineRow.dataset.quantity = wine.quantity
          newWineRow.innerHTML = `
        <td>${wine.type}</td>
        <td>${wine.yearBottled}</td>
        <td>${wine.name}</td>
        <td>${wine.quantity}&nbsp;&nbsp;&nbsp;<i class="tiny material-icons">autorenew</i></td>
        `
          document.getElementById(typeBody).append(newWineRow)
        })
      })
  }
}

// listens for click to decide get method
document.addEventListener('click', e => {
  if (e.target.id === 'allWine' || e.target.id === 'red' || e.target.id === 'white' || e.target.id === 'rose' || e.target.id === 'dessert') {
    document.getElementById(e.target.dataset.body).innerHTML = ''
    alllWine(id, e.target.id, e.target.dataset.body)
  }
})

// Add wine Modal
document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.modal');
  let instance = M.Modal.init(elems)
})

let wine;
// Add wine to user storage
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

// Display selected wine based on user criteria
document.getElementById('mAllWine').addEventListener('click', e => {
  e.preventDefault()
  getAllWine()

})

// Get one wine from user storage
const getWine = wine => {
  axios.get('./wines/:id/:type', wine)
    .then(() => {
      console.log(wine)
    })
}