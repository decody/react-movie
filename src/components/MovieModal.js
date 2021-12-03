import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { 
    Row, 
    Col,
    Modal, 
    Form, 
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
    const { isModalVisible, setIsModalVisible, isEdit} = props;
    const [form] = Form.useForm();

    console.log("[Movie Modal]")

    console.log("edit: " + isEdit)

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
                title="영화 등록하기"
                visible={isModalVisible}
                cancelText="취소"
                okText="등록"
                onCancel={handleCancel}
                onOk={handleOk} 
            >
                <FormContainer>
                    <Form 
                        {...layout} 
                        form={form}
                        name="movieForm"
                        validateMessages={validateMessages}
                        initialValues={{
                            title: '',
                            director: '',
                            year: '',
                            rating: '',
                            imageUrl: '',
                            genre: [],
                            summary: ''
                        }}
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