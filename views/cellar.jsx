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
              <img id="addWine" data-set="addWine" data-target="mAddWine" className="modal-trigger" src="./images/addWine.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p className="center-align ctitle">Add Wine</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img id="allWine" data-body="wineBody" data-target="mAllWine" className="modal-trigger" src="./images/allWine.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p className="center-align ctitle">All Wine</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img id="red" data-body="redWine" data-target="mRedWine" className="modal-trigger" src="./images/redWine.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p className="center-align ctitle">Red</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img id="white" data-body="whiteWine" data-target="mWhiteWine" className="modal-trigger" src="./images/whiteWine.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p className="center-align ctitle">White</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img id="rose" data-body="roseWine" data-target="mRoseWine" className="modal-trigger" src="./images/roseWine.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p className="center-align ctitle">Rosé</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img id="dessert" data-body="dessertWine" data-target="mDessertWine" className="modal-trigger" src="./images/dessertWine.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p className="center-align ctitle">Dessert</p>
              </div>
            </div>
          </div>
        </div>


        {/* Add wine modal */}
        <div id="mAddWine" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h5 className="center-align">Add Wine to your Cellar</h5>
            {/* form Start */}
            <form id="wineInfo">
              {/* Type of Wine */}
              <select id="type" className="browser-default">
                <option value="Red">Red Wine</option>
                <option value="White">White Wine</option>
                <option value="Rosé">Rosé</option>
                <option value="Dessert">Dessert</option>
              </select>
              <label>Type</label>
              {/* Name of Wine */}
              <input id="name" type="text" className="validate" />
              <label className="active">Name</label>
              {/* Brand */}
              <input id="brand" type="text" className="validate" />
              <label className="active">Brand</label>
              {/* Year */}
              <input id="yearBottled" type="text" className="validate" />
              <label className="active">Year Bottled</label>
              {/* Quantity */}
              <input id="quantity" type="text" className="validate" />
              <label className="active">Quantity</label>
              {/* Button */}
              <p>
                <a href="#!" id="addMyWine" className="modal-close waves-effect waves-green btn">Submit!</a>
              </p>
            </form>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
        {/* Display all wine */}
        <div id="mAllWine" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h5 className="center-align">All Wine!</h5>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Year</th>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody id="wineBody"></tbody>
            </table>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
        {/* Display red wine */}
        <div id="mRedWine" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h5 className="center-align">Red Wine!</h5>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Year</th>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody id="redWine"></tbody>
            </table>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
        {/* Display white wine */}
        <div id="mWhiteWine" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h5 className="center-align">White Wine!</h5>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Year</th>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody id="whiteWine"></tbody>
            </table>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
        {/* Display rosé wine */}
        <div id="mRoseWine" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h5 className="center-align">Rosé Wine!</h5>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Year</th>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody id="roseWine"></tbody>
            </table>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
        {/* display Dessert Wine */}
        <div id="mDessertWine" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h5 className="center-align">Dessert Wine!</h5>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Year</th>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody id="dessertWine"></tbody>
            </table>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
        {/* End Div */}
      </div>
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="./cellar.js"></script>
    </Layout >
  )
}