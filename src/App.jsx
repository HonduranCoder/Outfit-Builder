import { useState } from 'react';
import Character from './components/Character/Character.jsx';
import Display from './components/Display/Display.jsx';
import Picker from './components/Picker/Picker.jsx';
import './App.css';

function App() {
  const [face, setFace] = useState('');
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  const [newCatchphrase, setNewCatchphrase] = useState('');
  const [catchphrases, setCatchphrases] = useState([]);

  const handleClick = () => {
    setCatchphrases((prevState) => [...prevState, newCatchphrase]);
  };

  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1>Character Designer</h1>
          <Picker
            face={face}
            onFaceChange={setFace}
            top={top}
            onTopChange={setTop}
            bottom={bottom}
            onBottomChange={setBottom}
            newCatchphrase={newCatchphrase}
            setCatchphrase={setNewCatchphrase}
            handleClick={handleClick}
          />
          <Display catchphrases={catchphrases} />
          <Character face={face} top={top} bottom={bottom} />
        </header>
      </main>
    </div>
  );
}

export default App;
