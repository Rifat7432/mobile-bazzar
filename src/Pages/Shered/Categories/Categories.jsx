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
      
      
      {
        categories.map(category => <Link  to={`/category/${category._id}`} className="mx-4 btn-ghost  my-2 categoryText " key={category._id}>{category.category}</Link>)
      }
     
    </div>
  );
};

export default Categories;
