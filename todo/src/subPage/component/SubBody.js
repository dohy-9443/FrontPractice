import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import plusSVG from '../../img/plus.svg';
import checkSVG from '../../img/check.svg';
import noneCheckSVG from '../../img/noneCheck.svg';

const SubBody = () => {

  // useState
  const [isHeight, setIsHeight] = useState(0);
  const [isTextVal, setIsTextVal] = useState('');
  const [listData, setListData] = useState([]);
  const [isInputVal, setIsInputVal] = useState('');
  const [todoList, setTodoList] = useState([]);  

  // useRef
  const heightEl = useRef(null)
  const divEl = useRef(null)
  const nextId = useRef(0)

  // useEffect
  useEffect(() => {
    let divHeight = divEl.current.clientHeight;
    let topHeight = heightEl.current.offsetTop
    setIsHeight(divHeight - topHeight)
  }, [])

  useEffect(() => {
    heightEl.current.scrollTop = heightEl.current.scrollHeight;
  }, [listData])

  useEffect(() => {
    
  }, [])

  // function
  const insertInput = (e) => {
    const todo = {
      id: nextId.current,
      text: isInputVal,
      isCheck: false
    };
    setIsInputVal('')
    setListData(listData.concat(todo));
    nextId.current += 1
  }

  const insertEnter = (e) => {
    if (e.code === 'Enter') {
      insertInput()
    }
  }

  const doubleClick = (id) => {
    const delList = listData.filter((item) => {
        if (item.id !== id) {
          return item;
        }
    });

    setListData(delList)
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
                  placeholder='할 일을 입력해주세요. 더블클릭하면 지워져요.' 
                  value={isInputVal}
                  onChange={(e) => {setIsInputVal(e.target.value)}}
                  onKeyPress={insertEnter}
                  autoFocus 
                />
                <Btn onClick={() => {insertInput()}}><img src={plusSVG} alt="" /></Btn>
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
                                  // checked={isCheck}
                                  onChange={(e) => {
                                    let copyData = [...listData];
                                    let nowText = isTextVal
                                    let now = `\n${copyData[index].text}`;
                                    let prev = copyData[index].text
                                    copyData[index].isCheck = e.target.checked;
                                    if (copyData[index].isCheck) {

                                      nowText += now.replace(<br/>, /\n/g)
                                      
                                      setIsTextVal(nowText)
                                      
                                    } else {
                                      
                                      let result = nowText.replace(now, '')
                                      setIsTextVal(result)
                                    }
                                    setListData(copyData)
                                  }} />
                                <CheckLabel htmlFor={'check' + id}></CheckLabel>
                              </InputDIV>
                            </CheckBoxCover>
                            <Text isChecked={isCheck} onDoubleClick={() => {doubleClick(id)}} >{text}</Text>
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
          <TextArea placeholder='업무일지를 작성해 주세요. 근데 옆에 할일이랑 똑같이 적히면 앞에꺼부터 지워져요..ㅠㅠ 그건 조심해 주세요..ㅠㅠ' value={isTextVal} onChange={(e) => {setIsTextVal(e.target.value)}} />
        </Right>
      </Wrap>
    </Container>
  );
};

export default SubBody;

const Container = styled.div`
  margin: 50px auto 0;
  width: 1134px;

  @media screen and (max-width: 1200px) {
    width: 980px;
  }

  @media screen and (max-width: 1050px) {
    width: 768px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex; justify-content: space-around; align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%; 
  padding: 0 10px 0 20px; 

  @media screen and (max-width: 800px) {
    width: 90%;
    padding: 0; margin-bottom: 30px;
  }
`;

const Right = styled.div`
  width: 50%;
  padding: 0 20px 0 10px;

  @media screen and (max-width: 800px) {
    width: 90%;
    padding: 0;
  }
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
  padding-top: 20px; margin-bottom: 20px;
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
  height: ${props => props.height + 40 + 'px'};
  overflow: auto;
  padding: 20px;

  &::-webkit-scrollbar { display: none; }
`;

const Ul = styled.ul`
  /* height: 1000px; */
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
  font-size: 18px; font-weight: 400; color: #5182E2;
  text-decoration: ${props => props.isChecked ? 'line-through' : 'none'};
`;