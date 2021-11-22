import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
    return (
        <div className="movie-list">
            <StyledMovieList>
                <Row justify="space-around" gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <MovieCard />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <MovieCard />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <MovieCard />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <MovieCard />
                    </Col>
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
   