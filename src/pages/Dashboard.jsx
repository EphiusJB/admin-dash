import React from 'react'
import '../styles/pages.modules.css'
import Chart from '../components/chart'
import { useOrders, useProducts, useStores, useUsers } from '../hooks/customHooks'
import {Icons} from '../assets/IconLibrary'

export default function Dashboard(props) {
    const {stores, storesLoad} = useStores()
    const {users, usersLoad} = useUsers()
    const {orders, ordersLoad} = useOrders()
    const {products, productsLoad} = useProducts()

    console.log(orders);

    return (
        <>
            <div className="dashboard">
                <div className="dashLeft">
                    <div className="mall-summary">
                        <h4>Mall summarry</h4>
                        <h5>Stores</h5>
                        <Chart docz={stores} loading={storesLoad}/>
                    </div>
                    <div className="recents">
                        <h4>Recent activity</h4>
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>User</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.userId}</td>
                                        <td>{order.createdAt.slice(0,10)}</td>
                                        <td>{order.currency} {order.totalAmount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="dashRight">
                        <div className="stats">
                            <h4>Statistics</h4>
                            <div className="statistics">
                            <div className="stat">
                                <Icons.StatsBarChart className='barIcon'/>
                                <p>{stores.length}</p>
                                <h6>Stores</h6>
                            </div>
                            <div className="stat">
                            <Icons.StatsBarChart className='barIcon'/>
                                <p>{users.length}</p>
                                <h6>Users</h6>
                            </div>
                            <div className="stat">
                            <Icons.StatsBarChart className='barIcon'/>
                                <p>{orders.length}</p>
                                <h6>Orders</h6>
                            </div>
                            <div className="stat">
                            <Icons.StatsBarChart className='barIcon'/>
                                <p>{products.length}</p>
                                <h6>Products</h6>
                            </div>
                            </div>
                        </div>
                        <div className="transactions">
                        <h4>Transactions</h4>
                        { orders.length === 0 ? <p>No transactions yet</p> : orders.map((order) => (
                        <div className="transaction">
                            <Icons.Check className='checked'/>
                            <div className="details">
                                <h5>Order #{order.id}</h5>
                                <p>{order.createdAt.slice(0,10)}</p>
                            </div>
                            <div className="menuBtn">⋮</div>
                        </div>
                                ))} 
                        </div>
                </div>
            </div>
        </>
    )
}
