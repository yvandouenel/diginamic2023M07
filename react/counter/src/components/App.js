
import './App.css';
import Counter from './Counter';

function App(props) {
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <Counter />{/* Appel du composant fonction Counter */}
    </div>
  );
}

export default App;
