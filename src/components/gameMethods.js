import { cards as defaultDeck } from '../../public/deck.json';

export const shuffleDeck = () => {
    const cards = defaultDeck;
    let length = cards.length;
    let x, y;
    
    while (length) {
        //Fisher-Yates Shuffle
        x = Math.floor(Math.random() * length--);
    
        y = cards[length];
        cards[length] = cards[x];
        cards[x] = y;
    }

    return cards;
}

export const playMatch = (playerCard, dealerCard, gamesPlayed) => {
    let verdict;

    if (playerCard.value === dealerCard.value) {
        verdict = 0;
    } else if (playerCard.value > dealerCard.value) {
        verdict = 1;
    } else {
        verdict = 2;
    }

    return {
        id: gamesPlayed++,
        playerCard: playerCard,
        dealerCard: dealerCard,
        verdict: verdict
    };
}