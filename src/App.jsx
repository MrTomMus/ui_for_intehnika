import classes from './App.module.css';
import Header from './components/Header/Header';


function App() {
  return (
   <>
    <Header/>
    <div className={classes.main}></div>
   </>
  );
}

export default App;
