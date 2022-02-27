import React from 'react';
import styled from 'styled-components';

import MainBody from './component/MainBody';

const MainPage = () => {
  return (
    <Container>
      <MainBody />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%; height: 100%;
  position: fixed; top: 0; left: 0;
  background: linear-gradient(135deg, black, gray);
  display: flex; justify-content: center; align-items: center;
`;