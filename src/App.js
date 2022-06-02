import "./App.css";
import About from './component/About';
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import React, { useState } from "react";
import Alert from './component/Alert';
// import  { Switch } from 'react-router-dom';
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);

  }
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1f0559";
      showAlert("Dark Mode has been enabled", "success");
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      
    }
  };

  return (
    <>
    <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      
      {/* <Navbar/> */}
      <div className="container my-3">
      <Switch>       
        <Route exact path="/about">
          <About mode={mode} />
        </Route>
       <Route exact path="/">
          <Textform showAlert={showAlert} heading="Try TextUtils Word Counter, Character Counter, Remove extra spaces" mode={mode} />
       </Route>
     </Switch> 
      </div>
    </Router>
           
    </>
  );
}

export default App;
