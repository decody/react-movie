import React from "react";
import styled from 'styled-components';

const MovieInfoSide = () => {
    return (
        <>
            <StyledMovieInfoSide>
                무비 상세 사이드
            </StyledMovieInfoSide>
        </>
    );
};

export default MovieInfoSide;

const StyledMovieInfoSide = styled.div`
    min-height: 30px;
    padding: 60px 10px 40px;
    text-align: center;
    font-size: 14px;
`