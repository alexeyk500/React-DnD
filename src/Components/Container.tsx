import React from 'react';
import {useDrop} from "react-dnd";
import Card from "./Card";

type PropsType ={
  card : any,
  moveCard: any,
}

const Container:React.FC <PropsType> = ({card, moveCard}) => {
  const [{isOver}, dropRef] = useDrop({
    accept: 'card',
    drop: () => moveCard(),
    collect: (monitor) => ({
      isOver: !monitor.isOver()
    })
  })
  return (
    <div
    ref={dropRef}
    className={'container'}
    style={{
      backgroundColor: isOver ?'green' :'lightgreen'
    }}
    >
      {card && <Card />}
    </div>
  );
};

export default Container;