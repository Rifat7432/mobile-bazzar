import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../Shered/Loader/Loader";
import Advertised from "../Advertised/Advertised";
import CategorySection from "../CategorySection/CategorySection";
import Discount from "../Discount/Discount";
import Slider from "../Slider/Slideer";

const Home = () => {
  const {
    data: advertiseProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["advertiseProduct"],
    queryFn: async () => {
      const res = await fetch(
        `https://mobiledazzar.vercel.app/advertiseProduct`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          <div className="pt-5">
            {" "}
            <Slider advertiseProducts={advertiseProducts}></Slider>
            <Discount></Discount>
          </div>
          {advertiseProducts.length > 0 && (
            <Advertised
              advertiseProducts={advertiseProducts}
              refetch={refetch}
            ></Advertised>
          )}
          <CategorySection></CategorySection>
        </div>
      )}
    </div>
  );
};

export default Home;
