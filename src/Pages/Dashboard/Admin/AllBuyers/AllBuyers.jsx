import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Shered/Loader/Loader';
import UserTable from '../UserTable/UserTable';

const AllBuyers = () => {
    const role = 'Buyer'
    const { data: buyers = [],refetch,isLoading } = useQuery({
        queryKey: ["usersBuyer"],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:5000/usersBuyer/${role}`,
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
      console.log(buyers)
    return (
        <div className='mt-16 '>{isLoading ? <Loader></Loader> : <div> { buyers.length > 0 ?  <UserTable users={buyers} refetch={refetch}></UserTable> : <h1 className='text-4xl mt-32 font-semibold  text-center'>no buyers found</h1>
        }</div>}
       
        </div>
    );
};

export default AllBuyers;