// seedFirestore.js
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, collection } from 'firebase/firestore';

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

const seedFirestore = async () => {
  // Users
  const users = [
    { id: 'user_seller_001', displayName: 'Alice Smith', email: 'alice@example.com', role: 'seller' },
    { id: 'user_seller_002', displayName: 'Bob Johnson', email: 'bob@example.com', role: 'seller' },
    { id: 'user_buyer_001', displayName: 'Clara Lee', email: 'clara@example.com', role: 'buyer' },
    { id: 'user_admin_001', displayName: 'Mall Admin', email: 'admin@example.com', role: 'admin' }
  ];

  for (const user of users) {
    await setDoc(doc(db, 'users', user.id), user);
  }

  // Stores
  const stores = [
    {
      id: 'store_alice01',
      storeName: "Alice's Accessories",
      storeDescription: 'Handmade jewelry and accessories.',
      ownerId: 'user_seller_001',
      status: 'active',
      storeImage: 'https://example.com/alice.jpg',
      createdAt: new Date().toISOString()
    },
    {
      id: 'store_bob01',
      storeName: "Bob's Bags",
      storeDescription: 'Eco-friendly bags and totes.',
      ownerId: 'user_seller_002',
      status: 'active',
      storeImage: 'https://example.com/bob.jpg',
      createdAt: new Date().toISOString()
    }
  ];

  for (const store of stores) {
    await setDoc(doc(db, 'stores', store.id), store);
  }

  // Products
  const products = {
    store_alice01: [
      {
        id: 'product_bracelet01',
        name: 'Beaded Bracelet',
        description: 'Colorful handmade beaded bracelet.',
        price: 15.0,
        currency: 'USD',
        stock: 50,
        category: 'Accessories',
        tags: ['bracelet', 'handmade', 'beaded'],
        image: 'https://example.com/bracelet.jpg',
        createdAt: new Date().toISOString()
      },
      {
        id: 'product_necklace01',
        name: 'Minimalist Necklace',
        description: 'Silver minimalist necklace with charm.',
        price: 25.0,
        currency: 'USD',
        stock: 20,
        category: 'Jewelry',
        tags: ['necklace', 'silver', 'minimal'],
        image: 'https://example.com/necklace.jpg',
        createdAt: new Date().toISOString()
      }
    ],
    store_bob01: [
      {
        id: 'product_tote01',
        name: 'Canvas Tote Bag',
        description: 'Reusable canvas tote bag with print.',
        price: 10.0,
        currency: 'USD',
        stock: 100,
        category: 'Bags',
        tags: ['eco', 'tote', 'canvas'],
        image: 'https://example.com/tote.jpg',
        createdAt: new Date().toISOString()
      },
      {
        id: 'product_backpack01',
        name: 'Recycled Backpack',
        description: 'Backpack made from recycled plastic bottles.',
        price: 45.0,
        currency: 'USD',
        stock: 30,
        category: 'Bags',
        tags: ['recycled', 'backpack', 'sustainable'],
        image: 'https://example.com/backpack.jpg',
        createdAt: new Date().toISOString()
      }
    ]
  };

  for (const [storeId, storeProducts] of Object.entries(products)) {
    for (const product of storeProducts) {
      const productRef = doc(db, 'stores', storeId, 'products', product.id);
      await setDoc(productRef, product);
    }
  }

  // Orders
  const orders = [
    {
      id: 'order_001',
      userId: 'user_buyer_001',
      items: [
        { productId: 'product_bracelet01', quantity: 2, price: 15.0 },
        { productId: 'product_tote01', quantity: 1, price: 10.0 }
      ],
      totalAmount: 40.0,
      currency: 'USD',
      status: 'completed',
      createdAt: new Date().toISOString()
    },
    {
      id: 'order_002',
      userId: 'user_buyer_001',
      items: [
        { productId: 'product_backpack01', quantity: 1, price: 45.0 }
      ],
      totalAmount: 45.0,
      currency: 'USD',
      status: 'pending',
      createdAt: new Date().toISOString()
    }
  ];

  for (const order of orders) {
    await setDoc(doc(db, 'orders', order.id), order);
  }

  // Reviews
  const reviews = [
    {
      productId: 'product_bracelet01',
      reviewId: 'review_001',
      userId: 'user_buyer_001',
      rating: 5,
      comment: 'Beautiful bracelet and fast delivery!',
      createdAt: new Date().toISOString()
    },
    {
      productId: 'product_backpack01',
      reviewId: 'review_002',
      userId: 'user_buyer_001',
      rating: 4,
      comment: 'Sturdy and sustainable, love it!',
      createdAt: new Date().toISOString()
    }
  ];

  for (const review of reviews) {
    const reviewRef = doc(db, 'stores',
      review.productId.startsWith('product_bracelet') || review.productId.startsWith('product_necklace')
        ? 'store_alice01'
        : 'store_bob01',
      'products',
      review.productId,
      'reviews',
      review.reviewId
    );
    await setDoc(reviewRef, review);
  }

  // Seller Analytics (basic example)
  const sellerAnalytics = [
    {
      storeId: 'store_alice01',
      totalSales: 30,
      totalRevenue: 450.0,
      totalReviews: 1,
      averageRating: 5.0,
      updatedAt: new Date().toISOString()
    },
    {
      storeId: 'store_bob01',
      totalSales: 10,
      totalRevenue: 150.0,
      totalReviews: 1,
      averageRating: 4.0,
      updatedAt: new Date().toISOString()
    }
  ];

  for (const analytics of sellerAnalytics) {
    await setDoc(doc(db, 'stores', analytics.storeId, 'analytics', 'summary'), analytics);
  }

  console.log('Firestore seeded successfully!');
};

seedFirestore().catch(console.error);
