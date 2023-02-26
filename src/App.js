import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [voidText, setVoidText] = useState('');

  const [explainerTextShown, setExplainerTextShown] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

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

  return (
    <div className="App">
      
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
    </div>
  );
}

export default App;
