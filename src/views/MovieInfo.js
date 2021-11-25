import React from 'react';
import MovieInfoSide from './InfoPage/MovieInfoSide';
import MovieInfoTitle from './InfoPage/MovieInfoTitle';
import MovieInfoDetail from './InfoPage/MovieInfoDetail';
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
