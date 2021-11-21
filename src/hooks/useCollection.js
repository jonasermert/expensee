import { useState, useEffect } from 'react';
import { db } from '../Service/firebase'
import { firebase } from '../Service/firebase'

import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (c) => {
    const [documents, setDocuments] = useState(null);
    useEffect(() => {
        let reference = collection(db, c)
        const unsubscribe = onSnapshot(reference, (querySnapshot) => {
            const results = [];
            console.log(querySnapshot.docs)
            querySnapshot.forEach((doc) => {
                results.push({ id: doc.id, ...doc.data() });
                console.log(doc.id, " => ", doc.data());
            });
            setDocuments(results)
        })
        return () => unsubscribe()
    }, [c]);
    return { documents }
}