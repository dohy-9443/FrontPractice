import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const SubBody = () => {

  const [isHeight, setIsHeight] = useState(0);

  const heightEl = useRef(null)
  const divEl = useRef(null)

  useEffect(() => {
    let divHeight = divEl.current.clientHeight;
    let topHeight = heightEl.current.offsetTop
    setIsHeight(divHeight - topHeight)
  }, [])

  return (
    <Container>
      <Wrap>
        <Left ref={divEl}>
          <DIV>
            <TodoTop>
              <H2>오늘 할일</H2>
            </TodoTop>
            <TodoBody>
              <InputBox>
                <Input type='text' placeholder='할 일을 입력해주세요.' />
                <Btn>등록</Btn>
              </InputBox>
              <Cover ref={heightEl} height={isHeight}>
                <Ul></Ul>
              </Cover>

            </TodoBody>
          </DIV>
        </Left>

        <Right>
          <TextArea placeholder='업무일지를 작성해 주세요.' />
        </Right>
      </Wrap>
    </Container>
  );
};

export default SubBody;

const Container = styled.div`
  margin: 50px auto 0;
  width: 1134px;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex; justify-content: space-around; align-items: center;
`;

const Left = styled.div`
  width: 50%; 
  padding: 0 10px 0 20px; 
`;

const Right = styled.div`
  width: 50%;
  padding: 0 20px 0 10px;
`;

const TextArea = styled.textarea`
  width: 100%; height: 500px;
  border: 2px solid gray; box-sizing: border-box; border-radius: 10px;
  padding: 20px;
  font-size: 20px; font-weight: bold; color: #000;
  resize: none;
  &::placeholder {
    color: gray;
  }

  &::-webkit-scrollbar { display: none; }
`;

const DIV = styled.div`
  width: 100%; height: 500px;
  border-radius: 10px;
  overflow: hidden;
`;

const TodoTop = styled.div`
  width: 100%; height: 50px;
  background: #000;
  display: flex; justify-content: center; align-items: center;
`;

const H2 = styled.h2`
  font-size: 20px; color: #fff; font-weight: bold;
`;

const TodoBody = styled.div`
  width: 100%; height: 450px;
  border-left: 2px solid gray; border-right: 2px solid gray; border-bottom: 2px solid gray;
  box-sizing: border-box;
  border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;
`;

const InputBox = styled.div`
  width: 100%; height: 50px;
  padding-top: 20px;
  display: flex; justify-content: center; align-items: center;
`;

const Input = styled.input`
  width: 70%; height: 100%;
  border: none; padding-left: 10px; outline: none;
  font-size: 15px; font-weight: 500;
  border-bottom: 2px solid gray; box-sizing: border-box;
  &::placeholder {
    color: gray;
  }

`;

const Btn = styled.div`
  width: 20%; height: 50px;
  margin-left: 10px;
  background-color: black;
  display: flex; justify-content: center; align-items: center;
  color: #fff; font-size: 15px; font-weight: 500;
  cursor: pointer;
`;

const Cover = styled.div`
  height: ${props => props.height + 'px'};
  overflow: auto;
  padding: 20px;

  &::-webkit-scrollbar { display: none; }
`;

const Ul = styled.ul`
   height: 1000px;
  background: blue;
`;

const Li = styled.li`

`;