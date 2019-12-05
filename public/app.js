let user;
let pass;
let person;

const addUser = person => {
  axios.post('./users', person)
    .then(res => {
      console.log(person)
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


  user = document.getElementById('usernameCatch').value
  pass = document.getElementById('passwordCatch').value

  let person = {
    username: user,
    password: pass
  }
  addUser(person)

  login(user, pass)

})

