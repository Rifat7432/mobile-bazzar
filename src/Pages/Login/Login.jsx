import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../ContextProvider/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.from.pathname || "/";
  const { signUpByGoogle, login, user, logOut } = useContext(AuthContext);
  const getToken = (email) => {
    fetch(`https://mobiledazzar.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("successful", "Login successful.", "success");
        navigate(form, { replace: true });
        reset({
          email: "",
          password: "",
        });
        localStorage.setItem("token", data.accessToken);
      })
      .catch((e) => {
        logOut();
        toast.error("something is wrong .Please try again !");
      });
  };
  const handleLogin = (data) => {
    const { email, password } = data;
    login(email, password)
      .then((result) => {
        getToken(email);
      })
      .catch((e) => toast.error(e.message));
  };
  const handleError = () => {
    if (errors) {
      if (errors.email) {
        return toast.error(errors.email.message);
      } else if (errors.password) {
        return toast.error(errors.password.message);
      }
    }
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
        }
      });
  };
  const gooLogin = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "if you Login by google you will consider as a buyer",
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
            src="https://i.ibb.co/D8vXF65/mobile-login-concept-illustration-114360-83.webp"
            alt=""
          />
        </div>
        <div className="card w-96 py-5 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <h1 className="text-4xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              type={'email'}
                className="input input-bordered w-full "
                {...register("email", { required: "Enter your email" })}
              />
              {errors?.email && (
                <p className="text-red-500">{errors?.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              type={'password'}
                className="input input-bordered w-full "
                {...register("password", { required: "Enter your password" })}
              />
              {errors?.password && (
                <p className="text-red-500">{errors?.password?.message}</p>
              )}
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleError} className="btn myButton">
                Login
              </button>
            </div>
          </form>
          <div>
            <label className="ml-5 label">
              <p>
                New to Mobile Bazzar
                <Link
                  to={"/signup"}
                  className="label-text-alt link text-lg text-orange-500 link-hover"
                >
                  {" "}
                  Create an account
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

export default Login;
