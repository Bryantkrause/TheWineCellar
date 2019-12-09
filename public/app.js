let user;
let pass;
let person;
let isRegistered = false;

//notify user of login failure
const loginFail = () => {
  let Modalelem = document.querySelector('.loginModal');
  let instance = M.Modal.init(Modalelem);
  instance.open();
}

//notify user of register failure
const registerFail = () => {
  let Modalelem = document.querySelector('.failModal');
  let instance = M.Modal.init(Modalelem);
  instance.open();
}

//check if username is taken
const userExistCheck = (person) => {
  axios.get(`/users/${person.username}`)
    .then(response => {
      if (response.data) {
        //if username exists, run failure modal
        registerFail()
      } else {
        //otherwise, create user and login
        axios.post('./users', person)
          .then(({ data }) => {
            localStorage.setItem('userId', data.id)
            localStorage.setItem('username', data.username)
            login(person.username, person.password)
          })
      }
    })
}

const login = (user, pass) => {
  axios.get(`/users/${user}/${pass}`)
    .then(response => {
      console.log(response)
      if (response.data) {
        console.log('pair matches')
        localStorage.setItem('userId', response.data.id)
        localStorage.setItem('username', response.data.username)
        window.location.pathname = `/cellar`
      } else {
        console.log('pair doesnt match, loginFail')
        loginFail()
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
  userExistCheck(person)
})

document.getElementById('loginBtn').addEventListener('click', e => {
  e.preventDefault()
  console.log('login button clicked')
  isRegistered = false
  user = document.getElementById('usernameCatch').value,
    pass = document.getElementById('passwordCatch').value

  login(user, pass)
})

