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
            
                <ProductTable products={products} refetch={refetch}></ProductTable>
            
        </div>
    );
};

export default MyProduct;