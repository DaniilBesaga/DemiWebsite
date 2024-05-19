import { useEffect, useState } from 'react';
import '../styles/ButtonsList.css';
import '../styles/Shared.css';


function ButtonsList() {

    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const links = document.querySelectorAll('.buttons-list a')
        links.forEach(link => {
            if (link.getAttribute('href') === window.location.pathname) {
                setActiveLink(link.getAttribute('href')!);
            }
        });
        
    }, [])

    const path = window.location.pathname; 
    const parts = path.split('/');
    const pageNumber = parseInt(parts[parts.length - 1])
    const prevPath = path.replace(pageNumber.toString(), (pageNumber - 1).toString())
    const nextPath = path.replace(pageNumber.toString(), (pageNumber + 1).toString())
    console.log(prevPath)

    return (
        <div className="buttons-list">
            <a href={prevPath}>prev</a>
            <a href="/1" style={{ background: activeLink == '/' ? 'white' : '#f3f3f3' }}>1</a>
            <a href="/2" style={{ background: activeLink == '/2' ? 'white' : '#f3f3f3' }}>2</a>
            <a href="/3" style={{ background: activeLink == '/3' ? 'white' : '#f3f3f3' }}>3</a>
            <a href="/4" style={{ background: activeLink == '/4' ? 'white' : '#f3f3f3' }}>4</a>
            <a href="/5" style={{ background: activeLink == '/5' ? 'white' : '#f3f3f3' }}>5</a>
            <a href="/6" style={{ background: activeLink == '/6' ? 'white' : '#f3f3f3' }}>6</a>
            <a href={nextPath}>next</a>
        </div>
    )
}

export default ButtonsList;
