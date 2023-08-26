import React from 'react';
import { useSelector } from 'react-redux';
import ModeChange from '../../components/ModeChange';
import Header from '../../components/Header';
import ContentBody from '../../components/ContentBody';
import Footer from '../../components/Footer';
import './style.css';

function Home() {
  const info = useSelector((state) => state.info);

  return (
    (info &&
      <>
      <div className='home-container'>
        <div className='home-inside'>
          <ModeChange/>
          <Header id="header" info={info}/>
          <ContentBody id="content-body"/>
        </div>
          <Footer id="footer" info={info}/>
      </div>
      </>
    )
  );
}

export default Home;
