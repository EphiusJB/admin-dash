// src/hooks/useDocument.js
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const useDocument = (collectionName, docId) => {
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const docRef = doc(db, collectionName, docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDocument({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.warn('No such document!');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching document:', err);
      }
    };
    fetchDocument();
  }, [collectionName, docId]);

  return { document, loading };
};