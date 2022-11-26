import React from 'react';
import UserTableBody from './UserTableBody';

const UserTable = ({users ,refetch}) => {
    return (
        <div className="overflow-x-auto shadow-lg">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>image</th>
              <th>Name</th>
              <th>email</th>
              <th>delete</th>
              
         
            </tr>
          </thead>
          <tbody>
          {
            users.map((user,i) =><UserTableBody key={user._id} user={user} i={i} refetch={refetch}></UserTableBody> )
          }
          </tbody>
        </table>
      </div>
    );
};

export default UserTable;