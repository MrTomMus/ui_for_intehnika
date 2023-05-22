import { Route, Routes } from 'react-router-dom';
import classes from './App.module.css';
import Header from './components/Header/Header';
import EngWorks from './components/EngWorks/EngWorks';
import Basket from './components/Basket/Basket';
import { useState } from "react";



function App() {

  let [state, setState] = useState([]);

    
    
  
    console.log(state)

  return (
   <>
    <Header/>
    <div className={classes.main}>
      <Routes>
        <Route path='/' element={<EngWorks/>  }/>
        <Route path='/basket' element={!state ? 'Loading' : <Basket state={state} setState={setState}/>}/>
      </Routes>
    </div>
   </>
  );
}

export default App;
