import '../styles/NewsPreview.css';
import '../styles/Shared.css';
import { NewsItem } from '../interfaces/Interfaces';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function NewsPreview() {

    const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('/api/news');
            const data = await response.json();
            setNews(data);
        })();
    }, [])

    return (
        news.map((item, key) => (
            <div className="news-preview">
                <Link to={""+(key+1)} className="news-p-img">
                    <img src={item.imgUrl} />
                </Link>
                <span className="date">{item.postDate?.toString().substring(0, 10)}</span>
                <div className="news-p-info">
                    <h3><Link to={"" + (key + 1)}>{item.name}</Link></h3>
                    <p>{item.description}</p>
                    <Link to={""+(key + 1)} className="a-button">Find out more</Link>
                </div>
                
            </div>
           
        ))
    )
}

export default NewsPreview;
