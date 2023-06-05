import Page from '../components/Page';
import { StyledContainer } from '../components/Auth';

export function SignInLayout({ background, children }) {
  return (
    <Page background={background}>
      <StyledContainer width="450px" height="450px">
        {children}
      </StyledContainer>
    </Page>
  );
}

export function SignUpLayout({ background, children }) {
  return (
    <Page background={background}>
      <StyledContainer width="450px" height="580px">
        {children}
      </StyledContainer>
    </Page>
  );
}
