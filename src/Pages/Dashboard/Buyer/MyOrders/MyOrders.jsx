import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../ContextProvider/AuthProvider";
import Loader from "../../../Shered/Loader/Loader";
import MyOrdersTable from "../MyOrdersTable/MyOrdersTable";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const {
    data: orders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["usersSeller", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://mobiledazzar.vercel.app/order/${user?.email}`,
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
          {orders.length > 0 ? (
            <MyOrdersTable orders={orders} refetch={refetch}></MyOrdersTable>
          ) : (
            <h1 className="text-4xl mt-32 font-semibold  text-center">
              no orders found
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
