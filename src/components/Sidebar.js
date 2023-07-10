import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

import CardItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';

const Sidebar = () => {

  const { isOpen, handleClose, setIsOpen } = useContext(SidebarContext);
  const {cart } = useContext(CartContext);
  return <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-500 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdArrowForward className='text-2xl' />
      </div>
    </div>
    <div>Cart items</div>
    {cart.map((item)=><CartItem item={item} key={item.id}/>)}
  </div>;
};

export default Sidebar;
