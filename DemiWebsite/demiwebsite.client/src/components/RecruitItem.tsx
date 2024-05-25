import '../styles/RecruitItem.css';
import '../styles/Shared.css';


function RecruitItem(url) {
    console.log(url)
    return (
        <div className="recruit-item" style={{ backgroundImage:`url(${url.url})` }}>
            <h2>Regular recruitment and internships</h2>
            <p>Regular recruitment is by course.<br/>
                Please review the job description for each course before applying.</p>
            <a href="google.com/forms">Learn more</a>
        </div>
    )
}

export default RecruitItem;