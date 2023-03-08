// import { useEffect, useState } from 'react';
// import Header from './components/Header';
import Options from './components/Options';
// import Trending from './components/Trending';
// import headers from './common/Headers'
import Footer from './components/Footer';
import TopRated from './components/TopRated/TopRated';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  // const [trending, setTrending] = useState('')
  // const [trendingSearch, setTrendingSearch] = useState('movie')

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`https://api.themoviedb.org/3/trending/${trendingSearch}/day`, headers)
  //     const data = await response.json()
  //     setTrending(data)
  //   }

  //   fetchData()
  //   console.log(trendingSearch);
  // }, [trendingSearch])

  // const trendingToSearch = (search) => {
  //   setTrendingSearch(search);
  // }


  return (
    <div className="wrapper">
      <Router>
        <div className="aside">
          <Options />
        </div>
        <div className="content">

          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/discover' element={<TopRated />} />
            <Route path='/toprated' element={<TopRated />} />
          </Routes>

        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
