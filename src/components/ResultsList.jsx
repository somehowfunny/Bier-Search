import React from 'react';

const ResultsList = ({ results }) => {
    return (
        <div>
            <h2>Beer Discounts</h2>
            <ul>
                {results.map((beer, index) => (
                    <li key={index}>
                        {beer.name} - {beer.discount} off
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResultsList;