import React, {useState} from 'react';
import './App.css';
import Container from "./Components/Container";

function App() {

  const [index, setIndex] = useState(0)

  const amountElements = 28;

  const containerList: number[] = []

  for(let i=0; i < amountElements; i++) {
    containerList.push(i)
  }

  const moveCard = (ind: number) => {
    setIndex(ind)
  }

  return (
    <div className="App">
      {
        containerList.map( (container, ind) => {
          return (
            <Container card={ind === index} moveCard={()=>{moveCard(ind)}} />
          )
        })
      }
    </div>
  );
}

export default App;
