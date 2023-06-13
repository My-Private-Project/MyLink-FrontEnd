import styled from 'styled-components';

import Container from '../Container';

export const StyledContainer = styled(Container)`
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px 30px 30px 30px;
`;

export const Page = styled.div`
  background: ${props => props.background};
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: 0px 40px 40px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 48px;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }

  & > * {
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const Label = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
`;

