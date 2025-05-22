import {useDocument} from './useDocument';
import {useCollection} from './useCollection';



// src/hooks/useStores.js
const useStores = () => {
    const {documents, loading} = useCollection('stores')
    const stores = documents;
    const storesLoad = loading;
    return {stores, storesLoad}
    };

// src/hooks/useProducts.js
const useProducts = () => {
    const {documents, loading} = useCollection('products')
    const products = documents;
    const productsLoad = loading;
    return {products, productsLoad}
    };

// src/hooks/useUsers.js
const useUsers = () => {
    const {documents, loading} = useCollection('users')
    const users = documents;
    const usersLoad = loading;
    return {users, usersLoad}
    };

// src/hooks/useOrders.js
const useOrders = () => {
    const {documents, loading} = useCollection('orders')
    const orders = documents;
    const ordersLoad = loading;
    return {orders, ordersLoad}
    };


export {useStores, useProducts, useUsers, useOrders}