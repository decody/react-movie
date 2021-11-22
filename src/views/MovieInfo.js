import React from 'react';
import GlobalStyle from '../assets/GlobalStyle';
import MovieHeader from '../components/MovieHeader';
import MovieFooter from '../components/MovieFooter';
import MovieInfoSide from '../components/MovieInfoSide';
import MovieInfoTitle from '../components/MovieInfoTitle';
import MovieInfoDetail from '../components/MovieInfoDetail';
import styled from 'styled-components';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
const { Header, Footer, Content } = Layout;

const MovieInfo = () => {
    return (
        <>
            <GlobalStyle />
            <StyledMovieInfo>
                <Layout>
                    <Header>
                        <MovieHeader />
                    </Header>
                    <Content>
                        <Row>
                            <Col span={24}>
                                <Button type="primary">영화 수정하기</Button>
                            </Col>
                        </Row>
                        <MovieInfoSide />
                        <MovieInfoTitle />
                        <MovieInfoDetail />
                    </Content>
                    <Footer>
                        <MovieFooter />
                    </Footer>
                </Layout>
            </StyledMovieInfo>           
        </>
    );
};

export default MovieInfo;


const StyledMovieInfo = styled.div`
    height: 80px;
    padding: 20px;
    font-size: 24px;
    a {
        display: block;
        text-align: left;
        color: yellow;
        text-decoration: none;
    }
`