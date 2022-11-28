import { useEffect } from "react";
import { useState } from "react";

const useAdmin = (email) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://mobiledazzar.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.isAdmin);
          setAdminLoading(false);
        });
    }
  }, [email]);
  return [admin, adminLoading];
};
export default useAdmin;
