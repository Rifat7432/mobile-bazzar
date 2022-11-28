import React from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const SellerTableBody = ({ user, i, refetch }) => {
  const { name, email, verified, userImg } = user;
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
        fetch(`https://mobiledazzar.vercel.app/users/${user?._id}`, {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire(
              "Deleted!",
              ` Seller ${name} has been deleted.`,
              "success"
            );
            refetch();
          });
      }
    });
  };
  const verify = () => {
    fetch(`https://mobiledazzar.vercel.app/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ verified: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.success("Seller verified successfully");
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
              <img src={userImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {verified ? (
          <div className="badge badge-accent">Verified</div>
        ) : (
          <button onClick={verify} className="btn myButton btn-sm">
            Verify
          </button>
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

export default SellerTableBody;
