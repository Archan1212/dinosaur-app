import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    dinosaurs: [{
      name: 'barts',
      type: 'type a',
      color: 'green'
    },
    {
      name: 'Trex',
      type: 'type b',
      color: 'purple'
    },
    {
      name: 'tronos',
      type: 'type b',
      color: 'red'
    }]
  };
  render(){
    return (
      <div className="App">
        
      </div>
    );
  }
  
}

export default App;
