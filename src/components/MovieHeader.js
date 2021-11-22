import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Divider } from 'antd';
const { Title } = Typography;

const Header = () => {
    return (
        <>  
            <Link to="/">      
                <Typography>
                    <Title>My Movies</Title>
                </Typography>
            </Link>
            <Divider />
        </>
    );
};

export default Header;
