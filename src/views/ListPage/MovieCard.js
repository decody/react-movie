import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Badge, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';
const { Meta } = Card;
const { Text } = Typography;

const MovieCard = ({
        movieCard, 
        movieId, 
        title, 
        director, 
        year, 
        rating, 
        genre, 
        imageUrl
    }) => {
    if (movieCard) {   
        return (
            <>
                <StyledMovieCard>
                    <Link to={`/info/${movieId}`}>
                        <Card
                            hoverable
                            cover={<img alt={title} src={imageUrl} style={{width: '100%'}} />}
                        >   
                            <Meta title={title} description={director} />
                            <Rating>
                                <StarFilled /> <Text>{rating}</Text>
                            </Rating>
                            <Year>{year}</Year>
                            <Genre>
                                <Badge color="green" text={genre} />
                            </Genre>
                        </Card>
                    </Link>
                </StyledMovieCard>
            </>
        );
    }
};

export default MovieCard;

const Rating = styled.div`
    position: absolute;
    top: 15px;
    right: 20px;
    color: #f7b928;
    text-align: right;

    & .ant-typography {
        color: #f7b928;
    }
`

const Year = styled.div`
    padding-top: 4px;
`

const Genre = styled.div`
    padding-top: 20px;
`
 
const StyledMovieCard = styled.div`
    .ant-card-cover {
        height: 180px;
        background: #333;
        overflow: hidden;
    }
    .ant-card-body {
        position: relative;
        min-height: 140px;
        padding: 15px 20px;
        color: #78797d;
    }
    .ant-card-bordered {
        background: var(--gray-color);
        border: 0;
    }
    .ant-card {
        border: 1px solid transparent;
        border-radius: 8px;
        overflow: hidden;
    }
    .ant-card:hover {
        border: 1px solid var(--primary-color);
    }
    .ant-card-meta-title {
        margin-bottom: 0;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
    }
    .ant-card-meta-description {
        color: #8a8d91;
    }
    .ant-card-meta-detail > div:not(:last-child) {
        margin-bottom: 0;
    }
    .ant-card-meta-description {
        color: #a9a9a9;
    }
    .ant-badge-status-text {
        color: #52c41a;
        font-size: 13px;
    }
`