import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {_id, title, price} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            customer: name,
            price,
            email,
            phone,
            message
        }
        
        
        fetch('https://genius-car-server-smoky.vercel.app/orders', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then((res)=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                form.reset()
                alert('Order placed!')
            }
        })
        .catch(error=>console.error(error))
    }
    return (
        <form className='text-center my-20' onSubmit={handlePlaceOrder}>
            <h2 className='text-3xl text-orange-600'>You are about to order: {title}</h2>
            <h4 className='text-2xl font-semibold text-orange-900 mb-7'>Price: ${price}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input name='firstName' type="text" placeholder="first name" className="input input-bordered w-full" />
                <input name='lastName' type="text" placeholder="last name" className="input input-bordered w-full" />
                <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                <input name='email' type="text" defaultValue={user?.email} placeholder="Your email" className="input input-bordered w-full" />
            </div>
            <textarea name='message' className="textarea textarea-bordered w-full my-4" placeholder="Your message"></textarea>
            <input className='btn btn-error'  type="submit" value="Place Your Order" />
        </form>
    );
};

export default CheckOut;