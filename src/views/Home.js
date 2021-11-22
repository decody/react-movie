import React from 'react';
import MovieList from '../components/MovieList';
import SearchBox from '../components/SearchBox';
import Pagination from '../components/Pagination';

const Home = () => {
    return (
        <>       
            <SearchBox />
            <MovieList />
            <Pagination />
        </>
    );
};

export default Home;