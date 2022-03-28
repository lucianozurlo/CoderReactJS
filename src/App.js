import './App.css';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={'./img/logo192.png'} className="App-logo" alt="logo" />
        <p>
          Bienvenidos
        </p>
      </header>
    </div>
  );
}

export default App;
