// src/hooks/useCollection.js
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

export const useCollection = (collectionName) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, collectionName);
        const snapshot = await getDocs(colRef);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDocuments(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching collection:', err);
      }
    };
    fetchData();
  }, [collectionName]);

  return { documents, loading };
};
