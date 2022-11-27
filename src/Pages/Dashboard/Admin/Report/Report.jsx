import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ReportTable from '../../ReportTable/ReportTable';

const Report = () => {
    const { data: reportedProducts = [],refetch } = useQuery({
        queryKey: ["usersBuyer"],
        queryFn: async () => {
          const res = await fetch(
            'http://localhost:5000/reportedProducts',
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
             { reportedProducts.length > 0 ?  <ReportTable reportedProducts={reportedProducts} refetch={refetch}></ReportTable> : <h1 className='text-4xl mt-32 font-semibold  text-center'>no reported product found</h1>
        }
        </div>
    );
};

export default Report;