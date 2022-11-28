import { useEffect } from "react";
import { useState } from "react";

const useBuyer = (email) => {
  const [buyer, setBuyer] = useState(false);
  const [buyerLoading, setBuyerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://mobiledazzar.vercel.app/users/Buyer/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setBuyer(data.isBuyer);
          setBuyerLoading(false);
        });
    }
  }, [email]);
  return [buyer, buyerLoading];
};
export default useBuyer;
