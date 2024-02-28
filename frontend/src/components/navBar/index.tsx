import { AppBar, Container, Toolbar } from '@mui/material';
import dfLogo from '../../assets/dfLogo.png';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import UserButton from '../userButton';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#ffffff',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '4rem',
  zIndex: 1,
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1.5rem',
});

const StyledLogo = styled('img')({
  position: 'absolute',
  width: '12rem',
  height: 'auto',
  top: '0.5rem',
  cursor: 'pointer',
});

const Index = () => {
  const user = 'Usuario';

  return (
    <StyledAppBar>
      <Container disableGutters maxWidth={false}>
        <StyledToolbar disableGutters>
          <Link to={'/'}>
            <StyledLogo alt="DreamFlicks Logo" src={dfLogo} />
          </Link>
          <UserButton label={user} registered={false} />
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Index;
