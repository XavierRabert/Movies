import { useEffect, useState } from 'react';
import Header from './components/Header';
import Options from './components/Options';
import Trending from './components/Trending';
import headers from './common/Headers'

function App() {

  const [trending, setTrending] = useState('')
  const [trendingSearch, setTrendingSearch] = useState('movie')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/trending/${trendingSearch}/day`, headers)
      const data = await response.json()
      setTrending(data)
    }

    fetchData()
    console.log(trendingSearch);
  }, [trendingSearch])

  const trendingToSearch = (search) => {
    setTrendingSearch(search);
  }


  return (
    <div className="wrapper">
      <div className="aside">
        <Options />
      </div>
      <div className="content">
        <Header optionOnClick={trendingToSearch} trendingSearch={trendingSearch} />
        {trending === '' ? '' : <Trending moviesTrending={trending} trendingSearch={trendingSearch} />}
      </div>
    </div>
  );
}

export default App;
