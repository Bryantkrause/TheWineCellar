const React = require('react')
const Layout = require('./Layout')

module.exports = (props) => {
  return (
    <Layout>
      <div className='loginBackground'>
        <h1 className="loginText">The Wine Cellar</h1>
        <div className="row center">
          <form className="col s12 loginSpread">
            <div className="row center loginSpace">
              <div className="input-field col s12 loginField">
                <input className = "inputText" placeholder="Username" id="usernameCatch" type="text" name="name" />
              </div>
              <div className="input-field col s12 loginField">
                <input className = "inputText" placeholder="Password" id="passwordCatch" type="password" name="name" />
              </div>
            </div>
            <div className="row center">
              <a className="waves-effect waves-light btn center loginButton" id="loginBtn">Login</a>
              <a className="waves-effect waves-light btn center" id="registerBtn">Register</a>
            </div>
          </form>
        </div>
      </div>
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="./app.js"></script>
    </Layout>
  )
}