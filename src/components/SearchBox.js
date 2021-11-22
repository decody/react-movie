import React from "react";
import styled from 'styled-components';
import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;

const SearchBox = () => {
    return (
        <>
            <StyledSearchBox>
                <Form
                    name="basic"
                >
                    <Form.Item
                        name="username"
                    >
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="장르선택"
                        >
                            <Option value="공포">공포</Option>
                            <Option value="스릴러">스릴러</Option>
                            <Option value="로맨트코미디">로맨틱코미디</Option>
                        </Select>
                       
                    </Form.Item>
                    <Form.Item
                        name="moveTitle"
                    >
                       <Input placeholder="제목" />
                    </Form.Item>
                    <Form.Item
                        name="username"
                    >
                        <Button type="primary">
                            새 영화 등록하기
                        </Button>
                    </Form.Item>
                </Form>
            </StyledSearchBox>
        </>
    );
};

export default SearchBox;

const StyledSearchBox = styled.div`
    min-height: 30px;
    padding: 60px 10px 40px;
    text-align: center;
`