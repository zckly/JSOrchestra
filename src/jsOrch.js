
//initialize react
//make sure jquery works

//creates a blank div, appends it to the body of JSFiddle.net
$("<div id='jsOrchestra' style='z-index: 999'></div>").appendTo("body")
var robotoTag = $('<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">')
$('head').append(robotoTag)

console.log(ReactRouter)
var Router = ReactRouter.Router
var Route = ReactRouter.Route
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
    <div>lesson list</div>
  }
}

ReactDOM.render( <Router>
                    <Route component={App}>
                      <Route path='/' component={Splash}/>
                      <Route path='/lessons' component={LessonList}/>
                    </Route>
                </Router>, document.getElementById('jsOrchestra'))
