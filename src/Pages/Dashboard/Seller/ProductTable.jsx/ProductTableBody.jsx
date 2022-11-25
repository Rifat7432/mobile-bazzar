import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ProductTableBody = () => {
   
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
       
        if (result) {
          fetch(`http://localhost:5000/users/${''}`, {
            method: "DELETE",
            headers: {
              authorization: `bearer ${localStorage.getItem("token")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              Swal.fire(
                "Deleted!",
                ` Product  has been deleted.`,
                "success"
              );
            //   refetch();
            });
        }
      });
    };
    
    return (
      <tr>
        <th></th>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <button onClick={handleDelete} className="btn  btn-error btn-circle">
            <FaTrashAlt></FaTrashAlt>
          </button>
        </td>
        <td></td>
      </tr>
    );
};

export default ProductTableBody;