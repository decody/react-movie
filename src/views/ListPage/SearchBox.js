import React, {useState} from 'react';
import styled from 'styled-components';
import MovieModal from '../../components/MovieModal';
import {Row, Col, Input, Button, Select} from 'antd';
const {Search} = Input;
const {Option} = Select;

const SearchBox = () => {
    const [searchTitle, setSearchTitle] = useState('');

    const onSearch = value => {
        console.log(value);

    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <> < StyledSearchBox > <Row>
            <Col span={4}>
                <Select
                    defaultValue="choose"
                    style={{
                        width: 'calc(100% - 10px)'
                    }}
                    size="large"
                    onChange={handleChange}>
                    <Option value="choose">장르</Option>
                    <Option value="option1">공포</Option>
                    <Option value="option2">스릴러</Option>
                </Select>
            </Col>
            <Col span={12}>
                <Search
                    placeholder="영화 검색"
                    allowClear="allowClear"
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}/>
            </Col>
            <Col
                span={8}
                style={{
                    textAlign: 'right'
                }}>
                <Button type="primary" shape="round" size="large" onClick={showModal}>
                    새 영화 등록하기
                </Button>
            </Col>
        </Row>
    </StyledSearchBox>
    <MovieModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}/>
</>
    );
};

export default SearchBox;

const StyledSearchBox = styled.div `
   padding: 40px 0 20px;

   .ant-input-group-wrapper {
       border-radius: 8px;
       overflow: hidden;
   }
   .ant-select .ant-select-selector {
       padding: 0 10px;
       border-radius: 8px;
   }
   .ant-input-search .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
`