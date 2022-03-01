import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import plusSVG from '../../img/plus.svg';
import checkSVG from '../../img/check.svg';
import noneCheckSVG from '../../img/noneCheck.svg';

const SubBody = () => {

  const [isHeight, setIsHeight] = useState(0);
  const [isTextVal, setIsTextVal] = useState('');
  const [listData, setListData] = useState([]);
  const [isInputVal, setIsInputVal] = useState('');

  const heightEl = useRef(null)
  const divEl = useRef(null)

  // localStorage
  localStorage.setItem('textArea', isTextVal);

  useEffect(() => {
    let divHeight = divEl.current.clientHeight;
    let topHeight = heightEl.current.offsetTop
    setIsHeight(divHeight - topHeight)
  }, [])

  useEffect(() => {
    const saveName = localStorage.getItem('textArea');
    // localStorage에 담긴 데이터를 불러옴

    if (saveName !== null) {
      setIsTextVal(saveName)
      // 그게 null 값이 아니면 state에 담음
    }
  }, [isTextVal])

  useEffect(() => {
    setListData([
      { id: 1, text: '세상모르게 잠자기', isCheck: false },
      { id: 2, text: '멋드러지게 밥먹기', isCheck: true },
      { id: 3, text: '끝장내버리게 숨쉬기', isCheck: false },
    ])
  }, [])

  const insertInput = (e) => {
    setIsInputVal(e.target.value)
  }

  const insertEnter = (e) => {
    if (e.code === 'Enter') {
      insertInput()
    }
  }

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
                <Input 
                  type='text' 
                  placeholder='할 일을 입력해주세요.' 
                  onChange={insertInput}
                  onKeyPress={insertEnter}
                  autoFocus 
                />
                <Btn onClick={() => {insertEnter()}}><img src={plusSVG} alt="" /></Btn>
              </InputBox>
              <Cover ref={heightEl} height={isHeight}>
                <Ul>
                  {
                    listData.map((item, index) => {
                      const { id, text, isCheck } = item
                      return (
                        <Li key={index}>
                          <FlexDiv>
                            <CheckBoxCover>
                              <InputDIV>
                                
                                <CheckIpt 
                                  type="checkbox" 
                                  id={'check' + id}
                                  checked={isCheck}
                                  onChange={(e) => {
                                    listData[index].checked = e.target.checked
                                  }} />
                                <CheckLabel htmlFor={'check' + id}></CheckLabel>
                              </InputDIV>
                            </CheckBoxCover>
                            <Text isChecked={isCheck} >{text}</Text>
                          </FlexDiv>
                        </Li>
                      )
                    })
                  }
                </Ul>
              </Cover>

            </TodoBody>
          </DIV>
        </Left>

        <Right>
          <TextArea placeholder='업무일지를 작성해 주세요.' value={isTextVal} onChange={(e) => {setIsTextVal(e.target.value)}} />
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
  border: 2px solid #5182E2; box-sizing: border-box; border-radius: 10px;
  padding: 20px;
  font-size: 20px; font-weight: bold; color: #363F8F;
  outline: none;
  resize: none;
  &::placeholder {
    color: #B2CCFF;
  }

  &::-webkit-scrollbar { display: none; }
`;

const DIV = styled.div`
  width: 100%; height: 500px;
  border-radius: 10px; border: 2px solid #5182E2;
  overflow: hidden;
  box-sizing: border-box;
`;

const TodoTop = styled.div`
  width: 100%; height: 50px;
  display: flex; justify-content: center; align-items: center;
`;

const H2 = styled.h2`
  width: 95%; height: 100%;
  display: flex; justify-content: center; align-items: center;
  font-size: 20px; color: #5182E2; font-weight: bold;
  border-bottom: 2px solid #B2CCFF; box-sizing: border-box;
`;

const TodoBody = styled.div`
  width: 100%; height: 450px;
  
  box-sizing: border-box;
  border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;
`;

const InputBox = styled.div`
  width: 100%; height: 50px;
  padding-top: 20px;
  display: flex; justify-content: center; align-items: center;
`;

const Input = styled.input`
  width: 80%; height: 100%;
  border: none; padding-left: 10px; outline: none;
  color: #5182E2; font-size: 15px; font-weight: 500;
  border-bottom: 2px solid #5182E2; box-sizing: border-box;

  &::placeholder {
    color: #B2CCFF;
  }
`;

// 5182E2
// 2px 4px 3px rgba(0,0,0,0.09)
// B2CCFF

const Btn = styled.div`
  width: 50px; height: 50px;
  margin-left: 10px;
  border-radius: 50%;
  display: flex; justify-content: center; align-items: center;
  color: #fff; font-size: 15px; font-weight: 500;
  cursor: pointer;

  & img {
    display: block;
    width: 100%; height: 100%;
  }
`;

const Cover = styled.div`
  height: ${props => props.height + 'px'};
  overflow: auto;
  padding: 20px;

  &::-webkit-scrollbar { display: none; }
`;

const Ul = styled.ul`
  height: 1000px;
  /* background: blue; */
`;

const Li = styled.li`
  width: 100%;
  margin-bottom: 16px;
`;

const FlexDiv = styled.div`
  display: flex; align-items: center;
`;

const CheckBoxCover = styled.div`
  margin: 0 14px 0 -10px;

  @media screen and (max-width: 500px) {
    
  }
`;


const InputDIV = styled.div`
  width:100%; height:100%;
  display:flex;align-items:flex-end;

  & label {
    font-size: 14px; line-height:1.5; font-weight:bold;
  }
`

const CheckLabel = styled.label` 
  display: inline-block; 
  width:24px; height:24px; 
  transition:initial; 
  margin-right:5px;
  background:url(${noneCheckSVG}) no-repeat;
  background-size:contain; background-position: center center;
`

const CheckIpt = styled.input` 
  opacity: 0; 
  width: 0; height: 0; 
  transition:initial;

  &:checked + label {
    /* width: 20px; height: 20px; */
    background:url(${checkSVG}) no-repeat center /contain;
  }
`


const Text = styled.p`
  text-decoration: ${props => props.isChecked ? 'line-through' : 'none'};
`;