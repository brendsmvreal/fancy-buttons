// import logo from './logo.svg';
import './App.css';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';
import { useState } from "react";

function App() {
  const [light, setLight] = useState("on");
  const dark = (light === 'off') ? 'dark' : '';
  const switchLight = () => {
    if(light === "on") {
      setLight("off")
    } else {
      setLight("on")
    }
  }


  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} switchLight={switchLight} />
        <TextRepeaterButton />
      </section>

    </div>
  );
}

export default App;