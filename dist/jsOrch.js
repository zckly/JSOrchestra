"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//initialize react
//make sure jquery works

//creates a blank div, appends it to the body of JSFiddle.net
$("<div id='jsOrchestra'></div>").appendTo("body");
var robotoTag = $('<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">');
var quicksandTag = $('<link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">');
$('head').append(robotoTag);
$('head').append(quicksandTag);

var Router = ReactRouter.BrowserRouter;
var Match = ReactRouter.Match;
var Link = ReactRouter.Link;

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.children
      );
    }
  }]);

  return App;
}(React.Component);

var Splash = function (_React$Component2) {
  _inherits(Splash, _React$Component2);

  function Splash() {
    _classCallCheck(this, Splash);

    return _possibleConstructorReturn(this, (Splash.__proto__ || Object.getPrototypeOf(Splash)).apply(this, arguments));
  }

  _createClass(Splash, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "splashScreen" },
        React.createElement(
          Link,
          { to: "/lessons" },
          React.createElement("button", { id: "splashBtn" })
        )
      );
    }
  }]);

  return Splash;
}(React.Component);

var LessonList = function (_React$Component3) {
  _inherits(LessonList, _React$Component3);

  function LessonList() {
    _classCallCheck(this, LessonList);

    return _possibleConstructorReturn(this, (LessonList.__proto__ || Object.getPrototypeOf(LessonList)).apply(this, arguments));
  }

  _createClass(LessonList, [{
    key: "getInitialState",
    value: function getInitialState() {
      return {
        selected: 'p1'
      };
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(event) {
      event.preventDefault();
      this.setState({ selectedItem: event.currentTarget.dataset.id });

      var elementId = event.target.id;
      switch (elementId) {
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
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "lessonList" },
        React.createElement(
          "div",
          { id: "twoRows" },
          React.createElement(
            "div",
            { id: "lessonDesc" },
            React.createElement(
              Link,
              { to: "/tutor" },
              React.createElement("div", { id: "currentState", "class": "panel1Class" })
            )
          ),
          React.createElement(
            "div",
            { id: "container" },
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel1", className: "panel" },
              "1"
            ),
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel2", className: "panel" },
              "2"
            ),
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel3", className: "panel" },
              "3"
            ),
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel4", className: "panel" },
              "4"
            ),
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel5", className: "panel" },
              "5"
            ),
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel6", className: "panel" },
              "6"
            ),
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel7", className: "panel" },
              "7"
            ),
            React.createElement(
              "div",
              { onClick: this.onItemClick.bind(this), id: "panel8", className: "panel" },
              "8"
            )
          )
        )
      );
    }
  }]);

  return LessonList;
}(React.Component);

var TutorApp = function (_React$Component4) {
  _inherits(TutorApp, _React$Component4);

  function TutorApp() {
    _classCallCheck(this, TutorApp);

    return _possibleConstructorReturn(this, (TutorApp.__proto__ || Object.getPrototypeOf(TutorApp)).apply(this, arguments));
  }

  _createClass(TutorApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elem = $('#panel_html > div > div.CodeMirror-scroll > div.CodeMirror-sizer > div > div > div > div.CodeMirror-code');
      elem.trigger('keypress');
      var todoHtml = '<fieldset class="column left"><div class="window top" id="panel_html" data-panel_type="html" style="height: 50.0592%;"><textarea id="id_code_html" rows="10" cols="40" name="code_html" style="display: none;"></textarea><a href="#" class="windowLabel" data-panel="html"><span class="label">HTML</span><i class="bts bt-gear"></i></a><div class="CodeMirror cm-s-default CodeMirror-wrap"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 346px; left: 39px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" tabindex="0"></textarea></div><div class="CodeMirror-vscrollbar" cm-not-content="true" style="width: 18px; pointer-events: none;"><div style="min-width: 1px; height: 0px;"></div></div><div class="CodeMirror-hscrollbar" cm-not-content="true" style="height: 18px; pointer-events: none;"><div style="height: 100%; min-height: 1px; width: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1" draggable="false"><div class="CodeMirror-sizer" style="margin-left: 35px; margin-bottom: 0px; border-right-width: 30px; min-height: 369px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines"><div style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre>x</pre><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>11</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 0px; width: 401px; height: 19px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 342px; width: 0px; height: 19px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 19px; width: 401px; height: 323px;"></div></div><div class="CodeMirror-cursors" style="visibility: hidden;"></div><div class="CodeMirror-code"><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">div</span> <span class="cm-attribute">class</span>=<span class="cm-string">"jumbotron"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">input</span> <span class="cm-attribute">type</span>=<span class="cm-string">"text"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"form-control"</span> <span class="cm-attribute">id</span>=<span class="cm-string">"todoInput"</span> <span class="cm-attribute">placeholder</span>=<span class="cm-string">"ayy lmao"</span> <span class="cm-tag cm-bracket">/&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">p</span><span class="cm-tag cm-bracket">&gt;&lt;</span><span class="cm-tag">a</span> <span class="cm-attribute">class</span>=<span class="cm-string">"btn btn-primary btn-lg"</span> <span class="cm-attribute">id</span>=<span class="cm-string">"addTodo"</span> <span class="cm-attribute">href</span>=<span class="cm-string">"#"</span> <span class="cm-attribute">role</span>=<span class="cm-string">"button"</span><span class="cm-tag cm-bracket">&gt;</span>Add To-do<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">a</span><span class="cm-tag cm-bracket">&gt;&lt;/</span><span class="cm-tag">p</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">4</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">div</span> <span class="cm-attribute">id</span>=<span class="cm-string">"todoList"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">5</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Brush teeth<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">6</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Read books<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">7</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Shop for dank memes<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">8</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Run for president<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">9</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Steal the declaration of independence<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">10</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">div</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">11</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">div</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">12</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 30px; width: 1px; border-bottom: 0px solid transparent; top: 369px;"></div><div class="CodeMirror-gutters" style="height: 399px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 34px;"></div></div></div></div><ul class="warningTooltip"></ul></div><div class="handler handler_horizontal" style="top: 424px;"></div><div class="window bottom" id="panel_js" data-panel_type="js" style="height: 49.9408%;"><textarea id="id_code_js" rows="10" cols="40" name="code_js" style="display: none;"></textarea><a href="#" class="windowLabel" data-panel="js"><span class="label">JavaScript</span><i class="bts bt-gear"></i></a><div class="CodeMirror cm-s-default CodeMirror-wrap"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 4px; left: 39px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" tabindex="0"></textarea></div><div class="CodeMirror-vscrollbar" cm-not-content="true" style="bottom: 0px; width: 18px; pointer-events: none;"><div style="min-width: 1px; height: 0px;"></div></div><div class="CodeMirror-hscrollbar" cm-not-content="true" style="height: 18px; pointer-events: none;"><div style="height: 100%; min-height: 1px; width: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 35px; margin-bottom: 0px; border-right-width: 30px; min-height: 27px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines"><div style="position: relative; outline: none;"><div class="CodeMirror-measure"><span><span>​</span>x</span></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors" style="visibility: hidden;"><div class="CodeMirror-cursor" style="left: 4px; top: 0px; height: 19px;">&nbsp;</div></div><div class="CodeMirror-code"><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 30px; width: 1px; border-bottom: 0px solid transparent; top: 27px;"></div><div class="CodeMirror-gutters" style="height: 57px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 34px;"></div></div></div></div></div><div class="shim"></div></fieldset>';
      $('fieldset.left').eq(0).replaceWith(todoHtml);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null);
    }
  }]);

  return TutorApp;
}(React.Component);

ReactDOM.render(React.createElement(
  Router,
  null,
  React.createElement(Match, { exactly: true, pattern: "/", component: Splash }),
  React.createElement(Match, { pattern: "/lessons", component: LessonList })
), document.getElementById('jsOrchestra'));