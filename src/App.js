import './App.css';
import { useState } from 'react';

function App() {
  const [voidText, setVoidText] = useState('');

  function maybeTrimText(event) {
    let textInput = event.target.value;

    if( textInput.length > 40 ) {
      textInput = textInput.slice(1);
    }

    setVoidText(textInput); 
  }

  return (
    <div className="App">
      <div className="overlay"></div>
      <input autoFocus value={voidText} className="void-input" type="text" onChange={maybeTrimText} />
    </div>
  );
}

export default App;
