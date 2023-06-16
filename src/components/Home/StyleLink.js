import styled from "styled-components";

import { FaPencilAlt, FaTrash } from 'react-icons/fa';

export function StyleLink({name, key, active}) {
    return (
          <Link key={key}>
            <p onClick={active}>{name}</p>
            <Icons>
              <FaPencilAlt cursor={'pointer'} onClick={active}/>
              <Space/>
              <FaTrash size={'sm'} cursor={'pointer'} onClick={active}/>
            </Icons>
          </Link>
    );
};

const Link = styled.li`
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

const Icons = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  color: #4080F5;
`;

const Space = styled.div`
  margin: 0 10px;
`