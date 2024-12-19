import logo from './logo.svg';
import './App.css';
import Link from './Link';

function App() {
  return (
    <div className="App">     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
        <div style={{marginTop: '20px', backgroundColor: 'white', position: 'fixed', bottom: '0', width: '150px', height: '50px'}}>
        <Link page="http://www.facebook.com">
          <a href="http://www.facebook.com">FaceBook</a>
        </Link>
        </div>
    </div>
  );
}

export default App;
