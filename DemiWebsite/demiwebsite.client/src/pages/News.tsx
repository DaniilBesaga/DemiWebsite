import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsPreview from '../components/NewsPreview';
import MonthlyArchive from '../components/MonthlyArchive';
import ButtonsList from '../components/ButtonsList';

function News() {
    return (
        <div>
            <Header />
            <div className="container">
                <h2 className="h-red">news list</h2>
                <NewsPreview />
                < MonthlyArchive />
            </div>
            <ButtonsList/>
            <Footer />
        </div>
    )
}

export default News;