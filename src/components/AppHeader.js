import React from 'react';
import { Typography } from 'antd';
import { Layout } from 'antd';
const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
    return (
        <Header>  
            <a href="/">
                <Typography>
                    <Title>My Movies</Title>
                </Typography>
            </a>
        </Header>
    );
};

export default AppHeader;
