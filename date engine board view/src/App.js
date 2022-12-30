import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css";

// explore more Monday React Components here: https://style.monday.com/
import Selections from "./components/Selections.js";

const monday = mondaySdk();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div id="content">
          <Selections />
        </div>
      </div>
    );
  }
}

export default App;
