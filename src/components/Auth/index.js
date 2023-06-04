import styled from 'styled-components';

import Container from '../Container';

export const StyledContainer = styled(Container)`
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px 30px 30px 30px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-top: 10px;
`;

export const Label = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
`;

export const RowImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 310px;
  height: 65px;
  overflow: hidden;
  position: relative;
  img{
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const Button = styled.button`
  width: 172px;
  height: 38px;
  background: #4080F5;
  box-shadow: 0px 4px 6px rgba(14, 28, 54, 0.6);
  border-radius: 30px;
  margin-top: 8px;
  border: 0px solid #000000;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
`

