import './App.css';
import { useState, useEffect, useCallback } from 'react';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

function App() {
  const [voidText, setVoidText] = useState('');

  const [explainerTextShown, setExplainerTextShown] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [helpModal, setHelpModal] = useState(false);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const showHelpModal = () =>{
    setHelpModal(true);
  }

  const hideHelpModal = () =>{
     setHelpModal(false);
  }

  function maybeTrimText(event) {
    let textInput = event.target.value;

    setExplainerTextShown(true);

    if( textInput.length > 45 ) {
      textInput = textInput.slice(1);
    }

    setVoidText(textInput); 
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleKeyPress = useCallback((event) => {
    if( 'Escape' === event.key ) {
      setHelpModal(false);
    }

    if( 'Enter' === event.key ) {
      setVoidText(''); 
    }
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="App">

      <div className="help-toggle" onClick={showHelpModal}>
        <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1024 1376v-192q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23-9t9-23zm256-672q0-88-55.5-163t-138.5-116-170-41q-243 0-371 213-15 24 8 42l132 100q7 6 19 6 16 0 25-12 53-68 86-92 34-24 86-24 48 0 85.5 26t37.5 59q0 38-20 61t-68 45q-63 28-115.5 86.5t-52.5 125.5v36q0 14 9 23t23 9h192q14 0 23-9t9-23q0-19 21.5-49.5t54.5-49.5q32-18 49-28.5t46-35 44.5-48 28-60.5 12.5-81zm384 192q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>
      </div>
      
      <div className="mode-toggle" onClick={toggleTheme}>
        <svg viewBox="0 0 100 100">
          <g>
            <path d="m49.958 28.688c-9.278 0-16.804 7.525-16.804 16.81 0 3.056 0.857 5.898 2.24 8.391 4.126 7.438 5.221 11.613 5.896 15.654 0.564 3.387 1.344 4.174 3.902 4.174h4.766 4.767c2.563 0 3.344-0.787 3.907-4.174 0.677-4.043 1.771-8.219 5.896-15.654 1.388-2.492 2.24-5.334 2.24-8.391 3e-3 -9.286-7.523-16.81-16.81-16.81z"/>
            <path d="m55.971 74.934h-12.013c-0.5 0-0.903 0.402-0.903 0.9v0.602c0 0.496 0.403 0.9 0.903 0.9h12.013c0.493 0 0.897-0.404 0.897-0.9v-0.602c2e-3 -0.498-0.404-0.9-0.897-0.9z"/>
            <path d="m55.971 78.537h-12.013c-0.5 0-0.903 0.4-0.903 0.9v0.602c0 0.496 0.403 0.898 0.903 0.898h12.013c0.493 0 0.897-0.402 0.897-0.898v-0.602c2e-3 -0.499-0.404-0.9-0.897-0.9z"/>
            <path d="m55.971 82.141h-12.013c-0.5 0-0.903 0.402-0.903 0.9v0.602c0 0.498 0.403 0.9 0.903 0.9h12.013c0.493 0 0.897-0.402 0.897-0.9v-0.602c2e-3 -0.498-0.404-0.9-0.897-0.9z"/>
            <path d="m45.458 85.744h9.013c0 1.801-2.406 3.002-4.513 3.002-2.097 0-4.5-1.201-4.5-3.002z"/>
            <path className="light" d="m69.264 16.854c1.532-2.683-2.605-5.092-4.15-2.414-0.809 1.399-6.662 11.541-6.662 11.541l4.162 2.402s5.199-9.017 6.646-11.518c3e-3 -1e-3 3e-3 -3e-3 3e-3 -3e-3l1e-3 -8e-3z"/>
            <path className="light" d="m78.633 26.247-3e-3 3e-3 -8e-3 1e-3c-2.112 1.221-11.166 6.449-11.166 6.449l2.397 4.16s9.076-5.239 11.188-6.458c2.686-1.548 0.275-5.689-2.408-4.155z"/>
            <path className="light" d="m52.452 11.071v12.812h-4.806v-12.812c0-3.098 4.806-3.098 4.806 0z"/>
            <path className="light" d="m30.737 16.854c-1.532-2.683 2.606-5.092 4.152-2.414 0.808 1.399 6.661 11.541 6.661 11.541l-4.158 2.402s-5.208-9.017-6.652-11.518v-3e-3l-3e-3 -8e-3z"/>
            <path className="light" d="m21.371 26.247v3e-3l7e-3 1e-3c2.116 1.221 11.167 6.449 11.167 6.449l-2.402 4.16s-9.076-5.239-11.187-6.458c-2.683-1.548-0.273-5.689 2.415-4.155z"/>
          </g>
        </svg>
      </div>

      <div className="app-container">
        <div className={`text-container ${voidText || explainerTextShown ? "invisible" : "visible"}`}>
          <h1>The Void</h1>
          <p>Type your thoughts into The Void and your text will disappear as you type.</p>
          <p>No spell check, no save button, no judgement.</p>
        </div>

        <div className="overlay"></div>
        <input autoFocus value={voidText} className="void-input" type="text" onChange={maybeTrimText} />
      </div>

      <Rodal visible={helpModal} onClose={hideHelpModal} customStyles={{ height: 'auto', minHeight: '300px', bottom: 'auto', top: 'auto', top: '50%', transform: 'translateY(-50%)', paddingTop: '50px' }}>
        <div className="text-container">
          <p>This is The Void.</p> 
          <p>A place for your thoughts or whatever else you need to let out.</p>
          <p>Anything you type here disappears as you type. It's not saved anywhere and you can't go back and judge yourself for anything you've written.</p>
          <p>Your text will start to disappear automatically as you continue typing or you can use the Enter key to clear everything at once.</p>
          <p>I hope The Void can be as helpful to you as it has been to me.</p>
        </div>
      </Rodal>
    </div>
  );
}

export default App;
