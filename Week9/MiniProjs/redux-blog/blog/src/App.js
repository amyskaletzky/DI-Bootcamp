import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Post from './components/Post';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './style.css'


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/:post_id' element={<Post />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
