let userId = localStorage.getItem('userId')
let type = ''
let uid = parseInt(userId)
// Get all wine
const alllWine = (uid, type, typeBody) => {
  console.log(uid)
  if (type === 'allWine') {
    axios.get(`/wines/${uid}`)
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
          <td>
            <i class="material-icons removeOne" data-type='${wine.type}' data-name='${wine.name}' data-yearBottled='${wine.yearBottled}'>remove_circle_outline</i>
            <span id="${wine.type}.${wine.name}.${wine.yearBottled}">${wine.quantity}</span>
            <i class="material-icons addOne" data-type='${wine.type}' data-name='${wine.name}' data-yearBottled='${wine.yearBottled}'>add_circle_outline</i>
          </td>
          `
          document.getElementById(typeBody).append(newWineRow)
        })
      })
  } else {
    // Get specific wine
    axios.get(`/wines/${uid}/${type}`)
      .then(({ data }) => {
        data.forEach(wine => {
          let newWineRow = document.createElement('tr')
          newWineRow.dataset.yearBottled = wine.yearBottled
          newWineRow.dataset.name = wine.name
          newWineRow.dataset.quantity = wine.quantity
          newWineRow.innerHTML = `
            <td>${wine.yearBottled}</td>
            <td>${wine.name}</td>
            <td>
              <i class="material-icons removeOne" data-type='${wine.type}' data-name='${wine.name}' data-yearBottled='${wine.yearBottled}'>remove_circle_outline</i>
              <span id="${wine.type}.${wine.name}.${wine.yearBottled}">${wine.quantity}</span>
              <i class="material-icons addOne" data-type='${wine.type}' data-name='${wine.name}' data-yearBottled='${wine.yearBottled}'>add_circle_outline</i>
            </td>
            `
          document.getElementById(typeBody).append(newWineRow)
        })
      })
  }
}

// listens for click to decide get method
document.addEventListener('click', e => {
  //console.log(e)
  if (e.target.dataset.body === 'wineBody' || e.target.dataset.body === 'redWine' || e.target.dataset.body === 'whiteWine' || e.target.dataset.body === 'roseWine' || e.target.dataset.body === 'dessertWine') {
    document.getElementById(e.target.dataset.body).innerHTML = ''
    alllWine(userId, e.target.dataset.type, e.target.dataset.body)
  } else if (e.target.className === 'material-icons addOne') {
    let currentQuantity = parseInt(document.getElementById(`${e.target.dataset.type}.${e.target.dataset.name}.${e.target.dataset.yearbottled}`).innerText) + 1
    // console.log(`ID is ${e.target.dataset.type}.${e.target.dataset.name}.${e.target.dataset.yearbottled}`)
    // console.log(`addOne is pressed and current q is ${currentQuantity}`)
    // console.log(`axios put URL is /wines/${userId}/${e.target.dataset.type}/${e.target.dataset.name}/${e.target.dataset.yearbottled}/${currentQuantity}`)
    axios.put(`/wines/${userId}/${e.target.dataset.type}/${e.target.dataset.name}/${e.target.dataset.yearbottled}/${currentQuantity}`)
    document.getElementById(`${e.target.dataset.type}.${e.target.dataset.name}.${e.target.dataset.yearbottled}`).innerText = currentQuantity
  } else if(e.target.className === 'material-icons removeOne'){
    let currentQuantity = parseInt(document.getElementById(`${e.target.dataset.type}.${e.target.dataset.name}.${e.target.dataset.yearbottled}`).innerText)
    currentQuantity === 0 ? currentQuantity : currentQuantity--
    // console.log(`ID is ${e.target.dataset.type}.${e.target.dataset.name}.${e.target.dataset.yearbottled}`)
    // console.log(`removeOne is pressed and current q is ${currentQuantity}`)
    // console.log(`axios put URL is /wines/${userId}/${e.target.dataset.type}/${e.target.dataset.name}/${e.target.dataset.yearbottled}/${currentQuantity}`)
    axios.put(`/wines/${userId}/${e.target.dataset.type}/${e.target.dataset.name}/${e.target.dataset.yearbottled}/${currentQuantity}`)
    document.getElementById(`${e.target.dataset.type}.${e.target.dataset.name}.${e.target.dataset.yearbottled}`).innerText = currentQuantity
  }
})

//sum wine total by type
const getTotal = (type) => {
  document.getElementById(`${type}Total`).innerHTML = ('')
  axios.get(`/wines/${uid}/${type}`)
    .then(({ data }) => {
      let total = 0
      data.forEach(wine => {
        total += wine.quantity
      }
      )
      var totalWine = document.getElementById(`${type}Total`).append(`Total: ${total}`)
    })
}

// Add wine Modal
document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.modal');
  let instance = M.Modal.init(elems)
})

// Add wine to user storage
const addWine = wine => {
  axios.post('./wines', wine)
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
    userId: userId
  }
  console.log(wines)
  addWine(wines)
  document.getElementById('name').value = ''
  document.getElementById('brand').value = ''
  document.getElementById('yearBottled').value = ''
  document.getElementById('quantity').value = ''
  updateTotals()ç
})

//update display quantities
document.addEventListener('click', e => {
  console.log(e.target.id)
  if (e.target.id === 'modalClose') {
    updateTotals()
  }
})

//displays updated totals
const updateTotals = () => {
  getTotal('red')
  getTotal('white')
  getTotal('dessert')
  getTotal('rose')
}

//updates totals on page load
updateTotals()