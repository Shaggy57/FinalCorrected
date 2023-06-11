import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import FavoriteBands from './FavoriteBands';
import FavoriteAlbums from './FavoriteAlbums'
import Home from './Home'

function App() {
  return (
    <>
      <Navbar />
      <div classname='container'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/FavoriteBands" element={<FavoriteBands />}></Route>
          <Route path="/FavoriteAlbums" element={<FavoriteAlbums />}></Route>
        </Routes>
    </div>
    </>
  );
}

export default App;
