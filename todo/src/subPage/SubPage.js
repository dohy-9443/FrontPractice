import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useParams, useLocation } from 'react-router-dom';

import SubBody from './component/SubBody'

const SubPage = () => {

  const location = useLocation()
  const history = useHistory()

  const [isName, setIsName] = useState('');

  const resName = history.location.state;
  // 넘어온 데이터를 상수에 담기

  localStorage.setItem('id', JSON.stringify(resName));
  // 상수를 localStorage id에 담기 

  useEffect(() => {

    const saveName = localStorage.getItem('id');
    // localStorage에 담긴 데이터를 불러옴

    if (saveName !== null) {
      setIsName(saveName.substring(1, saveName.length-1))
      // 그게 null 값이 아니면 state에 담음
    }
    
  }, [resName])

  return (
    <Container>
      <Wrap>
        <P><span>{isName}</span>님 환영합니다.</P>
        
        <SubBody />
      </Wrap>
    </Container>
  );
};

export default SubPage;

const Container = styled.div`
  width: 100%;
`;

const Wrap = styled.div`
  /* width: 100%; */
  padding: 20px;
`;

const P = styled.p`
  display: flex; justify-content: flex-end; align-items: center;
  font-size: 20px; color: #555; font-weight: bold;
  width: 100%;

  & span {
    font-size: 25px; font-weight: bold; color: #333;
  }
`;
