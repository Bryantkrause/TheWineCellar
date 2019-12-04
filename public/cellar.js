document.getElementById('wineType').addEventListener('click', e => {
    e.preventDefault()
    let wineValue = e.target.dataset.set
    console.log(wineValue)
    })
