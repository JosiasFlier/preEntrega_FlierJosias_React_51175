import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from "bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting="TODO CAMISETAS"/>
        <ItemListContainer phrase="Todo lo que buscas - En un solo lugar"/>
      </header>
    </div>
  );
}
export default App;
