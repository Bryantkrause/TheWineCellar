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
                <a id="submitBtn" className="brand-logo left">Wine Cellar</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </nav>
      {/* Body */}
      <div className="row options">
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://lorempixel.com/100/100/nature/6" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>Add Wine</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div id="allWine" className="card-image">
              <img src="https://lorempixel.com/100/100/nature/6" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>All Wine</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://lorempixel.com/100/100/nature/6" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>Red</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://lorempixel.com/100/100/nature/6" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>White</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://lorempixel.com/100/100/nature/6" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>Rose</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://lorempixel.com/100/100/nature/6" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>Dessert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="./cellar.js"></script>
    </Layout >
  )
}