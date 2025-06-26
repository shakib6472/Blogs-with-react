import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blog';
import Post from './pages/post';
import React from 'react';
import style from './app.module.scss'; 
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='*' element={<div>404 Not Found</div>} />
        <Route path="/blog/:slug" element={<Post />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
