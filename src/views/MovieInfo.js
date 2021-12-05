import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { 
    Row, 
    Col, 
    Button, 
    Typography, 
    Badge, 
    Modal,
} from 'antd';
import { StarFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import MovieModal from '../components/MovieModal';

const { Text, Title } = Typography;
const { confirm } = Modal;

const MovieInfo = (props) => {
    console.log("[Movie Info]")
    
    const movieId = props.match.params.movieId;
    const endpoint = '/movies/' + movieId;
    
    const [movie, setMovie] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEdit, setIsEdit] = useState(true);
        
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
        genre,
        rating,
        imageUrl,
    } = movie;

    console.log("영화정보: " + movie);
    
    const showModal = () => {
        setIsModalVisible(true);
        setIsEdit(true);
    };

    const onRemove = id => {
        console.log("call remove apii");

        if (id) {
            axios.delete(endpoint)
                .then(response => {
                    console.log(response);
                    props.history.push('/');
                })
                .catch(error => {console.log(error)})
        }
    }

    const showConfirm = () => {
        confirm({
            title: '해당 영화 데이터를 삭제하시겠습니까?',
            icon: <ExclamationCircleOutlined />,
            content: `삭제할 영화: ${title}`,
            okText: '삭제',
            okType: 'danger',
            cancelText: '취소',
            onOk() {
                console.log("OK");
                onRemove(movieId);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    

    return (
        <>
            <StyledMovieInfo>
                <Row style={{padding: '50px 0 30px'}}>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" shape="round" size="large" onClick={showModal}>
                            영화 수정하기
                        </Button>
                        <Button type="danger" shape="round" size="large" onClick={showConfirm}>
                            영화 삭제하기
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Sidebar>
                            {imageUrl 
                                ? <Imgbox><img src={imageUrl} alt={title} style={{width: '100%'}} /></Imgbox>
                                : <NoImgbox>해당이미지가 없습니다.</NoImgbox>
                            }
                            <Director>
                                <Title level={5}>감독</Title>
                                <Text>{director}</Text>
                            </Director>
                            <Category>
                                <Title level={5}>장르</Title>
                                <div>
                                    <Badge color="green" text={genre} />
                                </div>
                            </Category>
                        </Sidebar>
                    </Col>
                    <Col span={18}>
                        <MovieContent>
                            <MovieTitlebar>
                                <Title level={4}>{title}</Title>
                                <Year>
                                    <Text>{year}</Text>
                                </Year>
                                <Rating>
                                    <StarFilled />
                                    <Text style={{ paddingLeft: '10px', color: '#f7b928' }}>{rating}</Text>
                                </Rating>
                            </MovieTitlebar>
                            <Text>{summary}</Text>
                        </MovieContent>
                    </Col>
                </Row>
            </StyledMovieInfo>
            <MovieModal 
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                isEdit={isEdit}
                movie={movie}
            />
        </>
    );
};

export default MovieInfo;

const Year = styled.div`
    padding-top: 10px;
    color: #f7b928;
`

const Rating = styled.div`
    padding-top: 10px;
    color: #f7b928;
`

const Director = styled.div`
    padding-bottom: 30px;
`

const Category = styled.div`

`

const Imgbox = styled.div`
    max-height: 170px;
    margin: 0 0 20px;
    border-radius: 12px;
    overflow: hidden;
`

const NoImgbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 170px;
    margin: 0 0 20px;
    text-align: center;
    color: #999;
    background: #333;
    border-radius: 12px;
`

const Sidebar = styled.div`
    background: var(--gray-color);
    border-radius: 20px;
    min-height: 400px;
    padding: 20px;

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
`

const MovieContent = styled.div`
    background: var(--gray-color);
    border-radius: 20px;
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
`

const MovieTitlebar = styled.div`
    padding-bottom: 20px;
`


const StyledMovieInfo = styled.div`
    padding: 80px 0 60px;

    .ant-btn + .ant-btn {
        margin-left: 10px;
    }
`
