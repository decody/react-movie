import React from 'react';
import MovieList from './ListPage/MovieList';
import SearchBox from './ListPage/SearchBox';
import Pagination from './ListPage/Pagination';

const Main = () => {
    return (
        <>       
            <SearchBox />
            <MovieList />
            <Pagination />
        </>
    );
};

export default Main;