
import Header from './components/Header';
import Footer from './components/Footer';
import TopRated from './components/TopRated/TopRated';
import Home from './components/Home';
import DetailMovie from './components/Movie/DetailMovie';
import DetailTvShow from './components/Movie/DetailTvShow';
import Discover from './components/Discover/Discover';
import SearchList from './components/SearchList';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className="wrapper">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/discover' element={<Discover />} />
            <Route path='/toprated' element={<TopRated />} />
            <Route path='/movie/:id' element={<DetailMovie />} />
            <Route path='/tv/:id' element={<DetailTvShow />} />
            <Route path='/search/:type/:item' element={<SearchList />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
