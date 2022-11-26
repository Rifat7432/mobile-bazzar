import React, { useContext } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextProvider/AuthProvider";

const GetModal = ({ modalData, setModalData }) => {
  const { user } = useContext(AuthContext);
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignUp = (data) => {
    const { meetingLocation, mobileNumber } = data;
    const booking = {
      productId: modalData?._id,
      productName: modalData?.productName,
      productPrice: modalData?.resalePrice,
      productImg: modalData?.img,
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      meetingLocation,
      mobileNumber,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
            toast.success(`${modalData?.productName} booked successfully`)
          setModalData(null);
          reset({
            meetingLocation:'',
            mobileNumber:''
          })
        }
      });
  };

  useEffect(() => {
    if (errors) {
      if (errors.meetingLocation) {
        return toast.error(errors.meetingLocation.message);
      } else if (errors.mobileNumber) {
        return toast.error(errors.mobileNumber.message);
      }
    }
  }, [errors]);

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <h1 className="text-3xl font-bold">Booking information</h1>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Product name</span>
              </label>
              <input
                defaultValue={modalData?.productName}
                disabled
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                defaultValue={modalData?.resalePrice}
                disabled
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={user?.displayName}
                disabled
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">email</span>
              </label>
              <input
                defaultValue={user?.email}
                disabled
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Meeting location</span>
              </label>
              <input
                className="input input-bordered w-full "
                {...register("meetingLocation", {
                  required: "Enter your meeting location",
                })}
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Mobile number</span>
              </label>
              <input
                className="input input-bordered w-full "
                {...register("mobileNumber", {
                  required: "Enter your mobile number",
                })}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn myButton">Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetModal;
