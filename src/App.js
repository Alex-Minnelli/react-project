import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Alex's Testing Stuff</h1>
        <p>React is so Cool!</p>
        <p>Another Paragraph Element</p>
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
