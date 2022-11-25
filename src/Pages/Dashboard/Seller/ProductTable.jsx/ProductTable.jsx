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
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
          {
            products.map((user,i) =><ProductTableBody key={user._id} user={user} i={i} refetch={refetch}></ProductTableBody> )
          }
          </tbody>
        </table>
      </div>
    );
};

export default ProductTable;