import { Component } from 'react';
import Card from './Card'


class Area extends Component {
  state = {
      cards: [
        { id: 14, pairId: 7, isOpen: false},
        { id: 3, pairId: 2, isOpen: false},
        { id: 1, pairId: 1, isOpen: false},
        { id: 11, pairId: 6, isOpen: false},
        { id: 7, pairId: 4, isOpen: false},
        { id: 12, pairId: 6, isOpen: false},
        { id: 4, pairId: 2, isOpen: false},
        { id: 13, pairId: 7, isOpen: false},
        { id: 8, pairId: 4, isOpen: false},
        { id: 9, pairId: 5, isOpen: false},
        { id: 10, pairId: 5, isOpen: false},
        { id: 5, pairId: 3, isOpen: false},
        { id: 15, pairId: 8, isOpen: false},
        { id: 2, pairId: 1, isOpen: false},
        { id: 16, pairId: 8, isOpen: false},
        { id: 6, pairId: 3, isOpen: false},
      ],
      startCard: {},
      openedCards: []
  };

  componentDidMount() {
    let cards = [ ...this.state.cards ];
    cards = this.shuffle(cards)
    this.setState({cards})
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  openCard = (index) => {
    let cards = [ ...this.state.cards ];
    let openedCards = []
    if (this.state.openedCards.length === 1) {
      openedCards = [ ...this.state.openedCards ]
      if (cards[index].pairId === openedCards[0].pairId) {
        alert("PAIR FOUND")
        setTimeout(() => {
          cards = cards.filter((card) => {return card.pairId !== cards[index].pairId})
          this.closeCards()
        }, 1000)
      } else {
        console.log("CARDS NOT MATCH")
        setTimeout(() => {
          this.closeCards()
        }, 1000)
      }
    }
    const startCard = {...cards[index]};
    cards[index].isOpen = true
    openedCards.push(cards[index])
    this.setState({ cards , openedCards , startCard }); 
  }


  showCard = (card) => {
    console.log(`showCard`, card)
    this.openCard(card.index)
  }

  closeCards = () => {
    const cards = [ ...this.state.cards ];
    cards.forEach((card) => {
      if (card.isOpen) card.isOpen = false
    })

    this.setState({cards, openedCards: {}})
  }


  render() {
    return (
      <div className="Area">
        {this.state.cards.map((card, i) => (
          <Card
            card={card}
            index={i}
            key={card.id}
            showCard={this.showCard}
          />
        ))}
      </div>
    );
  }
}
  
export default Area;