import styled from 'styled-components';
import genres from '../../config/genres'
import {Row, Col, Input, Select} from 'antd';
const { Search } = Input;
const { Option } = Select;

const SearchBox = ({onSearch, onSort}) => {
    function handleChange(value) {
        console.log(`selected ${value}`);
        onSort(value);
    }

    return (
        <> 
            <StyledSearchBox>
                <Row>
                    <Col span={8}>
                        <Select
                            defaultValue="장르선택"
                            style={{
                                width: 'calc(100% - 10px)'
                            }}
                            size="large"
                            onChange={handleChange}
                        >
                            {genres.map(genre => (
                                <Option 
                                    key={genre.name}
                                    value={genre.name}
                                >
                                    {genre.value}
                                </Option>    
                            ))}
                    </Select>
                    </Col>
                    <Col span={16}>
                        <Search
                            placeholder="영화 검색"
                            allowClear="allowClear"
                            enterButton
                            size="large"
                            onSearch={onSearch}
                        />
                    </Col>
                </Row>
            </StyledSearchBox>
        </>
    );
};

export default SearchBox;

const StyledSearchBox = styled.div `
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