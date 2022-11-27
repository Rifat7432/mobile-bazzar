import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../ContextProvider/AuthProvider';
import MyOrdersTable from '../MyOrdersTable/MyOrdersTable';

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    const { data: orders = [] ,refetch} = useQuery({
        queryKey: ["usersSeller",user?.email],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:5000/order/${user?.email}`,
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
    return (
        <div className='pt-5'>
           {orders.length > 0 ? <MyOrdersTable orders={orders} refetch={refetch}></MyOrdersTable>:<h1 className='text-4xl mt-32 font-semibold  text-center'>no orders found</h1>}
        </div>
    );
};

export default MyOrders;