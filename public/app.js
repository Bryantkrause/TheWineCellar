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

const login = (user, pass) => {
  axios.get(`/users/${user}/${pass}`)
    .then(response => {
      console.log(response)
      if (response.data) {
        console.log('pair matches')
         window.location.pathname = `/cellar`
      } else {
        console.log('pair doesnt match')
        window.location.pathname = `/`
      }
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

