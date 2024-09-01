import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../helpers/pedirDatos'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs,query, where } from 'firebase/firestore';
import { db } from '../firebase/data';

function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const [titulo,setTitulo] = useState("Productos");
    const category = useParams().category;

    useEffect(()=>{
      const productosRef = collection(db, "productos")
      const q = category ? query(productosRef, where("category", "==", category)): productosRef;

      getDocs(q)
      .then((res)=> {
        setProductos(
          res.docs.map((doc)=>{
            return {...doc.data(),id: doc.id}
          })
        )
      })

    },[category,titulo])

  return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer
