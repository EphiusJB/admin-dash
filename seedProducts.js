import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, getDocs, doc, setDoc, getDoc
} from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9lFGa3Ry3l9SotYxR_awFGfIJBgZv_jM",
  authDomain: "ol-mall-77c64.firebaseapp.com",
  projectId: "ol-mall-77c64",
  storageBucket: "ol-mall-77c64.firebasestorage.app",
  messagingSenderId: "120293824160",
  appId: "1:120293824160:web:0077c0fc77510641ce1bc5",
  measurementId: "G-330Z7D6QF8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seedGlobalProducts() {
  const storesSnapshot = await getDocs(collection(db, "stores"));

  for (const storeDoc of storesSnapshot.docs) {
    const storeId = storeDoc.id;
    const productsSnapshot = await getDocs(collection(db, `stores/${storeId}/products`));

    for (const productDoc of productsSnapshot.docs) {
      const productData = productDoc.data();

      // Add store reference data
      const globalProductData = {
        ...productData,
        storeId,
        productId: productDoc.id,
        createdAt: productData.createdAt || new Date(),
      };

      await setDoc(doc(db, "products", productDoc.id), globalProductData);
      console.log(`Seeded product ${productDoc.id} from store ${storeId}`);
    }
  }

  console.log("Seeding complete.");
}

seedGlobalProducts().catch(console.error);
