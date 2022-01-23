import React, {useRef} from 'react';
import {useDrag, useDrop} from "react-dnd";
import {CardType} from "../App";

type PropsType = {
  card: CardType,
  moveCard: (dragCard: CardType, hoverCard: CardType) => void,
}

const SortedCard: React.FC<PropsType> = ({card, moveCard}) => {

  const [{isDragging}, drag] = useDrag(
    () => ({
      type: 'SortedCard',
      item: card,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (dragCard, monitor) => {
        const didDrop = monitor.didDrop()
        if (!didDrop) {
          moveCard(dragCard, card)
        }
      },
    }),
    [card, moveCard],
  )

  const [, drop] = useDrop(
    () => ({
      accept: 'SortedCard',
      hover(hoverCard: CardType) {
        if (hoverCard !== card) {
          moveCard(hoverCard, card)
        }
      },
    }),
    [moveCard],
  );

  const ref = useRef(null);
  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={'sortedCard'}
      style={{
        backgroundColor: card.color,
        opacity: isDragging ? 0 : 1
      }}
    >
      <div className={'numCard'}>
        {card.id}
      </div>
    </div>

  );
};


export default SortedCard;