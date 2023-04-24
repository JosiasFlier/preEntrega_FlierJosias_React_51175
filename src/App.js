import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from "bootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/cartContext';
import CartContainer from './components/CartContainer/CartContainer';



function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <div className="App">
            <div className="App-body">
              <NavBar/>
              <Routes>
                <Route path="/" element={<ItemListContainer />}/>
                <Route path="/category/:categoryid" element={<ItemListContainer />}/>
                <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<CartContainer />} />

                {/* Agrega aquí otras rutas si es necesario */}
                <Route path="*" element={<h1>Error 404 : Page Not Found</h1>} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
