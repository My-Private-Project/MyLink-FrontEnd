import Page from '../components/Page';
import { StyledContainer } from '../components/Auth';

export default function AuthLayout({ background, children }) {
  return (
    <Page background={background}>
      <StyledContainer width="450px" height="480px">
        {children}
      </StyledContainer>
    </Page>
  );
}
