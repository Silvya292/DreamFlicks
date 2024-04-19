import CustomButton from '../customButton';

const TrailerButton = () => {
  return (
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
      testId="watchTrailerButton"
    ></CustomButton>
  );
};

export default TrailerButton;
