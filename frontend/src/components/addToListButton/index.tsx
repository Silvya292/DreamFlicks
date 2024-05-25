import { useState } from 'react';
import CustomButton from '../customButton';
import AddItemToListForm from '../modals/addItemToListForm';

const AddToListButton = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  return (
    <>
      <CustomButton
        label="Añadir a lista"
        styles={{
          backgroundColor: '#7dd87d',
        }}
        textStyles={{ textTransform: 'none', fontWeight: 'bold' }}
        testId="addToListButton"
        onClick={openDialog}
      />
      <AddItemToListForm open={open} onClose={setOpen} />
    </>
  );
};

export default AddToListButton;
