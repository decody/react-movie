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
        span: 5,
    },
    wrapperCol: {
        span: 19,
    },
};

const MovieModal = (props) => {
    const { 
        isModalVisible, 
        setIsModalVisible, 
        isEdit,
        movie,
    } = props;

    console.log("props: " + props)

    const [form] = Form.useForm();
   
    console.log("[Movie Modal]")

    console.log("수정여부: " + isEdit)
    console.log("movie item data: " + movie);

    const modalTitle = '영화 ' + (isEdit ? '수정' : '등록') + '하기';
    const label = "라벨";
    const min = "1900";
    const max = "2022";
    
    const endpoint = '/movies/';

    const genres = [
        { name: 'horror', value: '공포'},
        { name: 'drama', value: '드라마'},
        { name: 'scifi', value: 'SF'},
        { name: 'thriller', value: '스릴러'},
        { name: 'action', value: '액션'},
        { name: 'documentary', value: '다큐멘터리'},
        { name: 'romantic', value: '로맨스'},
        { name: 'comedy', value: '코미디'},
        { name: 'animation', value: '애니메이션'},
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
        title: movie.title || '',
        director: movie.director || '',
        year: movie.year || '',
        rating: movie.rating || '',
        imageUrl: movie.imageUrl || '',
        genre: [],
        summary: movie.summary || ''
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

        axios.post(endpoint, {
            title: values.title,
            director: values.director,
            year: values.year,
            rating: values.rating,
            genre: values.genre,
            summary: values.summary,
            imgUrl: values.imgUrl
        }, {
          headers: {
            "Content-Type": 'application/json',
          },
        })
        .then((response) => {
            console.log(response);
            setIsModalVisible(false);
            // 모달 닫은 후 무비 리스트 리로딩
            // props.history.push('/');
        });
    };

    const handleEdit = value => {
        console.log("edit");
        if (isEdit) {
            onUpdate()
        }
        setIsModalVisible(false);
    };

    const onUpdate = (movie) => {
        axios.update(endpoint, {
            title: movie.title,
            director: movie.director,
            year: movie.year,
            rating: movie.rating,
            genre: movie.genre,
            summary: movie.summary,
            imgUrl: movie.imgUrl
        }, {
          headers: {
            "Content-Type": 'application/json',
          },
        })
        .then((response) => {
            console.log(response);
        });
    };

    const validateMessages = {
        required: `${label} is required!`,
        types: {
            email: `${label} is not a valid email!`,
            number: `${label} is not a valid number!`,
        },
        number: {
            range: `${label} must be between ${min} and ${max}`,
        },
    };

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    return (
        <>
            <Modal 
                forceRender
                title={modalTitle}
                visible={isModalVisible}
                onCancel={handleCancel}
                onOk={handleOk} 
                footer={[
                    <Button key="back" onClick={handleCancel}>취소</Button>,
                    (isEdit) 
                        ? <Button key="edit" type="primary" onClick={handleEdit}>수정</Button>
                        : <Button key="submit" type="primary" onClick={handleOk}>등록</Button>,
                ]}
            >
                <FormContainer>
                    <Form 
                        {...layout} 
                        form={form}
                        name="movieForm"
                        validateMessages={validateMessages}
                        initialValues={isEdit ? initialValueForUpdate : initialValueForCreate}
                    >
                        <Form.Item
                            name="title"
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
                            name="director"
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
                            name="year"
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
                        <Form.Item name="rating" label="별점">
                            <Input />
                        </Form.Item>
                        <Form.Item name="genre" label="장르">
                            <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                                <Row>
                                    {genres.map((genre, index) => (
                                        <Col span={8} key={index}>
                                            <Checkbox value={genre.name}>
                                                {genre.value}
                                            </Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </Checkbox.Group>
                        </Form.Item>
                        <Form.Item name="summary" label="소개글">
                            <Input.TextArea />
                        </Form.Item>
                    </Form>
                </FormContainer>
            </Modal>
        </>
    );
};

export default MovieModal;

const FormContainer = styled.div`

`