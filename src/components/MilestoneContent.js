import React from 'react';
import { Text, Section, colors } from '../styles';
import styled, { css } from 'styled-components';

const TextSection = styled(Section)`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 45%;
  backdrop-filter: blur(10px);
  -webkit-box-shadow: 0px 0px 15px 0px rgba(230, 255, 255, 1);
  -moz-box-shadow: 0px 0px 15px 0px rgba(230, 255, 255, 1);
  box-shadow: 0px 0px 15px 0px rgba(230, 255, 255, 1);
  left: ${props => props.left};
  top: ${props => props.top};
`;

const MilestoneContentImage = styled.img`
  width: 15%;
  height: 15%;
  margin: 0 0 0 1rem;
`;

const MilestoneContent = ({ imgSrc, title, content, ...props }) => (
  <TextSection left={props.left} top={props.top}>
    <Text
      width={'45%'}
      shadowed
      margin={'1rem 0 0 5%'}
      title
      color={colors.gold}
    >
      {title}
    </Text>
    <MilestoneContentImage src={imgSrc} />
    <Text main margin={'1rem 0 1rem 5%'} color={colors.lightcyan}>
      {content}
    </Text>
  </TextSection>
);

export default MilestoneContent;
