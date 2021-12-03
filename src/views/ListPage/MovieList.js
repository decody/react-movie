import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import MovieCard from './MovieCard';
import axios from 'axios';
// import baseURL from '../config';
// import usePromise from '../hooks/usePromise';

const MovieList = () => {

    // const baseURL = 'http://localhost:4000/movies';
    const endpoint = '/movies';

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(endpoint)
            .then(response => {
                // console.log(response.data)
                setMovies(response.data)
            })
            .catch(error => {console.log(error)});
    }, []);

    if (!movies) {
        return <div>No data</div>
    }
   
    return (
        <div className="movie-list">
            <StyledMovieList>
                <Row justify="space-around" gutter={16}>
                    {movies.map(movie => (
                        <Col className="gutter-row" span={6} key={movie.id} style={{paddingBottom: 16}}>
                            <MovieCard 
                                movieCard
                                movieId={movie.id}
                                title={movie.title}
                                director={movie.director}
                                year={movie.year}
                                rating={movie.rating}
                                category={movie.genre}
                                imageUrl={movie.imageUrl}
                            />
                        </Col>
                    ))}
                </Row>
            </StyledMovieList>
        </div>
    );
};

export default MovieList;

const StyledMovieList = styled.div`
    padding: 30px 0;
    color: #fff;
`
   