import React from 'react';
import { Typography } from 'antd';
import { Layout } from 'antd';
const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
    return (
        <Header>  
            <Typography>
                <Title>My Movies</Title>
            </Typography>
        </Header>
    );
};

export default AppHeader;
