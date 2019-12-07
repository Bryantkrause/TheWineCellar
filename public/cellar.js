let id;
let type;

// Get one type of wine
const oneWine = type => {
  axios.get(`/wines/${id}/${type}`)
  .then(response => {

  })
}

// Get all wine
const alllWine = id => {
  axios.get(`/wines/${id}`)
    .then(response => {

    })
}

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