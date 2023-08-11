import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,Route,Routes
} from "react-router-dom";

function App() {
  const [Mode,setMode] = useState('light');
  const [alert,setAlert] =useState(null);

  const showAlert = (message,type) =>{
        setAlert({msg: message,
        type: type})
        setTimeout(()=>{
        setAlert(null)},1500) 
        }
  const toggleMode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743'
      showAlert("Dark Mode is Enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light Mode is Enable","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About Text" mode={Mode} modeChange={toggleMode}/>
      <Alert alert={alert} />
      <div className="container">
        <Routes>
           <Route exact path ='/about' element={<About mode={Mode}/>} />
           <Route exact path ='/' element = {<TextForm heading="Enter Your Text to analyse" mode={Mode} showAlert={showAlert}/>} />
        </Routes>
        </div>
    </Router>
      {/* <Navbar title="TextUtils" about="About Text" mode={Mode} modeChange={toggleMode}/>
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter Your Text to analyse" mode={Mode} showAlert={showAlert}/>
        <About />
  </div> */}
    </>
  );
}

export default App;
