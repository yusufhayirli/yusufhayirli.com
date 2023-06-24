import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import ModeChange from '../../components/ModeChange';
import HeaderInfo from '../../components/HeaderInfo';
import Footer from '../../components/Footer';
import './style.css';
// import { findAll } from '../../db';

function Home() {
  const info = useSelector((state) => state.info);

  // const [data, setData] = useState([]);

  useEffect(() => {
    // findAll().then(result => {
    //   setData(result);
    // });
  }, []);

  return (
    (info &&
      <>
        <ModeChange/>
        <HeaderInfo info={info}/>
        <Footer info={info}/>
      </>
    )
  );
}

export default Home;