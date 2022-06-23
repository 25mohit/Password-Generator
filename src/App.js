import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Generator } from './components/generator/Generator';
import { Header } from './components/header/Header';
import { Modal } from './components/modal/Modal';

function App() {
  const [colorChange, setColorChange] = useState(2)
  const [showModal, setShowModal] = useState(false)
  const random = Math.round(Math.random()+1)

  useEffect(() => {
    setColorChange(random)
  },[])

  return (
    <div className="App">
          <Header colorChange={ colorChange } setColorChange={ setColorChange }/>
          <Generator colorChange={ colorChange }/>
          <Footer setShowModal={setShowModal}/>
          {showModal && <Modal setShowModal={ setShowModal } colorChange={ colorChange }/>}
    </div>
  );
}

export default App;
