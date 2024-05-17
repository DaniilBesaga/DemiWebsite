import '../styles/LatestNews.css';
import '../styles/Shared.css';


function LatestNews() {


    return (
        <div className="latest-news">
            <h2 className="h-red">latest news</h2>
            <div>
                {news_title.map((item, key) => (
                    <a className="news" key={key}>
                        <p>2024.01.01</p>
                        <div>
                            <p style={{ color: 'red', fontSize: 23, fontWeight: 'bold' }}>{item}</p>
                            <p>{news_desc[key]}</p>
                        </div>
                    </a>
                ))}
            </div>
            <div className="proceed-button">
                <span>More</span>
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