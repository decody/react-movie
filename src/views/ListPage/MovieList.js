// import React from 'react';
import styled from 'styled-components';
// import { getMovies } from '../../service/movie';
import { Row, Col } from 'antd';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
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
                                genre={movie.genre}
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
    