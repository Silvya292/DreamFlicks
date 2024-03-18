import CustomButton from '../../components/customButton';
import CreateListForm from '../../components/modals/createListForm';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import PageTitle from './PageTitle';
import Description from './Description';
import EmptyList from './EmptyList';
import UserLists from './UserLists';

import listsData from './listData.json';

const AddList = () => {
  const StyledLists = styled('div')`
    padding-left: 2.5rem;
    padding-right: 1.5rem;
    width: 100%;
  `;

  const ButtonWrapper = styled('div')`
    display: flex;
    justify-content: flex-end;
    padding-top: 0.3rem;
    padding-right: 1.5rem;
  `;

  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  return (
    <>
      <ButtonWrapper>
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
      </ButtonWrapper>
      <PageTitle />
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Description />
        </Grid>
        <Grid item xs={2} />
        <StyledLists>
          <Grid
            item
            xs={12}
            display={'flex'}
            justifyContent={'center'}
            paddingBottom={'2rem'}
          >
            {listsData.length !== 0 ? (
              <EmptyList clickFunction={openDialog} />
            ) : (
              <UserLists data={listsData} />
            )}
          </Grid>
        </StyledLists>
      </Grid>
    </>
  );
};

export default AddList;
