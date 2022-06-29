import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar/> 
      
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Practicando Con React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Grupo8
        </a>
      </header>

      <div>Footer</div>

    </div>
    
    </>
    
  );
 }

export default App;
