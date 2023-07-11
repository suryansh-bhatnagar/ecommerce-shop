import React, { useContext } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import StripeCheckout from 'react-stripe-checkout';

const Sidebar = () => {

  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, totalPrice, itemsQuantity } = useContext(CartContext);

  const handlePaymentSuccess = () => {
          clearCart();
          alert("Checkout Successfully!!");
  }

  const onClosed =()=>{
         console.log("On close run !!")
  }


  return <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full overflow-y-auto shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-500 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemsQuantity})</div>
      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdArrowForward className='text-2xl' />
      </div>
    </div>

    <div className=' flex flex-col gap-y-2 h-[520px]  overflow-y-auto overflow-x-hidden  border-b'>
      {cart.map((item) => <CartItem item={item} key={item.id} />)}
    </div>
    <div className='flex flex-col gap-y-3 py-4 mt-4'>
      <div className='flex w-full justify-between items-center'>
        {/* total price  */}
        <div>
          <span>Total:</span>$ {totalPrice.toFixed(2)}
        </div>
        {/* clear cart items */}
        <div className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl' onClick={() => clearCart()} >
          <FiTrash2 />
        </div>
      </div>

      <StripeCheckout
        name="E-commerce shop" // the pop-in header title
        description="Pay to checkout" // the pop-ineader subtitle h
        token={() => handlePaymentSuccess()}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        amount={totalPrice.toFixed(2) * 100}
        currency="USD" 
        closed={onClosed}
        >
        <button disabled={itemsQuantity === 0 ? true : false} className='bg-primary py-4 px-8 w-full disabled:bg-gray-500 text-white' >Checkout Now</button>
      </StripeCheckout>

    </div>
  </div>;
};

export default Sidebar;
