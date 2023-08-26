import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';

function App() {
  //HOLD THIS as example --------------------------------------------
  // const [contentReady, setContentReady] = useState(false);
  // const [info, setInfo] = useState({});

  // useEffect(() => {
  //   fetch('./yh.json').then(
  //     function(u){ return u.json();}
  //   ).then(
  //     function(json){
  //       setInfo(json);
  //     }
  //   )
  //   setTimeout(() => {
  //     setContentReady(true);
  //   }, 100);
  // },[]);
  // ----------------------------------------------------------------

  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
