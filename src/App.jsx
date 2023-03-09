
import Options from './components/Options';
import Footer from './components/Footer';
import TopRated from './components/TopRated/TopRated';
import Home from './components/Home';
import DetailMovie from './components/Movie/DetailMovie';
import DetailTvShow from './components/Movie/DetailTvShow';
import Discover from './components/Discover/Discover';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className="wrapper">
      <Router>
        <div className="aside">
          <Options />
        </div>
        <div className="content">

          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/discover' element={<Discover />} />
            <Route path='/toprated' element={<TopRated />} />
            <Route path='/movie/:id' element={<><SearchBar /><DetailMovie /></>} />
            <Route path='/tv/:id' element={<><SearchBar /><DetailTvShow /></>} />
          </Routes>

        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
