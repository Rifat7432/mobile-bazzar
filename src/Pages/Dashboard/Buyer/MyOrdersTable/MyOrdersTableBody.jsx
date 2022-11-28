import React from "react";
import { Link } from "react-router-dom";

const MyOrdersTableBody = ({ order, i, refetch }) => {
  const {
    _id,
    productId,
    productName,
    productPrice,
    productImg,
    buyerName,
    buyerEmail,
    meetingLocation,
    mobileNumber,
    paid,
  } = order;
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={productImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{productName}</td>
      <td>{productPrice} tk</td>
      <td>{meetingLocation}</td>
      <td>
        {paid === true ? (
          <p>Paid</p>
        ) : (
          <Link to={`/dashboard/payment/${_id}`} className="btn myButton">
            Pay
          </Link>
        )}
      </td>
      <td>
        {/* <button onClick={handleDelete} className="btn  btn-error btn-circle">
            {/* <FaTrashAlt></FaTrashAlt> 
          </button> */}
      </td>
    </tr>
  );
};

export default MyOrdersTableBody;
