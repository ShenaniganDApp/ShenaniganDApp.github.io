import React from 'react';
import styled from 'styled-components';
import Backdrop from './styles/Backdrop';
import Section from './styles/Section';
import Text from './styles/Text';

const Wrapper = styled.div`
  height: auto;
  width: 70vw;
  display: flex;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(${props => props.img});
  padding-bottom: 5%;
  justify-content: center;
  flex-wrap:wrap;
  
`;
const Title = styled(Text)`
  margin: 1rem;
`;
const Main = styled(Text)`
  margin: 1rem;
`;
const StyledSection = styled(Section)`
  border: 5vw solid #e6ffff;
  z-index: 0;
`;

const exampleText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.`;

function Contact() {
  return (
    <Wrapper img={'./images/scoreboard.jpg'} id="contact">
        <Section large margin={'0 -2rem 0 0'} backgroundColor={'#e6ffff'}>
          <Title title color={'black'}>
            What is Lorem Ipsum?
          </Title>
          <Main main color={'black'}>
            {exampleText}
          </Main>
        </Section>
        <StyledSection backgroundColor={'rgba(208,0,108,0.7)'}>
          <Main main color={'#e6ffff'}>
            {exampleText}
          </Main>
          <Title title color={'#e6ffff'}>
            What is Lorem Ipsum?
          </Title>
        </StyledSection>
      <StyledSection xLarge backgroundColor={'rgba(208,0,108,0.7)'}>
        <Main main color={'#e6ffff'}>
          {exampleText}
        </Main>
        <Title title color={'#e6ffff'}>
          What is Lorem Ipsum?
        </Title>
      </StyledSection>
    </Wrapper>
  );
}

export default Contact;
