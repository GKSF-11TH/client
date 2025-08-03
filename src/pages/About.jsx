import React from 'react';
import styled from 'styled-components';
import Intro from '../components/About/Intro';

const About = () => {
  return <Container><Intro/></Container>;
};

const Container=styled.div`
  width:100%;
  padding: 16.4rem 17rem 18rem 17rem;
`


export default About;
