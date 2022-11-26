import React from "react";
import { FaEllipsisH ,FaCheck} from 'react-icons/fa';

const CategoryProductCard = ({ product }) => {
  const {
    img,
    SellerName,
    date,
    location,
    resalePrice,
    originalPrice,
    useYears,
    productName
  } = product;
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
            <div className="avatar w-1/4 ml-2">
              <div className="mask mask-decagon bg-blue-600 text-white p-1 ">
               <FaCheck></FaCheck>
              </div>
            </div>
          </div>
          <div className="flex">
            <h4>{location} ,</h4>
            <h4>{date}</h4>
          </div>
        </div>
        <button className="btn btn-ghost"><FaEllipsisH></FaEllipsisH></button>
      </div>
      </div>
      <figure>
        <img src={img} className="h-72 w-11/12 rounded" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>Resale price : {resalePrice} tk</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductCard;
