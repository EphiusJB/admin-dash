import React from 'react'
import '../styles/pages.modules.css'

export default function Products(props) {
    

    return (
        <>
            <div className="products">
                <h1>Products Page</h1>
                <p>This is the products page where you can manage your products.</p>
                {/* Add your product management components here */}
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example product data, replace with actual data */}
                        <tr>
                            <td>1</td>
                            <td>Product A</td>
                            <td>$10.00</td>
                            <td>Category 1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Product B</td>
                            <td>$20.00</td>
                            <td>Category 2</td>
                        </tr>
                    </tbody>
                </table>
                <p>Manage your products, add new ones, edit existing ones, or delete them as needed.</p>
            </div>
        </>
    )
}
