import React from "react";
import Card from './card';

const Match = ({ match }) => {
    const outputResult = () => {
        let myString;
        switch (match.verdict) {
            case 0:
                myString = "Draw!";
                break;
            case 1:
                myString = "Player 1 Wins!";
                break;
            case 2:
                myString = "Player 2 Wins!";
                break;
            default:
                break;
        }

        return myString;
    }

    return (
        <div className="match">
            <Card card={match.playerCard}/>
            <Card card={match.dealerCard}/>
            <span>{outputResult()}</span>
        </div>
    );
}

export default Match