import '../styles/TrailersGrid.css';
import { IWorkItemPreview } from '../interfaces/Interfaces';
import { useEffect, useState } from 'react';


function TrailersGrid() {

    const [workPreview, setWorkPreview] = useState<IWorkItemPreview[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('/api/work/preview');
            const data = await response.json();
            setWorkPreview(data);
        })();
    }, [])

    
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
                {workPreview.map((item, key) => (
                    <a key={key}>
                        <img src={item.imgUrl}/>
                        <p>{item.name}</p>
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