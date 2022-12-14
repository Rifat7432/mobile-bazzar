import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../ContextProvider/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signUpByGoogle, signUp, updateUser, removeUser } =
    useContext(AuthContext);
  const getToken = (email) => {
    fetch(`https://mobiledazzar.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("successful", "sign up successful.", "success");
        localStorage.setItem("token", data.accessToken);
        reset({
          email: "",
          password: "",
          role: "Select one",
        });
      })
      .catch((e) => {
        removeUser()
          .then(() => {
            toast.error("something is wrong .Please try again !");
          })
          .catch((e) => console.error(e));
      });
  };
  const addUser = (email, name, role, img) => {
    let user = {
      email,
      name,
      role,
      userImg: img,
      verified: false,
    };
    if (role === "Buyer") {
      user = {
        email,
        name,
        role,
        userImg: img,
      };
    }
    fetch("https://mobiledazzar.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          getToken(email);
          navigate("/");
        }
      })
      .catch((e) => {
        removeUser()
          .then(() => {
            toast.error("something is wrong .Please try again !");
          })
          .catch((e) => console.error(e));
      });
  };
  const handleSignUp = (data) => {
    const { name, email, password, role, userImg } = data;
    if (role === "" || role === "Select one") {
      return toString.error("Please select an option");
    }
    const image = userImg[0];
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
          const img = data.data.url;
          signUp(email, password)
            .then((Result) => {
              addUser(email, name, role, img);
              updateUser(name, img);
            })
            .catch((e) => toast.error(e.message));
        }
      });
  };

  const gooLogin = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "if you sign up by google you will consider as a buyer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        signUpByGoogle()
          .then((result) => {
            const user = result.user;
            addUser(user?.email, user?.displayName, "Buyer", user?.photoURL);
          })
          .catch((error) => {});
      }
    });
  };
  return (
    <div className="hero py-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            className=" rounded shadow-xl lg:mr-10"
            style={{ width: "500px" }}
            src="https://i.ibb.co/BGVDn7h/mobile-login-concept-illustration-114360-135.webp"
            alt=""
          />
        </div>
        <div className="card w-96 py-5  shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <h1 className="text-4xl font-bold">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                className="input input-bordered w-full "
                {...register("name", { required: "Enter your name" })}
              />
              {errors?.name && (
                <p className="text-red-500">{errors?.name?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">email</span>
              </label>
              <input
                type={"email"}
                className="input input-bordered w-full"
                {...register("email", {
                  required: "Enter Your email",
                })}
              />
              {errors?.email && (
                <p className="text-red-500">{errors?.email?.message}</p>
              )}
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={"password"}
                className="input input-bordered w-full "
                {...register("password", { required: "Enter your password" })}
              />
              {errors?.password && (
                <p className="text-red-500">{errors?.password?.message}</p>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Sign Up as</span>
              </label>
              <select
                {...register("role", { required: "Enter your name" })}
                className="select select-bordered w-full max-w-xs"
              >
                <option defaultValue={""} disabled selected>
                  Select one
                </option>
                <option defaultValue={"Buyer"}>Buyer</option>
                <option value={"Seller"}>Seller</option>
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="file"
                className="input input-bordered w-full "
                {...register("userImg", { required: "Upload your image" })}
              />
              {errors?.userImg && (
                <p className="text-red-500">{errors?.userImg?.message}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn myButton">SignUp</button>
            </div>
          </form>
          <div>
            <label className="ml-5 label">
              <p>
                Already have account
                <Link
                  to={"/login"}
                  className="label-text-alt link text-lg text-orange-500 link-hover"
                >
                  {" "}
                  Login
                </Link>
              </p>
            </label>
          </div>
          <div className="divider">OR</div>
          <button
            onClick={gooLogin}
            className="btn w-4/5 mx-auto btn-outline myOutlineButton"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
