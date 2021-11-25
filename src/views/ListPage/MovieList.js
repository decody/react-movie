import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import MovieCard from './MovieCard';
import axios from 'axios';
// import { ConsoleSqlOutlined } from '@ant-design/icons';
// import usePromise from '../hooks/usePromise';

const baseUrl = 'http://localhost:4000/movies';

const MovieList = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(baseUrl)
            .then(response => {
                console.log(response.data)
                setMovies(response.data)
            })
            .catch(error => { console.log(error) });
    }, []);

    if (!movies) {
        return <div>No data</div>
    }
   
    return (
        <div className="movie-list">
            <StyledMovieList>
                <Row justify="space-around" gutter={16, 16}>
                    {movies && movies.map((movie, index) => (
                        <Col className="gutter-row" span={6} key={ index } style={{ paddingBottom: 16, textAlign: 'center' }}>
                            <MovieCard 
                                movieCard
                                movieId={ movie.id }
                                title={ movie.title }
                                director={ movie.director }
                                year={ movie.year }
                                rating={ movie.rating }
                                category={ movie.category }
                                imageUrl={ movie.imageUrl }
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
   