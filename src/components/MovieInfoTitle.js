import React from "react";
import styled from 'styled-components';

const MovieInfoTitle = () => {
    return (
        <>
            <StyledMovieInfoTitle>
                랑종
                5/9
            </StyledMovieInfoTitle>
        </>
    );
};

export default MovieInfoTitle;

const StyledMovieInfoTitle = styled.div`
    min-height: 30px;
    padding: 60px 10px 40px;
    text-align: center;
    font-size: 14px;
`