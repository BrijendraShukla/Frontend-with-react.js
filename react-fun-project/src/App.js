import NavScrollExample from "./component/Navbar";
import Textarea from "./component/Textarea";
import React, { useState } from 'react';
import Alert from "./component/Alert";


export default function App() {
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#041734';
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled","success");
    }
  }
    return (
        <>
        <NavScrollExample navbar="Brijendra" Something_else_here="Help" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>  
        <div className="container my-3">
          <Textarea heading="Enter you Text" mode={mode}/>
        </div>
        </>
    )
}
