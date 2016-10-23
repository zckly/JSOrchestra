
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
        $('#lessonDesc > div.currentState').removeClass();
        $('#lessonDesc > div.currentState').addClass(elementId + 'Class');
       console.log(elementId);
        break;
      case 'panel2': 
        console.log(elementId);
        break;
      case 'panel3': 
        console.log(elementId);
        break;
      case 'panel4': 
        console.log(elementId);
        break;
      case 'panel5': 
        console.log(elementId);
        break;
      case 'panel6': 
        console.log(elementId);
        break;
      case 'panel7': 
        console.log(elementId);
        break;
      case 'panel8': 
        console.log(elementId);
        break;
    }
  }
  render() {
    return (
      <div id="lessonList">
        
        {/* Give 50% or 50vw LEFT */}
        <div id="twoRows">
          <div onClick={this.onItemClick.bind(this)} id='panel1' className="panel">1</div>
          <div onClick={this.onItemClick.bind(this)} id='panel2' className="panel">2</div>
          <div onClick={this.onItemClick.bind(this)} id='panel3' className="panel">3</div>
          <div onClick={this.onItemClick.bind(this)} id='panel4' className="panel">4</div>
          <div onClick={this.onItemClick.bind(this)} id='panel5' className="panel">5</div>
          <div onClick={this.onItemClick.bind(this)} id='panel6' className="panel">6</div>
          <div onClick={this.onItemClick.bind(this)} id='panel7' className="panel">7</div>
          <div onClick={this.onItemClick.bind(this)} id='panel8' className="panel">8</div>
        </div>
        
        {/* Give 50% or 50vw RIGHT */}
        <div id="lessonDesc">
          <div id="currentState"></div>
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
                    <Match pattern='/tutor' component={TutorApp} />
                </Router>, document.getElementById('jsOrchestra'))
