import React from 'react'
import '../styles/pages.modules.css'
import Chart from '../components/chart'
import { useOrders, useStores, useUsers } from '../hooks/customHooks'

export default function Dashboard(props) {
    const {stores, storesLoad} = useStores()
    const {users, usersLoad} = useUsers()
    const {orders, ordersLoad} = useOrders()

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
                    <div className="dashCard">
                        <div className="cardTitle">
                            <h2>Dashboard</h2>
                        </div>
                        <div className="cardContent">
                            <p>Welcome to the dashboard!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
