import React from "react";
import { FaEllipsisH, FaCheck } from "react-icons/fa";

const CategoryProductCard = ({ product ,setModalData }) => {
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
  } = product;
const manageModal =()=>{
  setModalData(product)
}
  return (
    <div className="card card-compact bg-base-100 shadow-2xl">
      <div className="p-5">
        <div className="flex items-center">
          <div>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-circle w-12 h-12">
                  <img src={img} alt="Avatar Tailwind CSS Component" />
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
          <button className="btn btn-ghost">
            <FaEllipsisH></FaEllipsisH>
          </button>
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

        <label onClick={manageModal} htmlFor="my-modal-3" className="btn myButton w-3/4 mx-auto my-2">
          Book Now
        </label>
      </div>
    </div>
  );
};

export default CategoryProductCard;
