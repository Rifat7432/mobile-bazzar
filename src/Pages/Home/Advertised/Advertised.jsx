import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import CategoryProductCard from '../../Products/CategoryProductCard/CategoryProductCard';
import GetModal from '../../Products/GetModal/GetModal';

const Advertised = ({advertiseProducts}) => {
    // 

    
      
      const [modalData,setModalData] = useState(null)
      return (
         <>
         <div className='mt-20'>
            <h1 className='text-5xl font-bold'>Special product  </h1>
         </div>
          <div className='grid grid-cols-1 mt-5 pb-5 w-11/12 mx-auto  sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {
                  advertiseProducts.map(product=><CategoryProductCard setModalData={setModalData} product={product} key={product._id}></CategoryProductCard>)
              }
          </div>
         
              {modalData && <GetModal modalData={modalData} setModalData={setModalData}></GetModal>}
       
         </>
    );
};

export default Advertised;