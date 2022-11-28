import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const CategorySection = () => {
  const {
    data: categories = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(`https://mobiledazzar.vercel.app/categories`).then((res) =>
        res.json()
      ),
  });
  return (
    <div className="mt-20 mb-8">
      <h1 className="my-5 text-5xl font-bold">Categories</h1>
      <div className="grid grid-col-1 md:grid-cols-2 py-5 gap-4 md:gap-16">
        {categories.map((category) => (
          <div key={category._id} className="shadow-xl rounded-xl bg-slate-200 w-3/4 sm:w-80  mx-auto">
            <Link
              to={`/category/${category._id}`}
              className="mx-4 btn-ghost  my-2 categoryText "
              key={category._id}
            >
              <img className="h-48 w-full" src={category.categoryLogo} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
