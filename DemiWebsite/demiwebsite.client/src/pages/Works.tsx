import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkPreview from '../components/WorkPreview';
import '../styles/WorkPreview.css';

function Works() {
    return (
        <div>
            <Header />
            <div className="container">
                <h2 className="h-red" style={{ fontSize: '2.25em' }}>recruit</h2>
                <div className="works-container">
                    <WorkPreview />
                    <WorkPreview />
                    <WorkPreview />
                    <WorkPreview />
                    <WorkPreview />
                    <WorkPreview/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Works;