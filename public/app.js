let user;
let pass;
let person;

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

const availableNames = (user) => {
  let available = user
  available += `_${Math.round(Math.random() * 100)}`
  axios.get(`/users/${available}`)
    .then(response => {
      if (response.data) {
        availableNames(user)
      } else {
        document.getElementById('availableNames').innerText = `${available}`
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
        loginFail()
      }
    })
}

document.getElementById('registerBtn').addEventListener('click', e => {
  e.preventDefault()
  document.getElementById('availableNames').innerText = ``
  let person = {
    username: document.getElementById('usernameCatch').value,
    password: document.getElementById('passwordCatch').value
  }
  //only attempt to register if input field is filled in
  if (person.username != '' ){
    userExistCheck(person)
  }
})

document.getElementById('loginBtn').addEventListener('click', e => {
  e.preventDefault()
  user = document.getElementById('usernameCatch').value,
    pass = document.getElementById('passwordCatch').value
  login(user, pass)
})

//display available usernames
document.getElementById('showNames').addEventListener('click', e => {
  user = document.getElementById('usernameCatch').value
  availableNames(user)
})
