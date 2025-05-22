// src/hooks/useUsersByRole.js
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

export const useUsersByRole = (role) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const q = query(collection(db, 'users'), where('role', '==', role));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching users by role:', err);
      }
    };

    if (role) fetchUsers();
  }, [role]);

  return { users, loading };
};
