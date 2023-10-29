import NavBar from './components/NavBar';
import Home from './components/Home';
import Favourites from './components/Favourites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './style.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Home />
        <Favourites />
      </div>
    </BrowserRouter>
  );
}

export default App;
