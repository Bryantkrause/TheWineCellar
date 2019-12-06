// import { connect } from "http2"

document.getElementById('wineType').addEventListener('click', e => {
    e.preventDefault()
    let wineValue = e.target.dataset.set
    console.log(wineValue)
    })

// Add wine Modal
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.modal');
    let instance = M.Modal.init(elems)
})