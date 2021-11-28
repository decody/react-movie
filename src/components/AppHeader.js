import React from 'react';
import { Typography } from 'antd';
import { Layout } from 'antd';
import { YoutubeOutlined } from '@ant-design/icons';
const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
    return (
        <Header>
            <Typography>
                <Title>
                    <a href="/">
                        <YoutubeOutlined /> My Movies
                    </a>
                </Title>
            </Typography>
        </Header>
    );
};

export default AppHeader;
