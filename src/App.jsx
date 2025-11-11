
import React from 'react';
import Conditional from './Conditional';
import Style from './Style';
import Propdrill from './Propdrill';


// Creating a simple functional component
function Greeting() {
  return (
    <h1>Hello, welcome to React!</h1>
  );
}
//Class Based Component
class Greet extends React.Component {
  render() {
      return <h1>Hello, {this.props.name}!</h1>;
}
}


const App = () => {
  let name = "Sohail";
  let arrays = ["A", "B", "C", "D"];
  return (
    <div>
      <h2>Hello {name}</h2>
      <ul>
        
        {arrays.map((array,index)=>(
          <li key={index}>{array}</li>
        ))}

      </ul>
      <Greeting />
      <Greet name="Ahmed" />
      <Conditional />
      < Style />
      <Propdrill />
    </div>
  );
};

export default App;
