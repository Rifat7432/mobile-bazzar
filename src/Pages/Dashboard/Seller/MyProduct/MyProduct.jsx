import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../ContextProvider/AuthProvider';

const MyProduct = () => {
    const {user}=useContext(AuthContext)
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
        <div>
            
        </div>
    );
};

export default MyProduct;