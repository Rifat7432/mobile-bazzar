import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SellerTable from '../SellerTable/SellerTable';

const AllSellers = () => {
    const role = 'Seller'
    const { data: sellers = [] ,refetch} = useQuery({
        queryKey: ["usersSeller"],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:5000/usersSeller/${role}`,
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
      console.log(sellers)
    return (
        <div className='pt-5 '>
        {sellers.length > 0 ? <SellerTable users={sellers} refetch={refetch}></SellerTable> : <h1 className='text-4xl mt-32 font-semibold  text-center'>no sellers found</h1>}
        </div>
    );
};

export default AllSellers;