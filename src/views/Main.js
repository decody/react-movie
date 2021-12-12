import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMovies } from '../service/movie'; 
import {Row, Col, Button} from 'antd';
import MovieList from './ListPage/MovieList';
import SearchBox from './ListPage/SearchBox';
import Paginate from './ListPage/Pagination';
import MovieModal from '../components/MovieModal';
// import { ConsoleSqlOutlined } from '@ant-design/icons';

const Main = () => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        getMovies()
            .then(response => {
                setMovies(response.data)
            })
            .catch(error => {console.log(error)});
    }, []);

    if (!movies) {
        return <div>No data</div>
    }
    
    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const onSearch = (value) => {
        console.log("[onSearch function from SearchBox]");
        console.log("search keyword: " + value);

        if (value) {
            getMovies()
                .then(response => {
                    setMovies(
                        response.data.filter(
                            movie => movie.title === value
                        )
                    );
                })
                .catch(error => {console.log(error)})
        }
    }

    const onSort = (value) => {
        console.log("[onSort function from SearchBox]");
        console.log("sorting genre: " + value);

        if (value) {
            getMovies()
                .then(response => {
                    setMovies(response => {
                            response.data.filter(
                                movie => movie.genre.includes(value) === true
                            ) 
                        }
                    );
                })
                .catch(error => {console.log(error)});
        }
    };
    
    return (
        <>  
            <StyledMain>     
                <Row style={{padding: '40px 0 20px'}}>
                    <Col span={16}>
                        <SearchBox 
                            onSearch={onSearch} 
                            onSort={onSort}
                        />
                    </Col>
                    <Col span={8} style={{textAlign: 'right'}}>
                        <Button 
                            type="primary" 
                            shape="round" 
                            size="large" 
                            onClick={showModal}
                        >
                            새 영화 등록하기
                        </Button>
                    </Col>
                </Row>
                <MovieList movies={movies} />
                <Paginate movies={movies} />
            </StyledMain>
            <MovieModal
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
            />
        </>
    );
};

export default Main;

const StyledMain = styled.div`
    padding: 80px 0 60px;
`