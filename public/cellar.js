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