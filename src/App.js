// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react';
// import {
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert(
      {
        msg: message,
        type: type
      })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Dark mode has been disabled", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      {/* <Routes> */}
          {/* <Route path='/TextForm' element={ <div className="m-5"><TextForm heading="Enter the text to anlyze" mode={mode} showAlert={showAlert} /></div> }/>  */}
          <div className="m-5"><TextForm heading="TextUtils-Text Converter" mode={mode} showAlert={showAlert} /></div> 
           {/* <About mode={mode}/>   */}
      {/* </Routes> */}
    </>
  );
}

export default App;
