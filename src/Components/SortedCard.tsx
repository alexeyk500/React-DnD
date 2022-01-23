import React, {useRef} from 'react';
import {useDrag, useDrop} from "react-dnd";
import {CardType} from "../App";

type PropsType = {
  card: CardType,
  moveCard: (dragIndex: number, hoverIndex: number)=>void,
}

const SortedCard:React.FC <PropsType> = ({card, moveCard}) => {

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'SortedCard',
      item: card,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const didDrop = monitor.didDrop()
        if (!didDrop) {
          moveCard(item.id, card.id)
        }
      },
    }),
    [card, moveCard],
  )

  const [, drop] = useDrop(
    () => ({
      accept: 'SortedCard',
      hover({ id: draggedId }: CardType) {
        if (draggedId !== card.id) {
          moveCard(draggedId, card.id)
        }
      },
    }),
    [moveCard],
  );

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={'sortedCard'}
      style={{
        backgroundColor: card.color,
        opacity: isDragging ? 0 : 1
      }}
    >
      {card.id}
    </div>
  );
};

export default SortedCard;