import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { 
    Row, 
    Col, 
    Button, 
    Modal, 
    Typography, 
    Badge, 
    Form, 
    Checkbox, 
    InputNumber,
    Input 
} from 'antd';
import { StarFilled } from '@ant-design/icons';
const { Text, Title } = Typography;

const MovieInfo = (props) => {
    console.log("[Movie Info]")
    
    const movieId = props.match.params.movieId;
    const endpoint = '/movies/' + movieId;
    
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

    const layout = {
        labelCol: {
            span: 5,
        },
        wrapperCol: {
            span: 19,
        },
    };
    
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    }; 

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }
    
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
                                    <Badge color="green" text={category} />
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
            <Modal 
                title="영화수정하기" 
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}
            >
                <FormContainer>
                    <Form 
                        {...layout} 
                        name="nest-messages" 
                        onFinish={onFinish}
                        validateMessages={validateMessages}
                    >
                        <Form.Item
                            name={['movies', 'title']}
                            label="영화제목"
                            rules={[
                            {
                                required: true,
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['movies', 'director']}
                            label="감독"
                            rules={[
                            {
                                required: true,
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['movies', 'year']}
                            label="개봉연도"
                            rules={[
                            {
                                type: 'number',
                                min: 1900,
                                max: 2022,
                            },
                            ]}
                        >
                            <InputNumber />
                        </Form.Item>
                        <Form.Item name={['movies', 'rating']} label="별점">
                            <Input />
                        </Form.Item>
                        <Form.Item name={['movies', 'category']} label="장르">
                            <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                                <Row>
                                    <Col span={8}>
                                        <Checkbox value="A">공포</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="B">드라마</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="C">SF</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="D">스릴러</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="E">액션</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="F">다큐멘터리</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="G">로맨스</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="H">액션</Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="I">애니메이션</Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>
                        </Form.Item>
                        <Form.Item name={['movies', 'summary']} label="소개글">
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item>
                            <Button danger>
                            삭제하기
                            </Button>
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                            등록하기
                            </Button>
                        </Form.Item>
                    </Form>
                </FormContainer>
            </Modal>
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
    max-height: 170px;
    margin: 0 0 20px;
    text-align: center;
    color: #666;
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
`
const FormContainer = styled.div`

`