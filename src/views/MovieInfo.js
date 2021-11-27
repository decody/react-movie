import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Button, Modal } from 'antd';

const MovieInfo = (props) => {
    console.log("[Movie Info]")
    const baseURL = 'http://localhost:4000/movies';
    const movieId = props.match.params.movieId;
    let endpoint = baseURL + `/${movieId}`;
    
    const [movie, setMovie] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    useEffect(() => {
        axios.get(endpoint)
            .then(response => {
                console.log(response.data)
                setMovie(response.data)
            })
            .catch(error => {console.log(error)});
    }, [endpoint]);

    if (!movie) {
         return <div>No data</div>
    }
    const {
        title,
        year,
        summary,
        director,
        category,
        rating,
        imageUrl,
    } = movie;

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    }; 
    
    return (
        <>
            <Row style={{paddingBottom: 30}}>
                <Col span={24}>
                    <Button 
                        type="primary"
                        onClick={showModal}
                    >
                        영화 수정하기
                    </Button>
                </Col>
            </Row>
            <sidebar style={{float: 'left', width: 300}}>
                    {imageUrl 
                        ? <div><img src={imageUrl} alt={title} style={{width: '100%'}} /></div>
                        : <div>해당이미지가 없습니다.</div>
                    }
                <div>
                    감독<br />
                    {director}
                </div>
                <div>
                    <br />
                    {category}
                </div>
            </sidebar>
            <div style={{float: 'left', padding: '0 0 0 40px'}}>
                <div>
                    <div>{title}</div>
                    <div>{year}</div>
                    <div>{rating}</div>
                </div>
                <div>{summary}</div>
            </div>
            <Modal 
                title="영화수정하기" 
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}
            >
                <div>
                    영화 수정하기
                </div>
            </Modal>
        </>
    );
};

export default MovieInfo;
