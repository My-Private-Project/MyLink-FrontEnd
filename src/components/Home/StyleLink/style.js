import styled from "styled-components";

export const Link = styled.li`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 0 30px;
  border-radius: 40px;
  background-color: #fff;
  opacity: 0.8;

  p{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #000000;
    cursor: pointer;
  }
  
`;

export const Icons = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  color: #4080F5;
`;

export const Space = styled.div`
  margin: 0 10px;
`