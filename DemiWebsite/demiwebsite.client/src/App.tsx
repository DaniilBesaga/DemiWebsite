import './App.css';
import Header from './components/Header';
import SlideShow from './components/SlideShow';
import 'remixicon/fonts/remixicon.css'
import TrailersGrid from './components/TrailersGrid';

function App() {
    return (
        <div>
            <Header />
            <SlideShow />
            <TrailersGrid/>
        </div>
    )
}

export default App;