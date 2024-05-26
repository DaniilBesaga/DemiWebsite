import '../styles/NewsPreview.css';
import '../styles/Shared.css';
import { NewsItem } from '../interfaces/Interfaces';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function NewsPreview() {

    const [news, setNews] = useState<NewsItem[]>([]);
    console.log(window.location.pathname.split('-')[1])
    useEffect(() => {
        (async () => {
            
            const response = window.location.href.includes('-') ?
                await fetch(`/api/news/month/${window.location.pathname.split('-')[1][1]}`) :
                await fetch('/api/news');
            
            const data = await response.json();
            setNews(data);
        })();
    }, [])

    return (
        <div>
            {news.length > 0 && news.map((item, key) => (
                <div className="news-preview">
                    <div>
                        <Link to={"" + (key + 1)} className="news-p-img">
                            <img src={item.imgUrl} />
                        </Link>
                        <span className="date">{item.postDate?.toString().substring(0, 10)}</span>
                        <div className="news-p-info">
                            <h3><Link to={"" + (key + 1)}>{item.name}</Link></h3>
                            <p>{item.description}</p>
                            <Link to={"" + (key + 1)} className="a-button">Find out more</Link>
                        </div>
                    </div>
                </div>
            ))}
            {news.length == 0 && <p className="empty">Nothing has been found</p>}
        </div>
    )
}

export default NewsPreview;
