import React from 'react';
import styled from 'styled-components';
import MovieList from './ListPage/MovieList';
import SearchBox from './ListPage/SearchBox';
import Paginate from './ListPage/Pagination';

const Main = () => {
    return (
        <>  
            <StyledMain>     
                <SearchBox />
                <MovieList />
                <Paginate />
            </StyledMain>
        </>
    );
};

export default Main;

const StyledMain = styled.div`
    padding: 80px 0 60px;
`