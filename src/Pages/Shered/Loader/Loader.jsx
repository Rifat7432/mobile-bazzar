import React from 'react';

const Loader = () => {
    return (
        <div className='flex items-center pt-48 justify-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-600"></div>
        </div>
    );
};

export default Loader;