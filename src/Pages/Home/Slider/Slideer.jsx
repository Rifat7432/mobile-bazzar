import { useQuery } from "@tanstack/react-query";
import React from "react";
import ImageGallery from "react-image-gallery";
const Slider = ({ advertiseProducts }) => {
  const { data: allProducts = [], refetch } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await fetch(`https://mobiledazzar.vercel.app/allProducts`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  const productImage = [];
  if (advertiseProducts.length > 0) {
    advertiseProducts.map((advertiseProduct) => {
      productImage.push({
        original: advertiseProduct.img,
        thumbnail: advertiseProduct.img,
      });
    });
  } else {
    allProducts.map((allProduct) => {
      productImage.push({
        original: allProduct.img,
        thumbnail: allProduct.img,
      });
    });
  }

  return <ImageGallery items={productImage} />;
};

export default Slider;
