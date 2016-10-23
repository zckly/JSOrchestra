
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
            <div id="currentState" class='panel1Class'></div>
          </div>
          
          <div id="container">
          <div onClick={this.onItemClick.bind(this)} id='panel1' className="panel"><Link to="/tutor">1</Link></div>
          <div onClick={this.onItemClick.bind(this)} id='panel2' className="panel"><Link to="/tutor">2</Link></div>
          <div onClick={this.onItemClick.bind(this)} id='panel3' className="panel"><Link to="/tutor">3</Link></div>
          <div onClick={this.onItemClick.bind(this)} id='panel4' className="panel"><Link to="/tutor">4</Link></div>
          <div onClick={this.onItemClick.bind(this)} id='panel5' className="panel"><Link to="/tutor">5</Link></div>
          <div onClick={this.onItemClick.bind(this)} id='panel6' className="panel"><Link to="/tutor">6</Link></div>
          <div onClick={this.onItemClick.bind(this)} id='panel7' className="panel"><Link to="/tutor">7</Link></div>
          <div onClick={this.onItemClick.bind(this)} id='panel8' className="panel"><Link to="/tutor">8</Link></div>
          </div>
        </div>

      </div>

      )
  }
}

class TutorApp extends React.Component {
  componentDidMount() {
    var elem = $('#panel_html > div > div.CodeMirror-scroll > div.CodeMirror-sizer > div > div > div > div.CodeMirror-code')
    elem.trigger('keypress')
    var todoHtml = '<div class="jumbotron">' + '\n' + '<input type="text" class="form-control" id="todoInput" placeholder="ayy lmao" />' + '\n' + 
      '<p><a class="btn btn-primary btn-lg" id="addTodo" href="#" role="button">Add To-do</a></p>' + '\n' +
      '<div id="todoList" class="list-group">' + '\n' +
        '<button type="button" class="list-group-item">Brush teeth</button>'  + '\n' +
        '<button type="button" class="list-group-item">Read books</button>'  + '\n' +
        '<button type="button" class="list-group-item">Shop for dank memes</button>'  + '\n' +
        '<button type="button" class="list-group-item">Run for president</button>'  + '\n' +
        '<button type="button" class="list-group-item">Steal the declaration of independence</button>'  + '\n' +
      '</div>'  + '\n' +
    '</div>'  + '\n' + '</div>'
    elem.text(todoHtml)
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
                </Router>, document.getElementById('jsOrchestra'))
