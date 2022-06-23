import { useEffect, useState } from 'react';
import './App.css';
import { Generator } from './components/generator/Generator';
import { Header } from './components/header/Header';

function App() {
  const [colorChange, setColorChange] = useState(2)
  const random = Math.round(Math.random()+1)
  
  useEffect(() => {
    setColorChange(random)
  },[])

  return (
    <div className="App">
      <div className='header-div'>
          <Header colorChange={ colorChange } setColorChange={ setColorChange }/>
      </div>
          <Generator colorChange={ colorChange }/>
    </div>
  );
}

export default App;
