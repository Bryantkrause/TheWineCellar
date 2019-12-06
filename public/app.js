let user;
let pass;
let person;

const addUser = person => {
  axios.post('./users', person)
    .then(({ data }) => {
      localStorage.setItem('userId', data.id)
      localStorage.setItem('username', data.username)
      login(person.username, person.password)
    })
}

const login = (user, pass) => {
  axios.get(`/users/${user}/${pass}`)
    .then(response => {
      // console.log(response)
      if (response.data) {
        console.log('pair matches')
        localStorage.setItem('userId', response.data.id)
        localStorage.setItem('username', response.data.username)
        window.location.pathname = `/cellar`
      } else {
        console.log('pair doesnt match')
        // window.location.pathname = `/`

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

