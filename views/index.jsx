const React = require('react')
const Layout = require('./Layout')

module.exports = (props) => {
  return (
    <Layout>
      <div className='loginBackground'>
        <h1 className="loginText">The Wine Cellar</h1>
        {/* <form className="loginSpread">
        <label>
          Username:
          <br/>
        <input id="usernameCatch" type="text" name="name" />
          <br/>
          Password:
          <br/>
        <input id="passwordCatch" type="password" name="name" />
        </label>
        <br/> 
        <input id="submitBtn" type="submit" value="Submit" />
      </form> */}


        <div className="row">
          <form className="col s12 loginSpread">
            <div className="row center">
              <div className="input-field col s6 loginField">
                <input placeholder="Username" id="usernameCatch" type="text" name="name" />
              </div>
              <div className="input-field col s6 loginField">
                <input placeholder="Password" id="passwordCatch" type="password" name="name" />
              </div>
              <a className="waves-effect waves-light btn center" id="submitBtn">Submit</a>
            </div>
          </form>
        </div>
      </div>
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="./app.js"></script>
    </Layout>
  )
}


