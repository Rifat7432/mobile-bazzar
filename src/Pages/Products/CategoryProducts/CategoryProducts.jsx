import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProductCard from '../CategoryProductCard/CategoryProductCard';

const CategoryProducts = () => {
    const products = useLoaderData()
    return (
        <div className='grid grid-cols-1 mt-5 py-5 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                products.map(product=><CategoryProductCard product={product} key={product._id}></CategoryProductCard>)
            }
        </div>
    );
};

export default CategoryProducts;