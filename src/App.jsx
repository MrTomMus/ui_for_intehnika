import { Route, Routes } from 'react-router-dom';
import classes from './App.module.css';
import Header from './components/Header/Header';
import EngWorks from './components/EngWorks/EngWorks';
import Basket from './components/Basket/Basket';


function App() {
  return (
   <>
    <Header/>
    <div className={classes.main}>
      <Routes>
        <Route path='/' element={<EngWorks/>  }/>
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
        
    </div>
   </>
  );
}

export default App;
