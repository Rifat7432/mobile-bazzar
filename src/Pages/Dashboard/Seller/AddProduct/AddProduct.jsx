import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../ContextProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [seller, steSeller] = useState({});
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://mobiledazzar.vercel.app/seller?email=${
          user?.email
        }&role=${"Seller"}`
      )
        .then((res) => res.json())
        .then((data) => steSeller(data));
    }
  }, [user?.email]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const postData = (data) => {
    fetch("https://mobiledazzar.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          reset({
            img: "",
            phoneNumber: "",
            location: "",
            purchase: "",
            originalPrice: "",
            resalePrice: "",
            productName: "",
            useYears: "",
            categoryId: "Select your product category",
            condition: "Select your product condition",
            description: "",
          });
          toast.success("Product added successful");
        }
      });
  };
  const handleAddProduct = (data) => {
    const {
      img,
      phoneNumber,
      location,
      purchase,
      originalPrice,
      resalePrice,
      productName,
      useYears,
      categoryId,
      condition,
      description,
    } = data;
    const date = new Date().toLocaleString();
    if (categoryId === "" || categoryId === "Select your product category") {
      return toast.error("Select a category");
    }
    if (condition === "" || condition === "Select your product condition") {
      return toast.error("Select a condition");
    }
    if (description === "") {
      return toast.error("Enter a description");
    }

    const image = img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_imgBB_apiKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const product = {
            img: data.data.url,
            SellerName: user?.displayName,
            date,
            phoneNumber,
            location,
            purchase,
            originalPrice,
            resalePrice,
            productName,
            useYears,
            categoryId,
            condition,
            description,
            email: user?.email,
            status: "available",
            sellerVerified: seller?.verified,
            report: false,
            advertise: false,
          };
          postData(product);
        }
      });
  };
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(`https://mobiledazzar.vercel.app/categories`).then((res) =>
        res.json()
      ),
  });
  return (
    <div>
      <form
        className="mt-16 shadow-2xl w-11/12 mx-auto rounded-xl p-10"
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <p className="text-3xl  font-bold">
          To add a new Product fill all information
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input
              placeholder="Seller name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered mb-5 bg-white input-ghost w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Phone number</span>
            </label>
            <input
              defaultValue={user?.email}
              disabled
              type="text"
              className="input input-bordered mb-5 bg-white input-ghost w-full "
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">your location</span>
            </label>
            <input
              placeholder="Location"
              type="text"
              className="input input-bordered mb-5 bg-white input-ghost w-full "
              {...register("location", { required: "Enter your location" })}
            />
            {errors?.location && (
              <p className="text-red-500">{errors?.location?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Your phone number</span>
            </label>
            <input
              placeholder="Phone number"
              type="text"
              className="input input-bordered mb-5 bg-white input-ghost w-full "
              {...register("phoneNumber", { required: "Enter your number" })}
            />
            {errors?.phoneNumber && (
              <p className="text-red-500">{errors?.phoneNumber?.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Original price</span>
            </label>
            <input
              placeholder="Original price"
              type="text"
              className="input input-bordered mb-5 bg-white input-ghost w-full "
              {...register("originalPrice", {
                required: "Enter your original price",
              })}
            />
            {errors?.originalPrice && (
              <p className="text-red-500">{errors?.originalPrice?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Resale price</span>
            </label>
            <input
              placeholder="Resale price"
              type="text"
              className="input input-bordered mb-5 bg-white input-ghost w-full "
              {...register("resalePrice", {
                required: "Enter your resale price",
              })}
            />
            {errors?.resalePrice && (
              <p className="text-red-500">{errors?.resalePrice?.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Product name</span>
            </label>
            <input
              placeholder="Product name"
              type="text"
              className="input input-bordered mb-5 bg-white input-ghost w-full "
              {...register("productName", {
                required: "Enter your product name",
              })}
            />
            {errors?.productName && (
              <p className="text-red-500">{errors?.productName?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Years of use</span>
            </label>
            <input
              placeholder="Years of use"
              type="text"
              className="input input-bordered mb-5 bg-white input-ghost w-full "
              {...register("useYears", {
                required: "Enter your year of using",
              })}
            />
            {errors?.useYears && (
              <p className="text-red-500">{errors?.useYears?.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Product picture</span>
            </label>
            <input
              placeholder="Enter Picture"
              type="file"
              className="input input-bordered mb-5 bg-white input-ghost w-full "
              {...register("img", { required: "Enter your product picture" })}
            />
            {errors?.img && (
              <p className="text-red-500">{errors?.img?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Purchase Date</span>
            </label>
            <input
              {...register("purchase", {
                required: "Enter your product purchase date",
              })}
              type="Date"
              className="input input-bordered mb-5 bg-white input-ghost w-full "
            />
            {errors?.purchase && (
              <p className="text-red-500">{errors?.purchase?.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              {...register("categoryId")}
              className="select select-bordered mb-5 w-full "
            >
              <option defaultValue={""} disabled selected>
                Select your product category
              </option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.category}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Condition</span>
            </label>
            <select
              {...register("condition")}
              className="select select-bordered mb-5 w-full "
            >
              <option defaultValue={""} disabled selected>
                Select your product condition
              </option>
              <option value={"Excellent"}>Excellent</option>
              <option defaultValue={"Good"}>Good</option>
              <option value={"Fair"}>Fair</option>
            </select>
          </div>
        </div>

        <textarea
          {...register("description")}
          className="textarea textarea-bordered mb-5 h-36 w-full"
          placeholder="Product Description"
        ></textarea>
        <button className="btn myButton ml-auto py-4 px-5 flex">Post</button>
      </form>
    </div>
  );
};

export default AddProduct;
