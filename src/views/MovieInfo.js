import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Row, Col, Button, Modal, Typography, Badge } from 'antd';
import { StarFilled } from '@ant-design/icons';
const { Text, Title } = Typography;

const MovieInfo = (props) => {
    console.log("[Movie Info]")
    const baseURL = 'http://localhost:4000/movies';
    const movieId = props.match.params.movieId;
    let endpoint = baseURL + `/${movieId}`;
    
    const [movie, setMovie] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    useEffect(() => {
        axios.get(endpoint)
            .then(response => {
                console.log(response.data)
                setMovie(response.data)
            })
            .catch(error => {console.log(error)});
    }, [endpoint]);

    if (!movie) {
         return <div>No data</div>
    }
    const {
        title,
        year,
        summary,
        director,
        category,
        rating,
        imageUrl,
    } = movie;

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    }; 
    
    return (
        <>
            <StyledMovieInfo>
                <Row style={{padding: '50px 0 30px'}}>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button 
                            type="primary"
                            shape="round" 
                            size="large"
                            onClick={showModal}
                        >
                            영화 수정하기
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <div class="sidebar">
                            {imageUrl 
                                ? <div class="imgbox"><img src={imageUrl} alt={title} style={{width: '100%'}} /></div>
                                : <div class="no-imgbox">해당이미지가 없습니다.</div>
                            }
                            <div style={{ paddingBottom: '30px'}}>
                                <Title level={5}>감독</Title>
                                <Text>{director}</Text>
                            </div>
                            <div>
                                <Title level={5}>장르</Title>
                                <div>
                                    <Badge color="green" text={category} />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className="movie-content">
                            <div style={{ paddingBottom: '20px'}}>
                                <Title level={4}>{title}</Title>
                                <div>
                                    <Text>{year}</Text>
                                </div>
                                <div style={{ paddingTop: '10px', color: '#f7b928' }}>
                                    <StarFilled />
                                    <Text style={{ paddingLeft: '10px', color: '#f7b928' }}>{rating}</Text>
                                </div>
                            </div>
                            <Text>{summary}</Text>
                        </div>
                    </Col>
                </Row>
            </StyledMovieInfo>
            <Modal 
                title="영화수정하기" 
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}
            >
                <div>
                    영화 수정하기
                </div>
            </Modal>
        </>
    );
};

export default MovieInfo;

const StyledMovieInfo = styled.div`
    padding: 80px 0 60px;

    .movie-container {
        display: flex;
        justify-content: flex-start;
    }

    .sidebar,
    .movie-content {
        background: var(--gray-color);
        border-radius: 20px;
    }

    .sidebar {
        min-height: 400px;
        padding: 20px;

        .imgbox {
            max-height: 170px;
            margin: 0 0 20px;
            border-radius: 12px;
            overflow: hidden;
        }

        .no-imgbox {
            max-height: 170px;
            margin: 0 0 20px;
            text-align: center;
            color: #666;
            background: #333;
            border-radius: 12px;
        }

        h5 {
            margin-bottom: 5px;
            color: #a9a9a9;
        }

        .ant-typography {
            color: #a9a9a9;
        }

        .ant-badge-status-text {
            color: #52c41a;
        }
    }

    .movie-content {
        min-height: 400px;
        margin: 0 0 0 30px;
        padding: 30px;

        h4.ant-typography  {
            margin-bottom: 5px;
            padding: 0;
            color: #fff;
            font-size: 24px;
        }

        .ant-typography {
            line-height: 1.4em;
            color: #a9a9a9;
        }
    }
`
