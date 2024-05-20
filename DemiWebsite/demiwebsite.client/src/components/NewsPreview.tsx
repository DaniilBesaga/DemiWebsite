import '../styles/NewsPreview.css';
import '../styles/Shared.css';

function NewsPreview() {
    return (
        arr.map((index, key) => (
            <div className="news-preview">
                <a className="news-p-img">
                    <img src="https://profirealt.blob.core.windows.net/commerce/company_logo.png" />
                </a>
                <span className="date">2024.01.01</span>
                <div className="news-p-info">
                    <h3><a>Demi Studio is looking for mid-career production assistant positions in
                        conjunction with the launch of a new project</a></h3>
                    <p>Application period: Monday, May 13, 2024 - Friday, May 31, 2024 (must arrive by June)feqfqefqefqe</p>
                    <a className="a-button">Find out more</a>
                </div>
                
            </div>
           
        ))
    )
}

const arr = [1,2,3,4,5]

export default NewsPreview;
