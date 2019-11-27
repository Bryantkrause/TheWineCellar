const React = require('react')
// const materialize = require('materialize-css')

module.exports = props => {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>The Wine Cellar</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
      <link rel="stylesheet" href="./styles.css"/>
    </head>
    <body>
      {props.children}

      <script src="./app.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    </body>
    </html>
  )
}
