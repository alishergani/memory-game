import React from 'react'

function Card(props) {
  return (
    <div 
      className="Card" 
      onClick={() => props.showCard({...props.card, index: props.index})}
    >
      <div className={props.card.isOpen ? 'Card__inner show': 'Card__inner'}>
        <div className="card-face front">FRONT</div>
        <div className="card-face back">{props.card.pairId}</div>
      </div>
    </div>
  );
}

export default Card;