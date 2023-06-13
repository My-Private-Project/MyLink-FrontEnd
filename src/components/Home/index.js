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

export const Line = styled.div`
  width: 100%;
  height: 1px; 
  margin: 10px;
  background-color: gray;
`;

export const Top = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Menu = styled.div`
  width: 100%;
  height: 50px;
  padding: 0px 150px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

export const Right = styled.div`
  width: 50px;
  height: 30px;
  margin-right: 100px;
`;

export const Left = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  position: relative;
  img{
    width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;
