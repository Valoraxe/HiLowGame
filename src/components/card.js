import React from "react";

const Card = ({ card }) => {

    return (
        <div className="card">
            {card.suit_number} {card.suit}
        </div>
    );
}

export default Card