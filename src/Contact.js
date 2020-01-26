import React, { useRef, forwardRef, useImperativeHandle } from 'react';
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
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
const Title = styled(Text)`
  margin: 1rem -1rem 1rem 1rem;
  @media (max-width: 768px) {
    margin: 1rem;
  }
`;
const Main = styled(Text)`
  margin: 1rem -1rem 1rem 1rem;
  @media (max-width: 768px) {
    margin: 1rem;
  }
`;
const TopSection = styled(Section)`
  border: 5vw solid #e6ffff;
  z-index: 0;
  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const BottomSection = styled(Section)`
  border: 2.5vw solid #e6ffff;
  width: 90%;
  z-index: 0;
`;

const exampleText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.`;

function Contact(props, ref) {
  const contactRef = useRef();
  useImperativeHandle(ref, () => ({
    boundingTop: () => {
      return contactRef.current.getBoundingClientRect().top;
    }
  }));

  return (
    <Wrapper ref={contactRef} img={'./images/scoreboard.jpg'} id="contact">
      <Section
        curved
        shadowed
        large
        margin={'0 0 0 0'}
        backgroundColor={'#e6ffff'}
      >
        <Title title color={'black'}>
          What is Lorem Ipsum?
        </Title>
        <Main main color={'black'}>
          {exampleText}
        </Main>
      </Section>
      <TopSection curved shadowed backgroundColor={'rgba(208,0,108,0.7)'}>
        <Main main color={'#e6ffff'}>
          {exampleText}
        </Main>
        <Title title color={'#e6ffff'}>
          What is Lorem Ipsum?
        </Title>
      </TopSection>
      <BottomSection
        curved
        shadowed
        margin={'1rem 0'}
        xLarge
        backgroundColor={'rgba(208,0,108,0.7)'}
      >
        <Main main color={'#e6ffff'}>
          {exampleText}
        </Main>
        <Title title color={'#e6ffff'}>
          What is Lorem Ipsum?
        </Title>
      </BottomSection>
    </Wrapper>
  );
}

export default forwardRef(Contact);
