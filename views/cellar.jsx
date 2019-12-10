const React = require('react')
const Layout = require('./Layout')

module.exports = () => {
  return (
    <Layout>
      {/* Nav */}
      <div className="loginBackground">
        <nav className="row">
          <div className="nav-wrapper">
            <a id="submitBtn" className="brand-logo left">Wine Cellar</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            </ul>
          </div>
        </nav>

        {/* Body */}
        <div className="row options">
          <div className="col s12 m7">
            <div className="card horizontal modal-trigger" data-set="addWine" data-target="mAddWine">
              <div className="card-image">
                <img id="addWine" src="./images/addWine.jpg" />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p className="center-align ctitle">Add Wine</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m7">
            <div className="card horizontal modal-trigger" data-target="mAllWine" data-type="allWine" data-body="wineBody">
              <div className="card-image">
                <img data-type="allWine" data-body="wineBody" src="./images/allWine.jpg" />
              </div>
              <div className="card-stacked">
                <div className="card-content" data-type="allWine" data-body="wineBody">
                  <p className="center-align ctitle" data-type="allWine" data-body="wineBody">All Wine</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m7">
            <div className="card horizontal darken-3 modal-trigger" data-body="redWine" data-target="mRedWine" data-type="red">
              <div className="card-image">
                <img data-type="red" data-body="redWine" src="./images/redWine.jpg" />
              </div>
              <div className="card-stacked red">
                <div className="card-content" data-type="red" data-body="redWine">
                  <p className="center-align ctitle " data-type="red" data-body="redWine">Red</p>
                </div>
              </div>
              <div className="card-stacked">
                <div className="card-content red totalSize" data-type="red" data-body="redWine">
                  <p className="center-align ctitle black-text" id="redTotal"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m7">
            <div className="card horizontal modal-trigger" data-target="mWhiteWine" data-body="whiteWine" data-type="white">
              <div className="card-image">
                <img data-type="white" data-body="whiteWine" data-target="mWhiteWine" src="./images/whiteWine.jpg" />
              </div>
              <div className="card-stacked">
                <div className="card-content whiteWine" data-type="white" data-body="whiteWine">
                  <p className="center-align ctitle" data-type="white" data-body="whiteWine">White</p>
                </div>
              </div>
              <div className="card-stacked">
                <div className="card-content whiteWine totalSize" data-type="white" data-body="whiteWine">
                  <p className="center-align ctitle" data-type="white" data-body="whiteWine" id="whiteTotal"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m7">
            <div className="card horizontal lighten-3 modal-trigger" data-type="rose" data-body="roseWine" data-target="mRoseWine">
              <div className="card-image">
                <img data-type="rose" data-body="roseWine" src="./images/roseWine.jpg" />
              </div>
              <div className="card-stacked">
                <div className="card-content pink" data-type="rose" data-body="roseWine">
                  <p className="center-align ctitle" data-type="rose" data-body="roseWine">Rosé</p>
                </div>
              </div>
              <div className="card-stacked">
                <div className="card-content pink totalSize" data-type="rose" data-body="roseWine">
                  <p className="center-align ctitle" data-type="rose" data-body="roseWine" id="roseTotal"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m7">
            <div className="card horizontal modal-trigger" data-target="mDessertWine" data-type="dessert" data-body="dessertWine">
              <div className="card-image">
                <img data-type="dessert" data-body="dessertWine" data-target="mDessertWine" src="./images/dessertWine.jpg" />
              </div>
              <div className="card-stacked">
                <div className="card-content cognac" data-type="dessert" data-body="dessertWine">
                  <p className="center-align ctitle" data-type="dessert" data-body="dessertWine">Dessert</p>
                </div>
              </div>
              <div className="card-stacked">
                <div className="card-content cognac totalSize" data-type="dessert" data-body="dessertWine">
                  <p className="center-align ctitle" data-type="dessert" data-body="dessertWine" id="dessertTotal"></p>
                </div>
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
            <a href="#!" className="modal-close waves-effect waves-green btn-flat" id="modalClose">Close</a>
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
            <a href="#!" className="modal-close waves-effect waves-green btn-flat" id="modalClose">Close</a>
          </div>
        </div>
        {/* Display red wine */}
        <div id="mRedWine" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h5 className="center-align">Red Wine!</h5>
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody id="redWine"></tbody>
            </table>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat" id="modalClose">Close</a>
          </div>
        </div>
        {/* Display white wine */}
        <div id="mWhiteWine" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h5 className="center-align">White Wine!</h5>
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody id="whiteWine"></tbody>
            </table>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat" id="modalClose">Close</a>
          </div>
        </div>
        {/* Display rosé wine */}
        <div id="mRoseWine" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h5 className="center-align">Rosé Wine!</h5>
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody id="roseWine"></tbody>
            </table>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat" id="modalClose">Close</a>
          </div>
        </div>
        {/* display Dessert Wine */}
        <div id="mDessertWine" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h5 className="center-align">Dessert Wine!</h5>
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody id="dessertWine"></tbody>
            </table>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat" id="modalClose">Close</a>
          </div>
        </div>
        {/* End Div */}
      </div>
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="./cellar.js"></script>
    </Layout >
  )
}