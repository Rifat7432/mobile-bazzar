import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import  './Categories.css'
const Categories = () => {
  const {
    data: categories = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(
        `http://localhost:5000/categories`
      ).then((res) => res.json()),
  });
  return (
    <div className="bg-slate-800 flex py-3 sm:py-0 flex-wrap items-center justify-center text-slate-100">
      <div className="flex mr-5">
        <div className="dropdown ">
          <label tabIndex={1} className="btn btn-ghost avatar">
            <button className="flex  justify-between">
              Sort By
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </button>
          </label>
          <ul
            tabIndex={1}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 text-slate-800 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
          </ul>
        </div>
      </div>
      
      {
        categories.map(category => <Link  to={`/category/${category._id}`} className="mx-4 btn-ghost  my-2 categoryText " key={category._id}>{category.category}</Link>)
      }
     
    </div>
  );
};

export default Categories;
