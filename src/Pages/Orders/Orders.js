import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrdersRow from './OrdersRow';

const Orders = () => {
    const {user, logOut} = useContext(AuthContext);
    const [orders, setOrders]= useState([]);
    console.log(user);
    useEffect(()=>{
        fetch(`https://genius-car-server-smoky.vercel.app/orders?email=${user?.email}`, {
            headers:{
                authorization:`Bearers ${localStorage.getItem('GeniusCar -Token')}`
            }
        })
        .then(res=>{
            if(res.status===401 || res.status===403){
                logOut()
            }
            return res.json()
        })
        .then(data=>{
            console.log(data);
            setOrders(data)
        })
    }, [user?.email]);

    const handleDelete= (id)=>{
        const proceed = window.confirm('Are you sure your want to delete?');
        if(proceed){
            fetch(`https://genius-car-server-smoky.vercel.app/orders/${id}`, {
                method:'delete'
            })
            .then(res=>res.json())
            .then(data=>{
                alert('Deleted Successfully!');
                const remaining = orders.filter(odr=>odr._id !== id);
                setOrders(remaining)
            })
        }
    }

    return (
        <div>
            {/* {orders.length} */}
            <div className="overflow-x-auto w-full">
            <table className="table w-full">
                
                <thead>
                <tr>
                    <th>
                    
                    </th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order=><OrdersRow
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                        ></OrdersRow>)
                    }
                </tbody>
                
                <tfoot>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                </tr>
                </tfoot>
                
            </table>
            </div>
        </div>
    );
};

export default Orders;