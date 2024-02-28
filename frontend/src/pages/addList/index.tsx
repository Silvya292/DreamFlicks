import CustomButton from '../../components/customButton';
import CreateListForm from '../../components/modals/createListForm';
import { useState } from 'react';

const AddList = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  return (
    <>
      <CustomButton
        label="Añadir lista"
        styles={{
          backgroundColor: '#cbf078',
        }}
        textStyles={{ textTransform: 'none' }}
        testId="addListButton"
        onClick={openDialog}
      ></CustomButton>
      <CreateListForm open={open} onClose={setOpen} />
    </>
  );
};

export default AddList;
