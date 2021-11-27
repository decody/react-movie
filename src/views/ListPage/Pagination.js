import React from 'react';
import { Pagination } from 'antd';

const Paginate = () => {
    return (
        <>  
            <Pagination defaultCurrent={1} total={20} />
        </>
    );
};

export default Paginate;
