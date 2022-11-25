import React from 'react';
import ProductTableBody from './ProductTableBody';

const ProductTable = ({products ,refetch}) => {
    return (
        <div className="overflow-x-auto shadow-lg">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {
            products.map((product,i) =><ProductTableBody key={product._id} product={product} i={i} refetch={refetch}></ProductTableBody> )
          }
          </tbody>
        </table>
      </div>
    );
};

export default ProductTable;