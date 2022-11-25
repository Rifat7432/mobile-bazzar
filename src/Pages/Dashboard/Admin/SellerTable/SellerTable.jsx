import React from 'react';
import SellerTableBody from './SellerTableBody';

const SellerTable = ({users ,refetch}) => {
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
            users.map((user,i) =><SellerTableBody key={user._id} user={user} i={i} refetch={refetch}></SellerTableBody> )
          }
          </tbody>
        </table>
      </div>
    );
};

export default SellerTable;