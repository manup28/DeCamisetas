import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams()

    useEffect(()=>{
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos")

        getDocs(misProductos)
        .then (resp => {
            const nuevosProductos = resp.docs.map(doc =>{
                const data = doc.data()
                return {id:doc.id , ...data}
            })
            setProductos(nuevosProductos)
        })

    },[idCategoria])


    return (
        <>
            <h2 className="titulo">Bienvenido a DeCamisetas</h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer