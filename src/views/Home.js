import React from 'react';
import GlobalStyle from '../assets/GlobalStyle';
import MovieHeader from '../components/MovieHeader';
import MovieFooter from '../components/MovieFooter';
import MovieList from '../components/MovieList';
import SearchBox from '../components/SearchBox';
import Pagination from '../components/Pagination';
import styled from 'styled-components';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

const Home = () => {
    return (
        <>
            <GlobalStyle />
            <StyledHome>
                <Layout>
                    <Header>
                        <MovieHeader />
                    </Header>
                    <Content>
                        <SearchBox />
                        <MovieList />
                        <Pagination />
                    </Content>
                    <Footer>
                        <MovieFooter />
                    </Footer>
                </Layout>
            </StyledHome>
        </>
    );
};

export default Home;

const StyledHome = styled.div`
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