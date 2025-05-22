// src/hooks/useSellerAnalytics.js
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';


export const useSellerAnalytics = (sellerId) => {
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchAnalytics = async () => {
        try {
          const productsRef = collection(db, 'products');
          const q = query(productsRef, where('storeId', '==', sellerId));
          const snapshot = await getDocs(q);
          const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
          const totalProducts = products.length;
          const totalSales = products.reduce((sum, prod) => sum + (prod.totalSold || 0), 0);
          const totalRevenue = products.reduce((sum, prod) => sum + (prod.revenue || 0), 0);
  
          setAnalytics({ totalProducts, totalSales, totalRevenue });
          setLoading(false);
        } catch (err) {
          console.error('Error fetching analytics:', err);
        }
      };
  
      if (sellerId) fetchAnalytics();
    }, [sellerId]);
  
    return { analytics, loading };
  };
  