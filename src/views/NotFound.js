import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
    return (
        <>  
            <StyledNotFound>
                <div>
                    페이지를 찾을 수 없습니다
                </div>
            </StyledNotFound>
        </>
    );
};

export default NotFound;

const StyledNotFound = styled.div`
    padding: 80px 0 60px;
`