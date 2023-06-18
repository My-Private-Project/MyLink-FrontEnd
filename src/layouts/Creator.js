import styled from 'styled-components';

import { StyledContainer as Container } from '../components/Creator';
import { Page } from '../components/Creator';

export default function Creator({ background, children }) {
  return (
    <Page background={background}>
      <StyledContainer width="1000px" height="600px">
        {children}
      </StyledContainer>
    </Page>
  );
}

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: fixed;
  border-radius: 20px;
  
  & > * {
    text-align: initial;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;