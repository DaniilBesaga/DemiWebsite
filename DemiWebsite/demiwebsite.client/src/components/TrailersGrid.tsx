import { useState } from 'react';
import '../styles/TrailersGrid.css';


function TrailersGrid() {

    
    return (
        <div className="trailers-container">
            <div className="grid-6">
                {names.map((item, key) => (
                    <a key={key}>
                        <img src={trailers[0]} alt={item} />
                        <p>{item}</p>
                    </a>
                ))}
            </div>
            <div className="grid-3">
                {tnames.map((item, key) => (
                    <a key={key}>
                        <img src={trailers[0]} alt={item} />
                        <p>{item}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

const trailers = ['https://profirealt.blob.core.windows.net/commerce/anime1.png']
const names = ['Spy Family', 'One Piece', 'Dragon Ball', 'Tokyo Revengers', 'Your name', 'Pivasik']

const tnames = ['One Piece: Red', 'Code Geass: Alian', 'Pivasik: New Adventure']

export default TrailersGrid;