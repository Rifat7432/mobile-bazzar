import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import axios from "axios";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://mobiledazzar.vercel.app/categories")
      .then((data) => setCategories(data.data));
  }, []);

  return (
    <div className="bg-slate-800 flex py-3 sm:py-0 flex-wrap items-center justify-center text-slate-100">
      {categories.map((category) => (
        <Link
          to={`/category/${category._id}`}
          className="mx-4 btn-ghost  my-2 categoryText "
          key={category._id}
        >
          {category.category}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
