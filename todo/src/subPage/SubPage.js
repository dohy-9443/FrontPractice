import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useParams, useLocation } from 'react-router-dom';

const SubPage = () => {

  const location = useLocation()

  const [isName, setIsName] = useState('');

  sessionStorage.setItem("name", location.name);


  useEffect(() => {
    setIsName(sessionStorage.getItem("name"))
  }, [])

  return (
    <Container>
      <h2>이름 : {isName}</h2>
    </Container>
  );
};

export default SubPage;

const Container = styled.div``;