import './App.css';
import Header from './components/Header';
import SlideShow from './components/SlideShow';
import 'remixicon/fonts/remixicon.css'
import TrailersGrid from './components/TrailersGrid';
import LatestNews from './components/LatestNews';

function App() {
    return (
        <div>
            <Header />
            <SlideShow />
            <TrailersGrid />
            <LatestNews/>
        </div>
    )
}

export default App;