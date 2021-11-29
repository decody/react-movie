import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/">
                        <YoutubeOutlined /> My Movies
                    </Link>
                </Title>
            </Typography>
        </Header>
    );
};

export default AppHeader;
