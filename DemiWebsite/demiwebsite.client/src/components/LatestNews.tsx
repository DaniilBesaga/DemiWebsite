import { Link } from 'react-router-dom';
import '../styles/LatestNews.css';
import '../styles/Shared.css';


function LatestNews() {


    return (
        <div className="latest-news">
            <h2 className="h-red">latest news</h2>
            <div>
                {news_title.map((item, key) => (
                    <Link to={"news/" + key} className="news" key={key}>
                        <p>2024.01.01</p>
                        <div>
                            <p style={{ color: 'red', fontSize: 23, fontWeight: 'bold' }}>{item}</p>
                            <p>{news_desc[key]}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="proceed-button">
                <Link to="/news">More</Link>
                <i className="ri-arrow-right-wide-line"></i>
            </div>
        </div>
    )
}


const news_title = ['fqefqefqefeqffqe', 'fqfadfadfadfadfadffad', 'fadfadfadffadfadfdaf',
'fdfdfsgsfdggfsgfsg', 'gfsgfsgsgfgsgfgsfgsgffgsf']

const news_desc = ['fqefqefdafaaaaaaaeqffqe', 'fgfgfhjjkhjhhjhj', 'reqreqreqreqrrrqreq',
    'cxcadvdfadvvfbfbfbf', 'rtrytyutertyyruuoiuytr']

export default LatestNews;