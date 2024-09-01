import React, { useEffect, useState } from 'react'
import { pedirItemPorId } from '../helpers/pedirDatos'
import ItemDetails from './ItemDetails';
import { useParams } from 'react-router-dom';
import { doc, getDoc} from 'firebase/firestore';
import { db } from '../firebase/data';

function ItemDetailContainer({itemId}) {

  const [item,setItem] = useState(null);
  const id = useParams().id;

  useEffect(()=>{
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
    .then((res)=>{
      setItem(
        {...res.data(), id: res.id}
      )
    })
  },[id])

  return (
    <div>
      {item && <ItemDetails item= {item} />}
    </div>
  )
}

export default ItemDetailContainer;
