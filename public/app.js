let user;
let pass;
let person;

// Add login Modal
document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.modal');
  let instance = M.Modal.init(elems)
})

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

      }
    })
}

document.getElementById('registerBtn').addEventListener('click', e => {
  e.preventDefault()
  console.log('register button clicked')

  let person = {
    username: document.getElementById('usernameCatch').value,
    password: document.getElementById('passwordCatch').value
  }
  addUser(person)
})

document.getElementById('loginBtn').addEventListener('click', e => {
  e.preventDefault()
  console.log('login button clicked')

  user = document.getElementById('usernameCatch').value,
    pass = document.getElementById('passwordCatch').value

  login(user, pass)
})

