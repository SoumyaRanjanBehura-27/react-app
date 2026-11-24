import { useState } from "react";

function Table(){

    const[obj]=useState([
        {name:"Samsung S26 ultra",price:150000,rating:{rate:4.4,count:100000}, stock:"Available"},
        {name:"Samsung S25 ultra",price:130000,rating:{rate:4.3,count:105000}, stock:"Not Available"},
        {name:"I Phone 18 pro max",price:250000,rating:{rate:4.4,count:150000}, stock:"Available"},
        {name:"I Phone 17 pro max",price:149000,rating:{rate:4.2,count:100000}, stock:"Available"},
        {name:"Pixel 10 pro",price:90000,rating:{rate:4.2,count:30000}, stock:"Available"}
    ])
    return(
    <>
    <table class="table table-hover mt-4 border border-black m-3 ">
        <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Rate</th>
            <th>Count</th>
        </tr>
        </thead>
        <tbody>
           {obj.map((item,index )=>(
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>{item.rating.rate}</td>
                <td>{item.rating.count}</td>
            </tr>
           ))}
        </tbody>
       
    </table>
    </>
)
}
export default Table;