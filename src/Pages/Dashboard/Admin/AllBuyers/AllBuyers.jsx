import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UserTable from '../UserTable/UserTable';

const AllBuyers = () => {
    const role = 'Buyer'
    const { data: buyers = [],refetch } = useQuery({
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
        <div className='pt-5 '>
        { buyers.length > 0 ?  <UserTable users={buyers} refetch={refetch}></UserTable> : <h1 className='text-4xl mt-32 font-semibold  text-center'>no buyers found</h1>
        }
        </div>
    );
};

export default AllBuyers;