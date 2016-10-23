
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
    var todoHtml = '<fieldset class="column left"><div class="window top" id="panel_html" data-panel_type="html" style="height: 50.0592%;"><textarea id="id_code_html" rows="10" cols="40" name="code_html" style="display: none;"></textarea><a href="#" class="windowLabel" data-panel="html"><span class="label">HTML</span><i class="bts bt-gear"></i></a><div class="CodeMirror cm-s-default CodeMirror-wrap"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 346px; left: 39px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" tabindex="0"></textarea></div><div class="CodeMirror-vscrollbar" cm-not-content="true" style="width: 18px; pointer-events: none;"><div style="min-width: 1px; height: 0px;"></div></div><div class="CodeMirror-hscrollbar" cm-not-content="true" style="height: 18px; pointer-events: none;"><div style="height: 100%; min-height: 1px; width: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1" draggable="false"><div class="CodeMirror-sizer" style="margin-left: 35px; margin-bottom: 0px; border-right-width: 30px; min-height: 369px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines"><div style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre>x</pre><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>11</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 0px; width: 401px; height: 19px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 342px; width: 0px; height: 19px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 19px; width: 401px; height: 323px;"></div></div><div class="CodeMirror-cursors" style="visibility: hidden;"></div><div class="CodeMirror-code"><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">div</span> <span class="cm-attribute">class</span>=<span class="cm-string">"jumbotron"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">input</span> <span class="cm-attribute">type</span>=<span class="cm-string">"text"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"form-control"</span> <span class="cm-attribute">id</span>=<span class="cm-string">"todoInput"</span> <span class="cm-attribute">placeholder</span>=<span class="cm-string">"ayy lmao"</span> <span class="cm-tag cm-bracket">/&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">p</span><span class="cm-tag cm-bracket">&gt;&lt;</span><span class="cm-tag">a</span> <span class="cm-attribute">class</span>=<span class="cm-string">"btn btn-primary btn-lg"</span> <span class="cm-attribute">id</span>=<span class="cm-string">"addTodo"</span> <span class="cm-attribute">href</span>=<span class="cm-string">"#"</span> <span class="cm-attribute">role</span>=<span class="cm-string">"button"</span><span class="cm-tag cm-bracket">&gt;</span>Add To-do<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">a</span><span class="cm-tag cm-bracket">&gt;&lt;/</span><span class="cm-tag">p</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">4</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">div</span> <span class="cm-attribute">id</span>=<span class="cm-string">"todoList"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">5</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Brush teeth<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">6</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Read books<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">7</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Shop for dank memes<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">8</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Run for president<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">9</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Steal the declaration of independence<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">10</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">div</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">11</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">div</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">12</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 30px; width: 1px; border-bottom: 0px solid transparent; top: 369px;"></div><div class="CodeMirror-gutters" style="height: 399px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 34px;"></div></div></div></div><ul class="warningTooltip"></ul></div><div class="handler handler_horizontal" style="top: 424px;"></div><div class="window bottom" id="panel_js" data-panel_type="js" style="height: 49.9408%;"><textarea id="id_code_js" rows="10" cols="40" name="code_js" style="display: none;"></textarea><a href="#" class="windowLabel" data-panel="js"><span class="label">JavaScript</span><i class="bts bt-gear"></i></a><div class="CodeMirror cm-s-default CodeMirror-wrap"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 4px; left: 39px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" tabindex="0"></textarea></div><div class="CodeMirror-vscrollbar" cm-not-content="true" style="bottom: 0px; width: 18px; pointer-events: none;"><div style="min-width: 1px; height: 0px;"></div></div><div class="CodeMirror-hscrollbar" cm-not-content="true" style="height: 18px; pointer-events: none;"><div style="height: 100%; min-height: 1px; width: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 35px; margin-bottom: 0px; border-right-width: 30px; min-height: 27px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines"><div style="position: relative; outline: none;"><div class="CodeMirror-measure"><span><span>​</span>x</span></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors" style="visibility: hidden;"><div class="CodeMirror-cursor" style="left: 4px; top: 0px; height: 19px;">&nbsp;</div></div><div class="CodeMirror-code"><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 30px; width: 1px; border-bottom: 0px solid transparent; top: 27px;"></div><div class="CodeMirror-gutters" style="height: 57px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 34px;"></div></div></div></div></div><div class="shim"></div></fieldset>'
    $('fieldset.left').eq(0).replaceWith(todoHtml);
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
