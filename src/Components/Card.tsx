import React from 'react';
import {useDrag} from "react-dnd";

const Card = () => {
  const [{isDragging}, dragRef] = useDrag({
    type: 'card',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  return (
    <div
      ref={dragRef}
      className={'card'}
      style={{
        backgroundColor: isDragging ?'lightblue' :'blue'
      }}
    >
      Card
    </div>
  );
};

export default Card;