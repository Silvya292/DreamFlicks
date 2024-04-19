import CustomButton from '../customButton';

const DeleteFromList = () => {
  return (
    <CustomButton
      label="Eliminar de la lista"
      styles={{
        backgroundColor: '#e46161',
      }}
      textStyles={{ textTransform: 'none', fontWeight: 'bold' }}
      testId="deleteFromListButton"
    ></CustomButton>
  );
};

export default DeleteFromList;
