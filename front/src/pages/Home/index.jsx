import React from 'react';
import { useSelector } from 'react-redux';
import ModeChange from '../../components/ModeChange';
import Header from '../../components/Header';
import ContentBody from '../../components/ContentBody';
import Footer from '../../components/Footer';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import './style.css';

function Home() {
  const info = useSelector((state) => state.info);

  return (
    (info &&
      <>
      <div className='home-container'>
        <ScrollToTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}/>
        <ModeChange/>
        <div className='home-inside'>
          <Header id="header" info={info}/>
          <ContentBody id="content-body" info={info}/>
        </div>
          <Footer id="footer" info={info}/>
      </div>
      </>
    )
  );
}

export default Home;
