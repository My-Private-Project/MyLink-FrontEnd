import styled from 'styled-components';

import { StyledContainer as Container } from '../components/Home';
import { Page } from '../components/Home';

export default function Home({ background, children }) {
  return (
    <Page background={background}>
      <StyledContainer width="100%" height="70px">
        {children[0]}
      </StyledContainer>
      {children[1]}
    </Page>
  );
}

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: fixed;
  border-radius: 0px;
  
  & > * {
    text-align: initial;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
