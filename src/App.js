import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={'./img/logo192.png'} className="App-logo" alt="logo" />
        <ItemListContainer greeting={'Bienvenidos'} />
      </header>
    </div>
  );
}

export default App;
