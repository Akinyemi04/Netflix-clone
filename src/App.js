import './App.css';
import Banner from './Banner';
import Develop from './Develop';
import requests from './request';
import Header from './Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Develop category='NETFLIX ORIGINAL' url={requests.fetchNetflixOriginal} islarge/>
      <Develop category='Trending Now' url={requests.fetchTrending}/>
      <Develop category='Top Rated' url={requests.fetchTopRated}/>
      <Develop category='Action Movies' url={requests.fetchActionMovie}/>
      <Develop category='Comedy Movies' url={requests.fetchComedyMovies}/>
      <Develop category='Horror Movies' url={requests.fetchHorrorMovies}/>
      <Develop category='Documentaries' url={requests.fetchDomentaries}/>
    </div>
  );
}

export default App;
