
//initialize react
//make sure jquery works

//creates a blank div, appends it to the body of JSFiddle.net
$("<div id='jsOrchestra' style='z-index: 999'></div>").appendTo("body")
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
      <div id="lessonList"></div>

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
