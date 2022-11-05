import React, { useEffect, useState } from 'react';

const OrdersRow = ({order, handleDelete}) => {
    const {_id, serviceName, customer, price, service, phone} = order;
    const [orderService, setOrderService] = useState({});
    useEffect(()=>{
        fetch(`https://genius-car-server-smoky.vercel.app/services/${service}`)
        .then(res=>res.json())
        .then(data=>{
            setOrderService(data)
        })
    }, []);

    
    return (
        <tr>
                    <th>
                        <label>
                            <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>X</button>
                        </label>
                    </th>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            
                            {
                                orderService?.img && <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">Total: ${price}</div>
                        </div>
                    </div>
                    </td>
                    <td>
                    Name:
                    <br/>
                    <span className="badge badge-ghost badge-sm">{customer}</span>
                    </td>
                    <td>Phone:{phone}</td>
                    <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
    );
};

export default OrdersRow;