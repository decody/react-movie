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
                        style={{ width: 300 }}
                        cover={
                            <img alt={ title } 
                            src={ imageUrl }
                            style={{ width: 300, height: 160 }}
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

    // return (
    //     <>
    //         <Space align="center">
    //             <Link to="/info">
    //                 <Card
    //                     hoverable
    //                     style={{ width: 300 }}
    //                     cover={<img alt="example" src="https://w.namu.la/s/2df291471786eddab777fc94d47fe4dcb6aea61b1a9004bc3298936f43e701be09bd688c61a0d38a3a177f3c15b21a560725b6b33bb5232409a38d0b9de5f33acebd880a0976aae96d44848c81893f5ecba1656081577344f07f4f95168db19e" />}
    //                 >   
    //                     <div><StarFilled /> <Text>5.9</Text></div>
    //                     <Meta title="랑종 (2021)" description="Bangjong Pisanthanakun" />
    //                     <div>
    //                         <Tag color="#f50">공포</Tag>
    //                         <Tag color="#2db7f5">스릴러</Tag>
    //                     </div>
    //                 </Card>
    //             </Link>
    //         </Space>
    //     </>
    // );
};

export default MovieCard;
