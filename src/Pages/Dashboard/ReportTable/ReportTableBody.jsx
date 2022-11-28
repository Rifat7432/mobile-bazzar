import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ReportTableBody = ({ reportedProduct, i, refetch }) => {
  const { _id, img, SellerName, productName } = reportedProduct;
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://mobiledazzar.vercel.app/product/${_id}`, {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire(
              "Deleted!",
              `${productName}  has been deleted.`,
              "success"
            );
            refetch();
          });
      }
    });
  };

  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        {" "}
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{productName}</td>
      <td>{SellerName}</td>

      <td>
        <button onClick={handleDelete} className="btn  btn-error btn-circle">
          <FaTrashAlt></FaTrashAlt>
        </button>
      </td>
    </tr>
  );
};

export default ReportTableBody;
