import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryProductCard from '../CategoryProductCard/CategoryProductCard';
import GetModal from '../GetModal/GetModal';

const CategoryProducts = () => {
    const id = useParams()
    const { data: products = [],refetch } = useQuery({
        queryKey: ["categoryProducts",id],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:5000/categoryProducts/${id.id}`,
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
    const [modalData,setModalData] = useState(null)
    return (
       <>
        <div className='grid grid-cols-1 mt-5 py-5 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                products.map(product=><CategoryProductCard setModalData={setModalData} product={product} key={product._id} refetch={refetch}></CategoryProductCard>)
            }
        </div>
       
            {modalData && <GetModal modalData={modalData} setModalData={setModalData}></GetModal>}
     
       </>
    );
};

export default CategoryProducts;