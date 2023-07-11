import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  //destructure item
  const { id, title, image, price, quantity } = item;
  const {removeFromCart ,increaseQuantity,decreaseQuantity} = useContext(CartContext);
  return <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
      <Link to={`/products/${id}`}>
        <img src={image} className='max-w-[80px]' alt='product img' />
      </Link>
      <div className='w-full flex flex-col'>
        <div className='flex justify-between mb-2'>
          <Link to={`product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
            {title}
          </Link>
          {/* remove item from cart */}
          <div className='text-xl cursor-pointer' onClick={()=>removeFromCart(id)}>
            <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
          </div>
        </div>
        <div className=' flex gap-x-2 h-[36px]'>
          <div className='flex flex-1 max-2-[100px] items-center h-full border text-primary font-medium'>
            {/* minus icon */}
            <div className='flex-1 h-full flex justify-center items-center cursor-pointer' onClick={()=>decreaseQuantity(id)}>
              <IoMdRemove />
            </div> 
            {/* quantity */}
            <div className='h-full flex justify-center items-center px-2'>
              {quantity}
            </div>
            {/* plus icon */}
            <div className='flex-1 h-full flex justify-center items-center cursor-pointer' onClick={()=>increaseQuantity(id)}>
              <IoMdAdd/>
            </div>
          </div>
          {/* item price */}
          <div className='flex flex-1 items-center justify-around'>
            $ {price}
          </div>
          {/* final price */}
          <div className='flex flex-1  items-center justify-end text-primary font-medium'>
          <div className=''>
            {`$ ${parseFloat(price * quantity).toFixed(2)}`}
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>;
};

export default CartItem;
