import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const UserTableBody = ({ user, i, refetch }) => {

  const { name, email } = user;
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
        fetch(`http://localhost:5000/users/${user?._id}`, {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!",` Buyer ${name}  has been deleted.`, "success");
            refetch();
          });
      }
    });
  };

  return (
    <tr>
      <th>{i + 1}</th>
      <td></td>
      <td>{name}</td>
      <td>{email}</td>
     
      <td>
        <button onClick={handleDelete} className="btn  btn-error btn-circle">
          <FaTrashAlt></FaTrashAlt>
        </button>
      </td>
     
    </tr>
  );
};

export default UserTableBody;
