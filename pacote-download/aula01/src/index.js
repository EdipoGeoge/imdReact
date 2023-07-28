import React from 'react';
import ReactDOM from 'react-dom';


function Clock(){
  return (
    <div><h1>Hora: {new Date().toLocaleTimeString} </h1></div>

  )
}

function App(){
  return (<div>
    <Welcome name="Paulo" />
    <Welcome name="Maria" />
  </div>)
}


ReactDOM.render(
    <App />,
    document.getElementById('root'));


