const React = require('react')
const Layout = require('./Layout')

module.exports = () => {
  return (
    <Layout>
<<<<<<< Updated upstream
      <h1>Hello World!</h1>
=======
      <h1 className="loginSpread">The Wine Cellar</h1>
      <form className="loginSpread">
        <label>
          Username:
          <br/>
        <input type="text" name="name" />
          <br/>
          Password:
          <br/>
        <input type="text" name="name" />
        </label>
        <br/> 
        <input id="submit" type="submit" value="Submit" />
      </form>
>>>>>>> Stashed changes
    </Layout>
  )
}