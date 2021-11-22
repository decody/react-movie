import React from "react";
import styled from 'styled-components';

const MovieInfoDetail = () => {
    return (
        <>
            <StyledMovieInfoDetail>
                태국 북동부 '이산' 지역 낯선 시골마을.<br />
                집 안, 숲, 산, 나무 논밭까지,<br />
                이 곳의 사람들은<br />
                모든 것에 혼이 깃들어 있다고 믿는다.<br />
                가문의 대를 이어 조상신 '바얀 신'을 모시는 랑종(무당).<br />
                조카 '밍'의 상태가 심상치 않음을 직감한다.<br />
                날이 갈수록 이상 증세가 점점 심각해지는 '밍'.<br />
                무당을 취재하기 위해 '님'과 동행했던 촬영 팀은<br />
                신내림이 대물림 되는 순간을 포착하기 위해<br />
                밍과 님, 그리고 가족에게 벌어지는 미스터리한 현상을<br />
                카메라에 담기 시작한다.<br /><br />
                신내림이 대물림되는 무당 가문<br />
                피에 관한 세 달간의 기록
            </StyledMovieInfoDetail>
        </>
    );
};

export default MovieInfoDetail;

const StyledMovieInfoDetail = styled.div`
    min-height: 30px;
    padding: 60px 10px 40px;
    text-align: center;
    font-size: 14px;
`