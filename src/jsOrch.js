
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
        <Link to="/codefuture/oo2sv7sL/lessons">
          <button id='splashBtn'>
            START
          </button>
        </Link>
      </div>
      )
  }
}

class LessonList extends React.Component {
  getInitialState() {
    return {
      selected:'p1'
    }
  }
  onItemClick(event) {
    event.preventDefault();
    this.setState({ selectedItem: event.currentTarget.dataset.id });

    var elementId = event.target.id;
    switch(elementId) {
      case 'panel1': 
        $('#currentState').removeClass();
        $('#currentState').addClass(elementId + 'Class');
        break;
      case 'panel2': 
        $('#currentState').removeClass();
        $('#currentState').addClass(elementId + 'Class');
        break;
      case 'panel3': 
        $('#currentState').removeClass();
        $('#currentState').addClass(elementId + 'Class');
        break;
      case 'panel4': 
        $('#currentState').removeClass();
        $('#currentState').addClass(elementId + 'Class');
        break;
      case 'panel5': 
        $('#currentState').removeClass();
        $('#currentState').addClass(elementId + 'Class');
        break;
      case 'panel6': 
        $('#currentState').removeClass();
        $('#currentState').addClass(elementId + 'Class');
        break;
      case 'panel7': 
        $('#currentState').removeClass();
        $('#currentState').addClass(elementId + 'Class');
        break;
      case 'panel8': 
        $('#currentState').removeClass();
        $('#currentState').addClass(elementId + 'Class');
        break;
    }
  }
  render() {
    return (
      <div id="lessonList">
        
        {/* Give 50% or 50vw LEFT */}
        <div id="twoRows">
          {/* Give 50% or 50vw RIGHT */}
          <div id="lessonDesc">
          <Link to="/codefuture/oo2sv7sL/tutor">
            <div id="currentState" class='panel1Class'></div>
          </Link>
          </div>
          
          <div id="container">
          <div onClick={this.onItemClick.bind(this)} id='panel1' className="panel">1</div>
          <div onClick={this.onItemClick.bind(this)} id='panel2' className="panel">2</div>
          <div onClick={this.onItemClick.bind(this)} id='panel3' className="panel">3</div>
          <div onClick={this.onItemClick.bind(this)} id='panel4' className="panel">4</div>
          <div onClick={this.onItemClick.bind(this)} id='panel5' className="panel">5</div>
          <div onClick={this.onItemClick.bind(this)} id='panel6' className="panel">6</div>
          <div onClick={this.onItemClick.bind(this)} id='panel7' className="panel">7</div>
          <div onClick={this.onItemClick.bind(this)} id='panel8' className="panel">8</div>
          </div>
        </div>

      </div>

      )
  }
}

class TutorApp extends React.Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <div></div>
      )
  }
}

ReactDOM.render( <Router>
                    <Match exactly pattern="/codefuture/oo2sv7sL/" component={Splash} />
                    <Match pattern='/codefuture/oo2sv7sL/lessons' component={LessonList} />
                    <Match pattern='/codefuture/oo2sv7sL/tutor' component={TutorApp} />

                </Router>, document.getElementById('jsOrchestra'))
