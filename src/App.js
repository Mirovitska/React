import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBlock from './components/TopBlock';
import BottomBlock from './components/BottomBlock';
import Header from './components/Header';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Settings from './pages/Settings';


import React, { useState } from 'react';

function App() {
 
  const [mode, setMode] = useState(getInitialMode());
  const [fontSize, setFontSize] = useState(16);

  function getInitialMode() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return isDarkMode ? 'dark' : 'light';
  }
  function increaseFontSize() {
    setFontSize(prevFontSize => prevFontSize + 2);
  }

  function decreaseFontSize() {
    setFontSize(prevFontSize => prevFontSize - 2);
  }

  return (
    function Routes(){
      return(
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/messages" element={<Messages/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
        </Routes>
      )
    },
    <body>
      <main >
        <div >
          <div className={`jumpers app ${mode}`} style={{ fontSize: `${fontSize}px` }}>
            <div class="container" >
              <div className='modes'>
              <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
                {mode === 'light' ? 'Dark' : 'Light'} Mode
              </button>
              <button onClick={increaseFontSize}>+</button>
              <button onClick={decreaseFontSize}>-</button>
              </div>
              <Header />

              <div className="nowrap">

                <TopBlock />

                <BottomBlock />

              </div>

            </div>
          </div>
        </div>
      </main>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>

      <script src="js/bootstrap.min.js"></script>

    </body>


  );
}


export default App;
