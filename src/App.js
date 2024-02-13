import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return <>
    <BrowserRouter>
      <NavBar />

      <div className='container mt-2' style={{ marginTop: 40 }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:name" element={<Profile />} />
        </Routes>

      </div>
    </BrowserRouter>
  </>
}

export default App;
