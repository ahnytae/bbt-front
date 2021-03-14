import React from 'react';
import styled, {css} from 'styled-components';

const StyledWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  height: ${({theme}) => css`
    background: ${theme?.primaryColors.dkGreyBg};
    @media ${theme?.breakpoints.laptop} {
      flex-direction: column;
    }
  `};
`;

const MainContainer: React.FC = () => {
  return <StyledWrap>Hello world!</StyledWrap>;
};

export default MainContainer;
