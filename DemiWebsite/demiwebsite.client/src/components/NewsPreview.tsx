import '../styles/NewsPreview.css';
import '../styles/Shared.css';
import { NewsItem } from '../interfaces/Interfaces';
import { useEffect, useState } from 'react';

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
                <a className="news-p-img">
                    <img src={item.imgUrl} />
                </a>
                <span className="date">{item.postDate?.toString()}</span>
                <div className="news-p-info">
                    <h3><a>{item.name}</a></h3>
                    <p>{item.description}</p>
                    <a className="a-button">Find out more</a>
                </div>
                
            </div>
           
        ))
    )
}

export default NewsPreview;
