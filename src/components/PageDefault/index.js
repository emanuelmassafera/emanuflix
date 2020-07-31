/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: #141614;
    color: white;
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
`;

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

// eslint-disable-next-line react/prop-types
function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        <Container>
          {children}
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
