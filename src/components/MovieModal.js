import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { 
    Row, 
    Col, 
    Button, 
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

    console.log("[Movie Modal]")

    console.log("edit: " + isEdit)

    const label = "라벨";
    const min = "1900";
    const max = "2022";

    // const [isEdit, setIsEdit] = useState(false);
    const endpoint = '/movies/'

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    }; 

    const onFinish = (values) => {
        console.log('Success:', values);
        axios.post(endpoint, JSON.stringify({
            title: values.title,
            director: values.director,
            year: values.year,
            rating: values.rating,
            genre: values.genre,
            summary: values.summary,

        }), {
          headers: {
            "Content-Type": 'application/json',
          },
        })
        .then((response) => {
          console.log(response);
        });

        // let data = {
        //     title: values.title,
        //     director: values.director,
        //     year: values.year,
        //     rating: values.rating,
        //     genre: values.genre,
        //     summary: values.summary,
        // };
        // axios.post(endpoint, JSON.stringify(data), {
        //   headers: {
        //     "Content-Type": 'application/json',
        //   },
        // })
        // .then((response) => {
        //   console.log(response);
        // });
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
                title="영화 등록하기"
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
                        <Form.Item name={['movies', 'genre']} label="장르">
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
                                    <Col span={8}>npm 
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

export default MovieModal;

const FormContainer = styled.div`

`