import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const MainBody = () => {

  // useState
  const [isVal, setIsVal] = useState('');
  const [isBtn, setIsBtn] = useState(false);

  // useEffect


  // function
  // const input

  return (
    <Container>
      <Wrap>
        <H2>Please enter your username</H2>

        <DIV>
          <InputBox>
            <Input type="text" onChange={(e) => {setIsVal(e.target.value)}} value={isVal} placeholder="이름을 입력해 주세요." />
            {
              isBtn && 
              <P>올바른 이름 형식이 아닙니다!</P>
            }
          </InputBox>
          <InputBtn>Enter</InputBtn>
        </DIV>
      </Wrap>
    </Container>
  );
};

export default MainBody;

const FocusBorder = keyframes`
  0% { background-position: 0% 0%; }
	100% { background-position: 100% 100%; }
`;

const Container = styled.div`
  width: 500px;
  border-radius: 10px;
`;

const Wrap = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex; flex-direction: column;
  justify-content: center; align-items: center;
`;

const H2 = styled.div`
  width: 100%;
  text-align: center; font-size: 20px;
  color: #fff; font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 60px;
`;

const DIV = styled.div``;

const InputBox = styled.div`
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 450px; height: 45px;
  outline: none;
  border-radius: 15px; border: 1px solid #FFF;
  padding: 0 10px;
  background: transparent;
  color: #fff; text-align: center; font-size: 16px; font-weight: bold;
`;

const P = styled.p`
  width: 100%; 
  font-size: 15px; color: #FF0000;
`;

const InputBtn = styled.div`
  width: 470px; height: 45px;
  background: linear-gradient(135deg, gray, black);
  border-radius: 15px; border: 1px solid #FFF;
  display: flex; justify-content: center; align-items: center;
  font-size: 18px; font-weight: 400; color: #FFF;
  margin-bottom: 20px;
  cursor: pointer;
`;