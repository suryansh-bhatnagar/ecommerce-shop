import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from "../components/Product"
import Hero from '../components/Hero'
import Footer from '../components/Footer';
const Home = () => {
  //get products from product context
 const {products}=useContext(ProductContext);

 const filteredProducts = products.filter((product)=>{
  return (
    product.category === "men's clothing" || product.category ==="women's clothing"
  )
 })

  return <div>
    <Hero/>
    <section className='py-16'>
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-1'>
      {
        filteredProducts.map((product)=>{
          return <Product key={product.id} product ={product}/>
        })
      }
      </div>
      </div> 

    </section>
      <Footer/>
  </div>;
};

export default Home;
