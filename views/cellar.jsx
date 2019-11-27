const React = require('react')
const Layout = require('./Layout')

module.exports = () => {
  return (
    <Layout>
      {/* Nav */}
      <nav>
        <div className="row">
          <div className="col s12">
            <nav>
              <div className="nav-wrapper">
                <a className="brand-logo left">Wine Cellar</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                </ul>
                <a className="btn-floating btn-add-floater btn-large waves-effect waves-light red right"><i className="material-icons">add</i></a>
              </div>
            </nav>
          </div>
        </div>
      </nav>
      {/* Body */}
      <div class="row">
        <div class="col s12 m5">
          <div class="card-panel teal">
            <span class="white-text">
              White
            </span>
          </div>
        </div>
        <div class="col s12 m5">
          <div class="card-panel teal">
            <span class="white-text">
              Red
            </span>
          </div>
        </div>
        <div class="col s12 m5">
          <div class="card-panel teal">
            <span class="white-text">
              Rose
            </span>
          </div>
        </div>
        <div class="col s12 m5">
          <div class="card-panel teal">
            <span class="white-text">
              Dessert
            </span>
          </div>
        </div>
        <div class="col s12 m5">
          <div class="card-panel teal">
          <img src="./images/allWine.jpg" />
            <span class="white-text">
              Display All
            </span>
          </div>
        </div>
      </div>
    </Layout >
  )
}