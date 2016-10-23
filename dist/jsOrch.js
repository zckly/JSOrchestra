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
      var todoHtml = '<div class="CodeMirror-code"><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">div</span> <span class="cm-attribute">class</span>=<span class="cm-string">"jumbotron"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">input</span> <span class="cm-attribute">type</span>=<span class="cm-string">"text"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"form-control"</span> <span class="cm-attribute">id</span>=<span class="cm-string">"todoInput"</span> <span class="cm-attribute">placeholder</span>=<span class="cm-string">"ayy lmao"</span> <span class="cm-tag cm-bracket">/&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">p</span><span class="cm-tag cm-bracket">&gt;&lt;</span><span class="cm-tag">a</span> <span class="cm-attribute">class</span>=<span class="cm-string">"btn btn-primary btn-lg"</span> <span class="cm-attribute">id</span>=<span class="cm-string">"addTodo"</span> <span class="cm-attribute">href</span>=<span class="cm-string">"#"</span> <span class="cm-attribute">role</span>=<span class="cm-string">"button"</span><span class="cm-tag cm-bracket">&gt;</span>Add To-do<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">a</span><span class="cm-tag cm-bracket">&gt;&lt;/</span><span class="cm-tag">p</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">4</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">div</span> <span class="cm-attribute">id</span>=<span class="cm-string">"todoList"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">5</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Brush teeth<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">6</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Read books<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">7</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Shop for dank memes<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">8</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Run for president<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">9</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"list-group-item"</span><span class="cm-tag cm-bracket">&gt;</span>Steal the declaration of independence<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">10</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">div</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">11</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">div</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">12</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div></div>';
      elem.text(todoHtml);
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