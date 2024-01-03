
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <p>date : {props.date}</p>
    </div>
  );
}

export default App;
