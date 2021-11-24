import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import MovieCard from '../components/MovieCard';
import axios from 'axios';
// import { ConsoleSqlOutlined } from '@ant-design/icons';
// import usePromise from '../hooks/usePromise';

const baseUrl = 'http://localhost:4000/movies';

const MovieList = () => {
    const [movieData, setMovieData] = useState(null);
    
    const getMovieData = async () => {
        const response = await axios.get(baseUrl);
        setMovieData(response.data);
        console.log(JSON.stringify(movieData));
    };

    getMovieData();

    
    // useEffect(() => {
    //     async function getMovies() {
    //         const response = await axios.get(baseUrl)
    //         setMovies(response.data)
    //     }
    //     getMovies();
    // }, []);

    // if (!movies) {
    //     return <div>No data</div>
    // }

    // axios.get(baseUrl)
    //     .then(response => { 
    //         console.log(response.data);
    //      })
    //     .catch(error => { console.log(error) });
    
    return (
        <div className="movie-list">
            {/* <div>
                {movies.map(movie => (
                    <div key={movie.id}>movie</div>
                ))}
                <div></div>
            </div> */}
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
   