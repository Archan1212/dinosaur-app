import React from 'react';
import Dinosaur from './Dinosaur';
import Header from './Header';

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

  handleRemoveDinosaur = (name) => {
    this.setState(prevState=>{
      return{
        dinosaurs: prevState.dinosaurs.filter(d=>d.name !== name)
      }
    })
  }
  render(){
    return (
      <div>
        <Header title="Dinosaurs List"/>
        {
          this.state.dinosaurs.map(d=>(
            <Dinosaur name={d.name} type={d.type} color={d.color} removeDinosaur={this.handleRemoveDinosaur}/>
          ))
        }
      </div>
    );
  }
  
}

export default App;
