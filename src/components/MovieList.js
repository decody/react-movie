import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import MovieCard from '../components/MovieCard';
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
                // setMainMovies(response.data)
            })
            .catch(error => { console.log(error) });
    }, []);

    if (!movies) {
        return <div>No data</div>
    }

    // const getMovieData = async () => {
    //     const response = await axios.get(baseUrl);
    //     setMovieData(response.data);
    //     console.log(JSON.stringify(movieData));
    // };

    // getMovieData();
   
    return (
        <div className="movie-list">
            {/* <div>
                {movies && movies.map((movie, index) => (
                    <div key={index}>
                        <div>{movie.id}</div>
                        <div>{movie.title}</div>
                        <div>{movie.director}</div>
                        <div>{movie.rating}</div>
                        <div>{movie.title}</div>
                    </div>
                ))}
            </div> */}
            
            <StyledMovieList>
                <Row justify="space-around" gutter={16, 16}>
                    {movies && movies.map((movie, index) => (
                        <Col className="gutter-row" span={6} key={ index } style={{ paddingBottom: '16px' }}>
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
   