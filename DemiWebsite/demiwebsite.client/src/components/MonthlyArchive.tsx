import { useState } from 'react';
import '../styles/MonthlyArchive.css';
import '../styles/Shared.css';


function MonthlyArchive() {

    const [showList, setShowList] = useState(false);

    return (
        <div className="archive">
            <h3 className="h-red">Monthly archive</h3>
            <div onClick={() => setShowList(!showList)}>
                <span>2024</span>
                <i className="ri-arrow-down-s-line"></i>
            </div>
            <ul className={showList? 'show' : ''}>
                {month.map((index, key) => (
                    key <= currentMonth ? <li key={key}><a>{index} 2024</a></li> : null

                ))}

            </ul>
        </div>
    )
}

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentMonth = new Date().getMonth();

export default MonthlyArchive;
