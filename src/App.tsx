import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import { BlogPage } from './components/BlogPage/BlogPage';
import CartPage from './components/CartPage/CartPage';
import { Footer } from './components/Footer/Footer';
import FullPostPage from './components/FullPostPage/FullPostPage';
import { Header } from './components/Header/Header';
import { HomePage } from './components/HomePage/HomePage';
import Main from './components/Main/Main';
import ShopPage from './components/ShopPage/ShopPage';
import SignInPage from './components/SignInPage/SignInPage';
import SignUpPage from './components/SignUpPage/SignUpPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/blog/post' element={<FullPostPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
