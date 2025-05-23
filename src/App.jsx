import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { ScrollToTop } from './components/scrollToTop'
import Home from './pages/Home'
import Blog from './pages/blog/Blog'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Loader from './components/loader'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

    // Simulate loading time (you can remove this in production)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  document.addEventListener('contextmenu', (e) => e.preventDefault());

  function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
  }

  document.onkeydown = (e) => {
    if (
      event.keyCode === 123 ||
      ctrlShiftKey(e, 'I') ||
      ctrlShiftKey(e, 'J') ||
      ctrlShiftKey(e, 'C') ||
      (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    )
      return false;
  };

  return (
    <>
      <div className='bg-gray-900'>
        {loading ? (
          <Loader />
        ) : (
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <div className='md:m-8 m-4 lg:mx-28 md:mx-16 text-gray-200'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/articles' element={<Blog />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        )}
      </div>
    </>
  )
}

export default App