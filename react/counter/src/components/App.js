
import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App(props) {
  // Un seul state doit gérer 5 compteurs
  const [counters, setCounters] = useState([
    { value: 0, id: 244 },
    { value: 1, id: 278 },
    { value: 2, id: 387 },
    { value: 3, id: 399 },
    { value: 4, id: 457 }
  ]);

  function handleClickLess(counterId) {
    console.log(`Dans handleClickLess, id : `, counterId);
  }
  return (
    <div className="App">
      <h1>{props.title}</h1>
      {counters.map((counter) => <Counter
        key={counter.id}
        counter={counter}
        onClickLess={handleClickLess} />)}
      {/* Appel du composant fonction Counter */}
    </div>
  );
}

export default App;
