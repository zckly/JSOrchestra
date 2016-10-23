
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
        <Link to="/lessons">
          <button id='splashBtn'>
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
          <Link to="/tutor">
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
    var elem = $('#panel_html > div > div.CodeMirror-scroll > div.CodeMirror-sizer > div > div > div > div.CodeMirror-code')
    elem.trigger('keypress')
    var todoHtml = '<div class="CodeMirror-code"><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">div</span> <span class="cm-attribute">class</span>=<span class="cm-string">"jumbotron"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">input</span> <span class="cm-attribute">type</span>=<span class="cm-string">"text"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"form-control"</span> <span class="cm-attribute">id</span>=<span class="cm-string">"todoInput"</span> <span class="cm-attribute">placeholder</span>=<span class="cm-string">"ayy lmao"</span> <span class="cm-tag cm-bracket">/&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">p</span><span class="cm-tag cm-bracket">&gt;&lt;</span><span class="cm-tag">a</span> <span class="cm-attribute">class</span>=<span class="cm-string">"btn btn-primary btn-lg"</span> <span class="cm-attribute">id</span>=<span class="cm-string">"addTodo"</span> <span class="cm-attribute">href</span>=<span class="cm-string">"#"</span> <span class="cm-attribute">role</span>=<span class="cm-string">"button"</span><span class="cm-tag cm-bracket">&gt;</span>Add To-do<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">a</span><span class="cm-tag cm-bracket">&gt;&lt;/</span><span class="cm-tag">p</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">4</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">div</span> <span class="cm-attribute">id</span>=<span class="cm-string">"todoList"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">5</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Brush teeth<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">6</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Read books<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">7</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Shop for dank memes<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">8</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Run for president<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">9</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Steal the declaration of independence<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">10</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">div</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">11</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">div</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">12</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div></div>'
    $('div.CodeMirror-code').replaceWith(todoHtml);
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
