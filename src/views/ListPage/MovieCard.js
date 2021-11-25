import React from 'react';
import { Link } from 'react-router-dom';
import { Space, Card, Tag, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';
const { Meta } = Card;
const { Text } = Typography;

const MovieCard = (props) => {
    const {
        id, 
        title, 
        imageUrl, 
        rating, 
        director, 
        category, 
        year
    } = props;

    if (props.movieCard) {
        return (
            <>
                <Space align="center">
                    <Link to="/info">
                    <Card
                        data-movieId={ id }
                        hoverable
                        style={{ width: 300, borderRadius: 20, border: 0, overflow: 'hidden' }}
                        cover={
                            <img alt={ title } 
                            src={ imageUrl }
                            style={{ width: '100%', height: 160 }}
                        />}
                    >   
                        <div><StarFilled /> <Text>{ rating }</Text></div>
                        <Meta title={ title } description={ director } />
                        <p>{ year }</p>
                        <div>
                            <Tag color="#f50">{ category }</Tag>
                        </div>
                    </Card>
                    </Link>
                </Space>
            </>
        );
    } 
};

export default MovieCard;
