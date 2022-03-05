import React, { useState, useEffect } from "react";
import { playMatch, shuffleDeck } from './gameMethods';
import Match from './match';

const AppContainer = () => {
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [deck, setDeck] = useState([]);
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        setDeck(shuffleDeck);
    }, [])

    useEffect(() => {
        if(matches.length === 5) {
            let myString;

            if (player1Score > player2Score) {
                myString = `Player 1 Wins: ${player1Score} to ${player2Score}!`;
            } else if (player1Score === player2Score) {
                myString = `Drawn Match: ${player1Score} to ${player2Score}!`;
            } else {
                myString = `Player 2 Wins: ${player2Score} to ${player1Score}`;;
            }

            alert(myString);
        }
    }, [matches])

    const resetGame = () => {
        //Shuffle new deck
        setDeck([]);
        setTimeout(() => setDeck(shuffleDeck), 50); //Deck cannot reset immediately due to how setState works

        //Clear Matches
        setMatches([]);

        //Clean Scores
        setPlayer1Score(0);
        setPlayer2Score(0);
        setMatchesPlayed(0);
    }

    const addMatch = () => {
        const result = playMatch(deck[0], deck[1], matches.length);
        deck.splice(0, 2); //Remove top X cards from deck, X = number of players
        
        switch (result.verdict) {
            case 1:
                setPlayer1Score(player1Score + 1);
                break;
            case 2:
                setPlayer2Score(player2Score + 1);
                break;
            default:
                break;
        }

        setMatches([...matches, result]);
    }

    return (
        <div>
            {matches.length < 5 
                ? <button onClick={() => addMatch()}>Play Game</button> 
                : <button onClick={() => resetGame()}>Reset Match</button>
            }
            {matches.map(match => {
                return (
                    <Match key={match.id} match={match}/>
                )
            })}
        </div>
    );
}

export default AppContainer