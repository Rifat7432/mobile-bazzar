import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { FaEllipsisH, FaCheck, FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryProductCard = ({ product, setModalData ,refetch}) => {
  const {
    img,
    SellerName,
    date,
    location,
    resalePrice,
    originalPrice,
    useYears,
    sellerVerified,
    productName,
    email,
    _id,
    report,
  } = product;
  const { data: seller = {} } = useQuery({
    queryKey: ["seller", email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/seller/${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  const manageModal = () => {
    setModalData(product);
  };
  const handelReport = () => {
    if (report === false) {
      fetch(`http://localhost:5000/reportProduct/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ reported: true }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            refetch()
            toast.success(`${productName} reported successfully`);
          }
        });
    } else {
      return toast.success(`${productName} reported successfully`);
    }
  };
  return (
    <div className="card card-compact bg-base-100 shadow-2xl">
      <div className="p-5">
        <div className="flex items-center">
          <div>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-circle w-12 h-12">
                  <img
                    src={seller?.userImg}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-11/12 ml-2">
            <div className="flex">
              <h3 className="font-medium">{SellerName}</h3>
              {sellerVerified && (
                <div className="avatar w-1/4 ml-2">
                  <div className="mask mask-decagon bg-blue-600 text-white p-1 ">
                    <FaCheck></FaCheck>
                  </div>
                </div>
              )}
            </div>
            <div className="flex">
              <h4>{location} ,</h4>
              <h4>{date}</h4>
            </div>
          </div>

          <div className="flex mr-5">
            <div className="dropdown ">
              <label tabIndex={1} className="btn btn-ghost avatar">
                <FaEllipsisH></FaEllipsisH>
              </label>
              <ul
                tabIndex={1}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 font-semibold text-slate-800 rounded-box w-52"
              >
                <li>
                  <button onClick={handelReport} className="justify-items-start">
                    <div className="avatar w-1/4 ml-2">
                      <div className="mask mask-circle p-1 ">
                        <FaExclamationCircle></FaExclamationCircle>
                      </div>
                    </div>
                    Report
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <figure>
        <img src={img} className="h-72 w-11/12 rounded" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p className="text-lg font-medium">Resale price : {resalePrice} tk</p>
        <p className="text-lg font-normal">
          Original price : {originalPrice} tk
        </p>
        <p className="text-lg font-normal">Used : {useYears} year</p>

        <label
          onClick={manageModal}
          htmlFor="my-modal-3"
          className="btn myButton w-3/4 mx-auto my-2"
        >
          Book Now
        </label>
      </div>
    </div>
  );
};

export default CategoryProductCard;
