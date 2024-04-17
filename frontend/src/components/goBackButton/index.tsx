import CustomButton from '../customButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const GoBackButton = () => {
  return (
    <CustomButton
      label={'Volver'}
      styles={{
        backgroundColor: '#f8f398',
      }}
      textStyles={{ textTransform: 'none' }}
      testId="goBackButton"
      onClick={() => {
        window.history.back();
      }}
    >
      <KeyboardArrowLeftIcon />
    </CustomButton>
  );
};

export default GoBackButton;
