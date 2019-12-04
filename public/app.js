let user;
let pass;
let person;

const addUser = person => {
    axios.post('./users', person)
    .then(res => {
      console.log(person)
      })

}

document.getElementById('submitBtn').addEventListener('click', e => {
    e.preventDefault()
    console.log('click')


    user = document.getElementById('usernameCatch').value
    pass = document.getElementById('passwordCatch').value

    let person = {
        username: user,
        password: pass
    }
    addUser(person)

    
})

