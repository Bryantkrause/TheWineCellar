<<<<<<< Updated upstream
document.getElementById('btn').addEventListener('click', e => {

})
=======
let user;
let pass;
>>>>>>> Stashed changes

const testConsole = function() {
    console.log(user)
    console.log(pass)
}

document.getElementById('submitBtn').addEventListener('click', e => {
    e.preventDefault()
    console.log('click')
    user = document.getElementById('usernameCatch').value
    pass = document.getElementById('passwordCatch').value

    testConsole()
})