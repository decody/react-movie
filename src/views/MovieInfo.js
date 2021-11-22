import React from 'react';
import MovieInfoSide from '../components/MovieInfoSide';
import MovieInfoTitle from '../components/MovieInfoTitle';
import MovieInfoDetail from '../components/MovieInfoDetail';
import { Row, Col } from 'antd';
import { Button } from 'antd';

const MovieInfo = () => {
    return (
        <>
            <Row>
                <Col span={24}>
                    <Button type="primary">영화 수정하기</Button>
                </Col>
            </Row>
            <MovieInfoSide />
            <MovieInfoTitle />
            <MovieInfoDetail />
        </>
    );
};

export default MovieInfo;
