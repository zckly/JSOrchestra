//initialize react
//make sure jquery works

//creates a blank div, appends it to the body of JSFiddle.net
$("<div id='jsOrchestra' style='z-index: 999'></div>").appendTo("body")

class App extends React.Component {
  render() {
    return (
      
      <div id='splashScreen'>
      
        
      
      </div>
      )
  }
  
}

ReactDOM.render(<App />, document.getElementById('jsOrchestra'))
