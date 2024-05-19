import '../styles/NewsInfo.css';
import '../styles/Shared.css';


function NewsInfo() {

    return (
        <div className="news-info">
            <span className="news-date">2024.01.01</span>
            <h3>"Vivy -Fluorite Eye's Song- Original Art Book" to be released!!</h3>
            <p>The long-awaited official original artwork collection for the TV anime
                "Vivy -Fluorite Eye's Song-" will be released on Saturday, May 18, 2024 by
                WIT STUDIO, the animation production company!<br/>
                In addition to teaser/key visuals, it is packed with approximately 500
                original character cuts! It also includes a special page focusing on the unique "A.I Special Effects" technique used in this work.
                Let's look back on Vivi's 100-year journey together through the original
                artwork.<br/>
                This is a must-have book for fans who want to fully enjoy "Vivy -Fluorite
                Eye's Song-".</p>
            <img src="https://profirealt.blob.core.windows.net/commerce/news/pic1.jpg" />
            <a href="/">Click here to become an animator</a>
        </div>
    )
}

export default NewsInfo;