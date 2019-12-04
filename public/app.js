let user;
let pass;
let person;

const addUser = person => {
    axios.post('./users', person)
    .then( ({ data }) => {
      //console.log(data)
      localStorage.setItem('userId', data.id)
      localStorage.setItem('username', data.username)
      })
}

document.getElementById('submitBtn').addEventListener('click', e => {
    e.preventDefault()
    console.log('click')

    let person = {
        username: document.getElementById('usernameCatch').value,
        password: document.getElementById('passwordCatch').value
    }
    addUser(person)

    
})

