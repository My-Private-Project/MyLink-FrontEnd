import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

export default function Button({ variant='contained', children, ...props }) {
  return (
    <StyledMuiButton variant={variant} {...props}>
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(MuiButton)`
  margin-top: 20px !important;
  width: 200px;
  background: #4080F5 !important;
  font-family: 'Open Sans' !important;
  font-weight: 700 !important;
  border-radius: 10px !important;
`;
