import React, {useState} from 'react';
import './App.css';
import Container from "./Components/Container";
import SortedCard from "./Components/SortedCard";

export type CardType = {
  id: number,
  color: string,
};

const cardsList: CardType[] = [
  {id: 0, color: 'red'},
  {id: 1, color: 'orange'},
  {id: 2, color: 'yellow'},
  {id: 3, color: 'green'},
  {id: 4, color: 'lightblue'},
  {id: 5, color: 'blue'},
  {id: 6, color: 'darkblue'},
];

function App() {

  const [cardList, setCardList] = useState(cardsList)

  const moveCard = (dragId: number, hoverId: number) => {
    const dragCard = cardList.find(card => card.id === dragId);
    const indexDragCard = cardList.indexOf(dragCard!)
    const hoverCard = cardList.find(card => card.id === hoverId);
    const indexHoverCard = cardList.indexOf(hoverCard!);
    const newCardList = [...cardList];
    const hoverItem = newCardList[indexHoverCard];
    newCardList[indexHoverCard] = newCardList[indexDragCard];
    newCardList[indexDragCard] = hoverItem;
    setCardList(newCardList);
  }

  return (
    <div className="App">
      {cardList.map((card) => {
        return (
          <SortedCard
            key={card.id}
            card={card}
            moveCard={moveCard}
          />
        )
      })
      }
    </div>
  );
}

export default App;
