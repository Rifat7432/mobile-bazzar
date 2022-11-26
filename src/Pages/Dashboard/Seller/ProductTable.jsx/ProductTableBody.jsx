import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ProductTableBody = ({ product, i, refetch }) => {
  const { img, productName, resalePrice, status, _id } = product;
  console.log(product);
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
        fetch(`http://localhost:5000/product/${_id}`, {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", ` Product  has been deleted.`, "success");
            refetch();
          });
      }
    });
  };

  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{productName}</td>
      <td>{resalePrice} tk</td>
      <td>{status}</td>
      <td>
        {status === "available" && (
          <button className="btn myButton">Advertise</button>
        )}
      </td>
      <td>
        <button onClick={handleDelete} className="btn  btn-error btn-circle">
          <FaTrashAlt></FaTrashAlt>
        </button>
      </td>
    </tr>
  );
};

export default ProductTableBody;
