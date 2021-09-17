import { useState, useEffect } from "react";
import { collection, getDocs, Timestamp, orderBy, query, onSnapshot, doc } from "firebase/firestore"; 

import { db, storage,  } from "../firebase/config";

const useFirestore = (collectionName) => {

    const [docs, setDocs] = useState([]);

    useEffect( () => {

        // async function fetchData() {
            
            const q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
        //     const querySnapshot = await getDocs(q);
        //     let documents = []; 
        //     querySnapshot.forEach((doc) => {

        //         // console.log(doc.id , '=>', doc.data());
        //         documents.push({...doc.data(), id: doc.id})
        //     })
        //     setDocs(documents);
        // }

        // try {
        // fetchData();

        // } 
        // catch (e) {
        //     console.log(e);
        // }
        const unsub = onSnapshot(q, (querySnapshot)=> {
            let documents = []; 
                querySnapshot.forEach((doc) => {
    
                    // console.log(doc.id , '=>', doc.data());
                    documents.push({...doc.data(), id: doc.id})
                })
                setDocs(documents);
        })


        return ()=> unsub();
    }, [collection]);

    return docs;

}

export {useFirestore};