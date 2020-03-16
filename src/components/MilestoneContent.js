import React from 'react';
import { Text, Section, colors } from '../styles';
import styled, { css } from 'styled-components';

const ContentSection = styled(Section)`
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 35%;
  backdrop-filter: blur(10px);
  -webkit-box-shadow: 0px 0px 15px 0px rgba(230, 255, 255, 1);
  -moz-box-shadow: 0px 0px 15px 0px rgba(230, 255, 255, 1);
  box-shadow: 0px 0px 15px 0px ${colors.deeppink};
  left: ${props => props.left};
  top: ${props => props.top};
  @media (max-width: 768px) {
    width:65%;
  }
`;

const MilestoneContentImage = styled.img`
  width: 10%;
  margin: 1rem 0rem 0.5rem 1rem;
  text-align: right;
`;

const MilestoneContent = ({ imgSrc, title, content, ...props }) => (
  <ContentSection left={props.left} top={props.top}>
    <Section width={'100%'} height={'10%'} centered>
      <MilestoneContentImage src={imgSrc} />
      <Text shadowed={colors.gold} margin={'1rem 0 0 5%'} title color={colors.gold}>
        {title}
      </Text>
      <MilestoneContentImage src={imgSrc} />
    </Section>
    <Section textCentered width={'100%'}>
      <Text
        main
        shadowed={colors.lightcyan}
        margin={'1rem 0 1rem 5%'}
        width={'100%'}
        color={colors.lightcyan}
      >
        {content}
      </Text>
    </Section>
  </ContentSection>
);

export default MilestoneContent;
