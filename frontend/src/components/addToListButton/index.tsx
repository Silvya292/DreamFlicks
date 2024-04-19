import CustomButton from '../customButton';

const AddToListButton = () => {
  return (
    <CustomButton
      label="Añadir a lista"
      styles={{
        backgroundColor: '#7dd87d',
      }}
      textStyles={{ textTransform: 'none', fontWeight: 'bold' }}
      testId="addToListButton"
    ></CustomButton>
  );
};

export default AddToListButton;
