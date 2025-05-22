import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default function Chart({docz, loading}) {
    let numb = loading ? 0 : docz.length
    console.log(numb);
    const data = [
        { name: 'Jan', stores: 0 },
        { name: 'Feb', stores: numb },
        { name: 'Mar', stores: numb+2 },
        { name: 'Apr', stores: numb+4 },
        { name: 'May', stores: numb+5 },
      ];

    return (
        <>
            <LineChart width={500} height={220} data={data}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="stores" stroke="#ef637c" />
            </LineChart>
        </>
    )
}
