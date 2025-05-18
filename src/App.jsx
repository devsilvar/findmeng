import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContactSection from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactSection />} />
      </Routes>
    </>
  );
}

export default App;
