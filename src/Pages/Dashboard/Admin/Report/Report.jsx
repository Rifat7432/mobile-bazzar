import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../Shered/Loader/Loader";
import ReportTable from "../../ReportTable/ReportTable";

const Report = () => {
  const {
    data: reportedProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reportedProducts"],
    queryFn: async () => {
      const res = await fetch(
        "https://mobiledazzar.vercel.app/reportedProducts",
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
    <div className="mt-16">
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          {reportedProducts.length > 0 ? (
            <ReportTable
              reportedProducts={reportedProducts}
              refetch={refetch}
            ></ReportTable>
          ) : (
            <h1 className="text-4xl mt-32 font-semibold  text-center">
              no reported product found
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Report;
