import '../styles/WorkPreview.css';
import '../styles/Shared.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function WorkPreview() {

    const [showList, setShowList] = useState(false);

    return (
        <Link to="/work/1" className="work-preview" onMouseEnter={() => setShowList(true)} onMouseLeave={() => setShowList(false)}>
            <img src="https://profirealt.blob.core.windows.net/commerce/works/work1.png" />
            <div className={showList ? 'show-title' : ''}>
                This is what happened
            </div>
            <h3>This is what happened</h3>
            <span>2024.01</span>
            
        </Link>
    )
}

export default WorkPreview;