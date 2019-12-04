const React = require('react')
const Layout = require('./Layout')

module.exports = (props) => {
  return (
    <Layout>
      <h1 className="loginSpread">The Wine Cellar</h1>
      <form className="loginSpread">
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
      </form>
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="./app.js"></script>
    </Layout>
  )
}


