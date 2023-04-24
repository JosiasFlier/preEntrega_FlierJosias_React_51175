import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import "./itemListContainer.css"
import Loader from '../Loader/Loader';
import { getItems, getItemsByCategory } from "../../services/firestore";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  const {categoryid} = useParams();

  useEffect(()=>{
    if ( categoryid === undefined) {
      setProducts([]);
      getItems().then((respuesta) => setProducts(respuesta));
    } else {
      setProducts([]);
      getItemsByCategory(categoryid).then((respuesta) => setProducts(respuesta));
    }}, [categoryid]);

  if (products.length === 0) {
    return <Loader/>;
  }

  return (
    <ItemList products={products}/>
  );
}

export default ItemListContainer;
