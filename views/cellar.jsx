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
              <img id="addWine" data-set="addWine" data-target="mAddWine" class="modal-trigger" src="./images/allWine.jpg" />
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
            <div className="card-image">
              <img id="wineType" datatype="allWin" data-target="mAllWine" class="modal-trigger" src="./images/allWine.jpg" />
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
              <img id="wineType" datatype="whiteWine" data-target="mRedWine" class="modal-trigger" src="./images/redWine.jpg" />
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
              <img id="wineType" datatype="whiteWine" data-target="mWhiteWine" class="modal-trigger" src="./images/whiteWine.jpg" />
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
              <img id="wineType" datatype="roseWine" data-target="mRoseWine" class="modal-trigger" src="./images/roseWine.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>Rosé</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img id="wineType" datatype="dessertWine" data-target="mDessertWine" class="modal-trigger" src="./images/dessertWine.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>Dessert</p>
              </div>
            </div>
          </div>
        </div>


        {/* Add wine modal */}
        <div id="mAddWine" class="modal modal-fixed-footer">
          <div class="modal-content">
            <h4>Add Wine to your Cellar</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
        {/* Display all wine */}
        <div id="mAllWine" class="modal modal-fixed-footer">
          <div class="modal-content">
            <h4>All Wine!</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
        {/* Display red wine */}
        <div id="mRedWine" class="modal modal-fixed-footer">
          <div class="modal-content">
            <h4>Red Wine!</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
        {/* Display white wine */}
        <div id="mWhiteWine" class="modal modal-fixed-footer">
          <div class="modal-content">
            <h4>White Wine!</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
        {/* Display rosé wine */}
        <div id="mRoseWine" class="modal modal-fixed-footer">
          <div class="modal-content">
            <h4>Rosé Wine!</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
        {/* display Dessert Wine */}
        <div id="mDessertWine" class="modal modal-fixed-footer">
          <div class="modal-content">
            <h4>Dessert Wine!</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
        {/* End Div */}
      </div>
      <script src="./cellar.js"></script>
    </Layout >
  )
}