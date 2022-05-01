import Navigation from './components/Navbar/Navigation'
import News from './components/NewsComponent/news'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Footer from './components/Navbar/Footer';
import apikey from './data/config';
const App = () => {

  const [category, setCategory] = useState("General");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const [loadMore, setloadMore] = useState(15);

  const newsApi = async () =>{
    try{
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`);
        
        setnewsArray(news.data.articles);
        setnewsResults(news.data.totalResults);
    }catch(err){
        console.log(err);
    }
  }
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category, loadMore]);

  return (
    <>
      <Navigation setCategory={setCategory} />
      <News newsArray={newsArray} newsResults={newsResults} loadMore={loadMore} setloadMore={setloadMore}/>
      <Footer/>
    </>
  )
}

export default App;