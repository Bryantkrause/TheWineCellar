const React = require('react')
const Layout = require('./Layout')

module.exports = (props) => {
  return (
    <Layout>
      <h1>Hello {props.name}}!</h1>
      <button id="btn" className="button"> click my butt</button>
  <p>{props.name}</p>
    </Layout>
  )
}


