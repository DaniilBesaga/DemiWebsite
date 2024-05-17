import './App.css';
import Header from './components/Header';
import SlideShow from './components/SlideShow';
import 'remixicon/fonts/remixicon.css'
import TrailersGrid from './components/TrailersGrid';
import LatestNews from './components/LatestNews';
import Instagram from './components/Instagram';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <SlideShow />
            <TrailersGrid />
            <LatestNews />
            <Instagram />
            <Footer/>
        </div>
    )
}

export default App;