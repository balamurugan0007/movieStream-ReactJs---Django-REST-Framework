import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import Home from './pages/home/Home';
import Movie from './pages/movies/Movie';
import Anime from './pages/anime/Anime';
import Series from './pages/series/Series';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <Router >
    
  <div className='flex justify-center'>
        <div className='w-1/12 bg-black-950 h-screen px-2'>
                    <Sidebar/>
                </div>   
            <div className='w-11/12'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movie' element={<Movie/>}/>
                <Route path='/anime' element={<Anime/>}/>
                <Route path='/series' element={<Series/>}/>
            </Routes>
            </div>
  </div>
      
    </Router>
  );
}

export default App;
