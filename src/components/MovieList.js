import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col, Card, Tag, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';
const { Meta } = Card;
const { Text } = Typography;

const MovieList = () => {
    return (
        <div className="movie-list">
            <StyledMovieList>
                <Row justify="center" gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <Link to="/info">   
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://w.namu.la/s/2df291471786eddab777fc94d47fe4dcb6aea61b1a9004bc3298936f43e701be09bd688c61a0d38a3a177f3c15b21a560725b6b33bb5232409a38d0b9de5f33acebd880a0976aae96d44848c81893f5ecba1656081577344f07f4f95168db19e" />}
                            >   
                                <div><StarFilled /> <Text>5.9</Text></div>
                                <Meta title="랑종 (2021)" description="Bangjong Pisanthanakun" />
                                <div>
                                    <Tag color="#f50">공포</Tag>
                                    <Tag color="#2db7f5">스릴러</Tag>
                                </div>
                            </Card>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Link to="/info">
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://w.namu.la/s/2df291471786eddab777fc94d47fe4dcb6aea61b1a9004bc3298936f43e701be09bd688c61a0d38a3a177f3c15b21a560725b6b33bb5232409a38d0b9de5f33acebd880a0976aae96d44848c81893f5ecba1656081577344f07f4f95168db19e" />}
                            >
                                <div><StarFilled /> <Text>5.9</Text></div>
                                <Meta title="랑종 (2021)" description="Bangjong Pisanthanakun" />
                                <div>
                                    <Tag color="#f50">공포</Tag>
                                    <Tag color="#2db7f5">스릴러</Tag>
                                </div>
                            </Card>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Link to="/info">
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://w.namu.la/s/2df291471786eddab777fc94d47fe4dcb6aea61b1a9004bc3298936f43e701be09bd688c61a0d38a3a177f3c15b21a560725b6b33bb5232409a38d0b9de5f33acebd880a0976aae96d44848c81893f5ecba1656081577344f07f4f95168db19e" />}
                            >
                                <div><StarFilled /> <Text>5.9</Text></div>
                                <Meta title="랑종 (2021)" description="Bangjong Pisanthanakun" />
                                <div>
                                    <Tag color="#f50">공포</Tag>
                                    <Tag color="#2db7f5">스릴러</Tag>
                                </div>
                            </Card>
                        </Link>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Link to="/info">
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://w.namu.la/s/2df291471786eddab777fc94d47fe4dcb6aea61b1a9004bc3298936f43e701be09bd688c61a0d38a3a177f3c15b21a560725b6b33bb5232409a38d0b9de5f33acebd880a0976aae96d44848c81893f5ecba1656081577344f07f4f95168db19e" />}
                            >
                                <div><StarFilled /> <Text>5.9</Text></div>
                                <Meta title="랑종 (2021)" description="Bangjong Pisanthanakun" />
                                <div>
                                    <Tag color="#f50">공포</Tag>
                                    <Tag color="#2db7f5">스릴러</Tag>
                                </div>
                            </Card>
                        </Link>
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
   