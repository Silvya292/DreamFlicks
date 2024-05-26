import { useState } from 'react';
import CustomButton from '../customButton';
import { Box, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';

interface TrailerProps {
  video: string | undefined;
}

const SBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '75%',
  backgroundColor: '#dbd8e3',
  padding: '0.5rem',
  border: '1px solid #000',
  borderRadius: '0.5rem',
  outline: 'none',
});

const TrailerButton = ({ video }: TrailerProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CustomButton
        label="Ver tráiler"
        styles={{
          backgroundColor: '#93deff',
        }}
        textStyles={{
          textTransform: 'none',
          fontStyle: 'italic',
          fontWeight: 'bold',
        }}
        onClick={handleOpen}
        testId="watchTrailerButton"
      ></CustomButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="trailer-modal-title"
        aria-describedby="trailer-modal-description"
      >
        <SBox>
          <iframe
            width="100%"
            height="100%"
            src={`${video}?autoplay=1`}
            title="Trailer"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </SBox>
      </Modal>
    </>
  );
};

export default TrailerButton;
