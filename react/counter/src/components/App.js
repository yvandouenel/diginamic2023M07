
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
    // Copy du state
    const countersCopy = [...counters];
    countersCopy.forEach(counter => {
      if (counter.id === counterId) { counter.value --; }
    })
    // Changement du state
    setCounters(countersCopy);
  }
  function handleClickLessAll() {
    console.log(`Dans handleClickLessAll`);
    // Copy du state
    const countersCopy = [...counters];
    countersCopy.forEach(counter => {
      counter.value --;
    })
    // Changement du state
    setCounters(countersCopy);
  }
  function handleClickMore(counterId) {
    console.log(`Dans handleClickMore, id : `, counterId);
    // Copy du state
    const countersCopy = [...counters];
    countersCopy.forEach(counter => {
      if (counter.id === counterId) { counter.value ++; }
    })
    // Changement du state
    setCounters(countersCopy);
  }
  function handleClickMoreAll() {
    console.log(`Dans handleClickMoreAll`);
    // Copy du state
    const countersCopy = [...counters];
    countersCopy.forEach(counter => {
      counter.value ++;
    })
    // Changement du state
    setCounters(countersCopy);
  }
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <button
      onClick={handleClickLessAll}>-</button>
      <button
      onClick={handleClickMoreAll}>+</button>
      {counters.map((counter) => <Counter
        key={counter.id}
        counter={counter}
        onClickLess={handleClickLess} 
        onClickMore={handleClickMore} 
        />)}
      {/* Appel du composant fonction Counter */}
    </div>
  );
}

export default App;
