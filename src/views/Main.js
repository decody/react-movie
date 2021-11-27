import React from 'react';
import MovieList from './ListPage/MovieList';
import SearchBox from './ListPage/SearchBox';
import Paginate from './ListPage/Pagination';

const Main = () => {
    return (
        <>       
            <SearchBox />
            <MovieList></MovieList>
            <Paginate />
        </>
    );
};

export default Main;