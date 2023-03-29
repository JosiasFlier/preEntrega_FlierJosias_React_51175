import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import "./itemListContainer.css"

// Traigo los productos de la base de datos (Array)

import productsData from './../../data/products';

function getItems () {
  const promesa = new Promise ((resolve) =>{
    setTimeout(() => {
      resolve(productsData);
    }, 1500);
  });

  return promesa;
}


// Traigo items por categoria

function getItemsByCategory (categoryURL) {
  const promesa = new Promise ((resolve) =>{
    setTimeout(() => {
      const filter = productsData.filter(item => item.category === categoryURL)
      resolve(filter);
    }, 1000);
  });

  return promesa;
}


function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  const {categoryid} = useParams();

  useEffect(()=>{
    if ( categoryid === undefined) {
    getItems().then((respuesta) => setProducts(respuesta));
    } else {
      getItemsByCategory(categoryid).then((respuesta) => setProducts(respuesta));
    }}, [categoryid]);

  return (
    <ItemList products={products}/>
  );
}
export default ItemListContainer;