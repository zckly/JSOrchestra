
//initialize react
//make sure jquery works

//creates a blank div, appends it to the body of JSFiddle.net
$("<div id='jsOrchestra'></div>").appendTo("body")
var robotoTag = $('<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">')
var quicksandTag = $('<link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">')
$('head').append(robotoTag)
$('head').append(quicksandTag)


var Router = ReactRouter.BrowserRouter
var Match = ReactRouter.Match
var Link = ReactRouter.Link
class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
      )
  }
  
}

class Splash extends React.Component {
  render() {
    return (
      
      <div id='splashScreen'>
        
        <button id='splashBtn'>
          <Link to="/lessons">
            START
          </Link>
        </button>
        
      </div>
      )
  }
}

class LessonList extends React.Component {
  render() {
    return (
      <div id="lessonList">
        
        {/* Give 50% or 50vw LEFT */}
        <div className="twoRows">
          <div className="panel">1</div>
          <div className="panel">2</div>
          <div className="panel">3</div>
          <div className="panel">4</div>
          <div className="panel">5</div>
          <div className="panel">6</div>
          <div className="panel">7</div>
          <div className="panel">8</div>
        </div>
        
        {/* Give 50% or 50vw RIGHT */}
        <div id="lessonDesc">
        </div>
      
      </div>

      )
  }
}

class TutorApp extends React.Component {
  render() {
    return (
      <div></div>
      )
  }
}

ReactDOM.render( <Router>
                    <Match exactly pattern="/" component={Splash} />
                    <Match pattern='/lessons' component={LessonList} />
                    <Match pattern='/tutor' component={TutorApp} />
                </Router>, document.getElementById('jsOrchestra'))
