import React, { createContext, useState, useEffect } from 'react';

//create product context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

      const fetchProduct = async () => {
      const fetchedData = await fetch("https://fakestoreapi.com/products");
      const data = await fetchedData.json();
      setProducts(data);
    }
    fetchProduct();
  }, []);
  return <ProductContext.Provider value={{products}}>
    {children}
  </ProductContext.Provider>
};

export default ProductProvider;
