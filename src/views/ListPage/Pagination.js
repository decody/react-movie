import React from 'react';
import styled from 'styled-components';
import { Pagination } from 'antd';

const Paginate = ({ movies }) => {
    const pageSize = 12;
    const current = 1;

    return (
        <>  
            <StyledPaginate>
                <Pagination 
                    defaultCurrent={1} 
                    current={current}
                    pageSize={pageSize}
                    total={movies.length} 
                />
            </StyledPaginate>
        </>
    );
};

export default Paginate;

const StyledPaginate = styled.div`
    .ant-pagination {
        text-align: center;
    }
    .ant-pagination-item-link,
    .ant-pagination-item {
        background: var(--gray-color);
        color: #999;
        border-radius: 6px;
        border: 1px solid transparent;
    }
    .ant-pagination-item a {
        color: #999;
    }
`