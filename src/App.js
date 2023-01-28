import "./App.css";
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MobilePattern from './images/pattern-divider-mobile.svg'
import DesktopPattern from './images/pattern-divider-desktop.svg'
import dice from './images/icon-dice.svg'
function App() {
  const [quote, setQuote] = useState('');


  useEffect(() => {
    HandleClick()
  },[])
  
const HandleClick =()=> {
    fetch('https://api.adviceslip.com/advice')
  .then(response => {
    if(response.ok){
      return(
        response.json()
      )
    }else{
      throw new Error(response.statusText)
    }
  })
  .then(data => {
    setQuote(data.slip)
  })  
}

  return (
    <main>
      <div className="card">
        <h1>{`Advice #${quote.id}`}</h1>
        <div className="text">{quote.advice}</div>
        <picture>
          <source media="(min-width:600px)" src={DesktopPattern} />
          <img src={MobilePattern} alt="player" />
        </picture>
        <motion.div className="dice" onClick={HandleClick} 
        whileTap={{rotate: 180}}
        >
          <motion.img src={dice} alt="dice"
          />
        </motion.div>
      </div>
      <div className="credits">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">frontEnd mentor</a>. Coded by <a href="https://github.com/newton-w" target="_blank" rel="noreferrer">Newton_W</a></div>
    </main>
  );
}

export default App;
