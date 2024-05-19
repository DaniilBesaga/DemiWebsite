import Header from '../components/Header';
import Footer from '../components/Footer';
import RecruitItem from '../components/RecruitItem';
import '../styles/Recruit.css';

function Recruit() {
    return (
        <div>
            <Header />
            <div className="container">
                <h2 className="h-red" style={{ fontSize: '2.25em' }}>recruit</h2>
                <div className="recruit-container">
                    <RecruitItem />
                    <RecruitItem />
                    <RecruitItem />
                    <RecruitItem />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Recruit;