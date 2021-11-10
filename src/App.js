import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setalert] = useState(null);  //to show alert message

  const showAlert = (message, type)=>{  //This function take message and type and will be called
    setalert({
      msg: message,
      type:type
    })
    setTimeout(() => {   //This determines the time for which alert will occur
      setalert(null);
    },3000);
  }

  const toggleMode = ()=>{  //This function determines what action should be taken when switch in navbar is clicked
    if (mode === 'light'){
      setMode ('dark');  //if mode is light set it to dark
      document.body.style.backgroundColor = '#042743';  
      showAlert("Dark mode is enabled", "success"); //ShowAlert will show this message and success as Tyoe
      document.title =  'Dark Mode Enabled';

      setInterval(() => {  //this helps to change the title of the topic
        document.title = 'Its Amazing';  //to enhance the title
      }, 3500); //in 2000 ms
      setInterval(() => {
        document.title = 'Download TexUtils Now'; //to enhance the title
      }, 2500);
    }
    else{
      setMode ('light');    //else set it to light
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title =  'Light Mode Enabled';
      
    }
  }
  return (
  <>
    <Router>
    <Navbar title="Parag's TextUtils" stotra1="Ramraksha stotra" contact="Contact Us" about="About"  mode={mode}
      toggleMode={toggleMode}/>   
    <Alert alert={alert}/>
    <div className="container my-4">

      
    <Switch>
          <Route exact path="/about"> 
            <About heading = "About Us" mode={mode}/>  
          </Route>
          
          <Route exact path="/">
          <TextForm showAlert = {showAlert} heading = "Enter your text to analyze"  mode={mode}/>
          </Route>
    </Switch>
      {/* <About/> */}
    </div>   
  </Router>
  </>
  );
}

export default App;
