import { initializeApp } from "firebase/app";
import { getFirestore, collection, orderBy, doc, getDocs, getDoc, addDoc, query, where } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCs06LVuR9r0XsmK0jNiEF0lDigi5JAa1E",
    authDomain: "proyecto-reactjs-51175-flier.firebaseapp.com",
    projectId: "proyecto-reactjs-51175-flier",
    storageBucket: "proyecto-reactjs-51175-flier.appspot.com",
    messagingSenderId: "490316357858",
    appId: "1:490316357858:web:ce49d99e61335ea3217ebb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Traemos todos los productos de una coleccion de firebase
export async function getItems(){
    

    // 1. Creo la referancia a la coleccion deseada
    const productsRef = collection(db, "products")

    // 2. Pido los documentos de esa coleccion ordenados por su "index"
    const q = query(productsRef, orderBy("index"));
    const productsSnap = await getDocs(q);
    const documents = productsSnap.docs;

    // 3. Extraigo los datos de los documentos
    // y le agregamos id a data
    const docsData = documents.map ((doc) => {
        return {id: doc.id, ...doc.data()};
    });
    
    return docsData;
}

// Funcion para ir a detalles del producto y poder agregar al carrito
export async function getSingleItem(idURL){
    const docRef = doc(db, "products", idURL);
    const docSnap = await getDoc(docRef);
    return {id: docSnap.id, ...docSnap.data()};
}


// Funcion para filtrar los productos segun su categoria
export async function  getItemsByCategory(categoryid){
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", categoryid));

    const productsSnap = await getDocs(q);
    const documents = productsSnap.docs;

    const docsData = documents.map ((doc) => {
        return {id: doc.id, ...doc.data()};
    });
    
    return docsData;

}


// Funcion para enviar una orden de compra a la base de datos
export async function createOrder(order){
    const collectionOrdersRef = collection(db, "orders");
    const response = await addDoc(collectionOrdersRef, order);
    return response.id;
}