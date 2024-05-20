import { Box, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GoogleLogin } from '@react-oauth/google';
import PageTitle from '../pageTitle';
import loginImage from './login.png';

const SBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fcfcfc',
  borderRadius: '10px',
  border: '2px solid #393e46',
  gap: '1.5rem',
  padding: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20%',
  height: '25%',
  backgroundImage: `url(${loginImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});

const Description = styled('div')({
  fontSize: '1.05rem',
  textAlign: 'center',
  fontFamily: 'Roboto',
});

const Login = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const responseMessage = (response: any) => {
    try {
      localStorage.setItem('user', response.credential);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  };

  const descriptionText = `Inicia sesión con Google y disfruta de tus listas de deseos cinematográficas. Crea, edita, comparte y añade todos los títulos que quieras!`;

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={''}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SBox>
          <PageTitle label="Dreamflicks" fontSize="3rem" textAlign="center" />
          <Description>{descriptionText}</Description>
          <GoogleLogin onSuccess={responseMessage} />
        </SBox>
      </Modal>
    </>
  );
};

export default Login;
