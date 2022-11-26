import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../ContextProvider/AuthProvider';
import ProductTable from '../ProductTable.jsx/ProductTable';

const MyProduct = () => {
    const {user}=useContext(AuthContext)
    const { data: products = [] ,refetch} = useQuery({
        queryKey: ["products",user?.email],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:5000/products/${user?.email}`,
            {
              headers: {
                authorization: `bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          const data = await res.json();
          return data;
        },
      });
      console.log(products)
    return (
        <div className='pt-5'>    
                { products.length > 0 ?  <ProductTable products={products} refetch={refetch}></ProductTable> : <h1 className='text-4xl mt-32 font-semibold  text-center'>no product found</h1>}
            
        </div>
    );
};

export default MyProduct;