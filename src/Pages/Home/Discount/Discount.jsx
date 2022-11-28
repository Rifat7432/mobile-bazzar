import React from "react";

const Discount = () => {
  return (
    <div className="shadow-lg flex bg-orange-500 rounded p-5 mt-20 items-center justify-around flex-col-reverse md:flex-row">
      <div>
        <h3 className="text-4xl font-bold">Get 20% off on apple product</h3>
        <p className="text-2xl font-semibold">up to 16 December</p>
      </div>
      <div>
        <img
          src="https://i.ibb.co/qyytPX4/download-removebg-preview-5.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Discount;
