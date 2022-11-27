import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Advertised from '../Advertised/Advertised';
import Slider from '../Slider/Slideer';

const Home = () => {
    const { data: advertiseProducts = [],refetch } = useQuery({
        queryKey: ["advertiseProduct"],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:5000/advertiseProduct`,
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
        <div>
     <div className='pt-5'> <Slider advertiseProducts={advertiseProducts}></Slider></div>
         {advertiseProducts.length > 0 &&  <Advertised advertiseProducts={advertiseProducts}></Advertised>}
        
        </div>
    );
};

export default Home;