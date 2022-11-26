import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProductCard from '../CategoryProductCard/CategoryProductCard';
import GetModal from '../GetModal/GetModal';

const CategoryProducts = () => {

    const [modalData,setModalData] = useState(null)
    const products = useLoaderData()
    return (
       <>
        <div className='grid grid-cols-1 mt-5 py-5 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                products.map(product=><CategoryProductCard setModalData={setModalData} product={product} key={product._id}></CategoryProductCard>)
            }
        </div>
       
            {modalData && <GetModal modalData={modalData} setModalData={setModalData}></GetModal>}
     
       </>
    );
};

export default CategoryProducts;