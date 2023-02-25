import './App.css';
import { useState } from 'react';

function App() {
  const [voidText, setVoidText] = useState('');

  const [explainerTextShown, setExplainerTextShown] = useState(false);

  function maybeTrimText(event) {
    let textInput = event.target.value;

    setExplainerTextShown(true);

    if( textInput.length > 40 ) {
      textInput = textInput.slice(1);
    }

    setVoidText(textInput); 
  }

  return (
    <div className="App">
      <div className={`text-container ${voidText || explainerTextShown ? "invisible" : "visible"}`}>
        <h1>The Void</h1>
        <p>Type your thoughts into The Void and your text will disappear as you type.</p>
        <p>No spell check, no save button, no judgement.</p>
      </div>

      <div className="overlay"></div>
      <input autoFocus value={voidText} className="void-input" type="text" onChange={maybeTrimText} />
    </div>
  );
}

export default App;
