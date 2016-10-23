
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
        <button id='deleteThis'>
          <Link to="/tutor">
            tutor
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
        <div id="twoRows">
          <div id='panel1' className="panel">1</div>
          <div id='panel2' className="panel">2</div>
          <div id='panel3' className="panel">3</div>
          <div id='panel4' className="panel">4</div>
          <div id='panel5' className="panel">5</div>
          <div id='panel6' className="panel">6</div>
          <div id='panel7' className="panel">7</div>
          <div id='panel8' className="panel">8</div>
        </div>
        
        {/* Give 50% or 50vw RIGHT */}
        <div id="lessonDesc">
        </div>
      
      </div>

      )
  }
}

class TutorApp extends React.Component {
  componentDidMount() {
    var elem = $('#panel_html > div > div.CodeMirror-scroll > div.CodeMirror-sizer > div > div')
    console.log('HTML js fiddle', elem)
  }
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
