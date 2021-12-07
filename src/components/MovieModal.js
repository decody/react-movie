import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
    Row,
    Col,
    Modal,
    Form,
    Button,
    Checkbox,
    InputNumber,
    Input
} from 'antd';

const layout = {
    labelCol: {
        span: 5
    },
    wrapperCol: {
        span: 19
    }
};

const MovieModal = (props) => {
    const {isModalVisible, setIsModalVisible, movie} = props;

    console.log("props: " + props)

    const [form] = Form.useForm();

    // const {     title: movie?.title || '',     director: movie?.director || '',
    // year: movie?.year || '',     rating: movie?.rating || '',     imageUrl:
    // movie?.imageUrl || '',     genre: [],     summary: movie?.summary || '' } =
    // movie;

    console.log("[Movie Modal]");

    // const movie = {     title: movie?.title || '',     director: movie?.director
    // || '',     year: movie?.year || '',     rating: movie?.rating || '',
    // imageUrl: movie?.imageUrl || '',     genre: [],     summary: movie?.summary
    // || '' };

    console.log("movie item data: " + movie);

    const modalTitle = '영화 ' + (
        movie
            ? '수정'
            : '등록'
    ) + '하기';
    const label = "라벨";
    const min = "1900";
    const max = "2022";

    const endpoint = '/movies/';

    const genres = [
        {
            name: 'horror',
            value: '공포'
        }, {
            name: 'drama',
            value: '드라마'
        }, {
            name: 'scifi',
            value: 'SF'
        }, {
            name: 'thriller',
            value: '스릴러'
        }, {
            name: 'action',
            value: '액션'
        }, {
            name: 'documentary',
            value: '다큐멘터리'
        }, {
            name: 'romantic',
            value: '로맨스'
        }, {
            name: 'comedy',
            value: '코미디'
        }, {
            name: 'animation',
            value: '애니메이션'
        }
    ];

    console.log("movie in modal:" + movie);

    const initialValueForCreate = {
        title: '',
        director: '',
        year: '',
        rating: '',
        imageUrl: '',
        genre: [],
        summary: ''
    };

    const initialValueForUpdate = {
        title: movie
            ?.title || '',
        director: movie
            ?.director || '',
        year: movie
            ?.year || '',
        rating: movie
            ?.rating || '',
        imageUrl: movie
            ?.imageUrl || '',
        genre: [],
        summary: movie
            ?.summary || ''
    };

    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                form.resetFields();
                onCreate(values);
            })
            .catch((info) => {
                console.log('Validate Failed:', info);
            });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onCreate = (values) => {
        console.log('Received values of form: ', values);

        axios
            .post(endpoint, {
                title: values.title,
                director: values.director,
                year: values.year,
                rating: values.rating,
                genre: values.genre,
                summary: values.summary,
                imgUrl: values.imgUrl
            })
            .then((response) => {
                console.log(response);
                setIsModalVisible(false);
                // 모달 닫은 후 무비 리스트 리로딩 props.history.push('/');
            });
    };

    const handleEdit = value => {
        console.log("edit");
        if (value) {
            onUpdate()
        }
        setIsModalVisible(false);
    };

    // ... form.getFieldsValue(true)

    const onUpdate = (movie) => {
        axios
            .update(endpoint, {
                title: movie.title,
                director: movie.director,
                year: movie.year,
                rating: movie.rating,
                genre: movie.genre,
                summary: movie.summary,
                imgUrl: movie.imgUrl
            })
            .then((response) => {
                console.log(response);
            });
    };

    const validateMessages = {
        required: '${label}은 필수 입력값입니다',
        types: {
            number: '${label}은 숫자만 입력해야 합니다'
        },
        number: {
            range: '${label}는 최소값 ${min}이며, 최대값은 ${max}입니다'
        }
    };

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    return (
        <> < Modal forceRender title = {
            modalTitle
        }
        visible = {
            isModalVisible
        }
        onCancel = {
            handleCancel
        }
        onOk = {
            handleOk
        }
        footer = {
            [
                <Button key="back" onClick={handleCancel}>취소</Button>,
                (movie)
                    ? <Button key="edit" type="primary" onClick={handleEdit}>수정</Button>
                    : <Button key="submit" type="primary" onClick={handleOk}>등록</Button>
            ]
        } > <FormContainer>
            <Form
                {...layout}
                form={form}
                name="movieForm"
                validateMessages={validateMessages}
                initialValues={movie}>
                <Form.Item
                    name="title"
                    label="영화제목"
                    shouldUpdate="shouldUpdate"
                    rules={[{
                            required: true
                        }
                    ]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="director"
                    label="감독"
                    shouldUpdate="shouldUpdate"
                    rules={[{
                            required: true
                        }
                    ]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="year"
                    label="개봉연도"
                    shouldUpdate="shouldUpdate"
                    rules={[{
                            type: 'number',
                            min: 1900,
                            max: 2022
                        }
                    ]}>
                    <InputNumber/>
                </Form.Item>
                <Form.Item name="rating" label="별점" shouldUpdate="shouldUpdate">
                    <Input/>
                </Form.Item>
                <Form.Item name="genre" label="장르" shouldUpdate="shouldUpdate">
                    <Checkbox.Group
                        style={{
                            width: '100%'
                        }}
                        onChange={onChange}>
                        <Row>
                            {
                                genres.map((genre, index) => (
                                    <Col span={8} key={index}>
                                        <Checkbox value={genre.name}>
                                            {genre.value}
                                        </Checkbox>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item name="summary" label="소개글" shouldUpdate="shouldUpdate">
                    <Input.TextArea/>
                </Form.Item>
            </Form>
        </FormContainer>
    </Modal>
</>
    );
};

export default MovieModal;

const FormContainer = styled.div `

`