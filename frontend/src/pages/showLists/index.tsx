import CustomButton from '../../components/customButton';
import CreateListForm from '../../components/modals/createListForm';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmptyList from './EmptyList';
import UserLists from './UserLists';
import api from './listApi';
import PageTitle from '../../components/pageTitle';
import GoBackButton from '../../components/goBackButton';
import Description from '../../components/description';

const PageContainer = styled('div')`
  padding: 1.8rem 1rem;
`;

const StyledLists = styled('div')`
  width: 100%;
`;

const ButtonWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const descriptionText =
  '¡Explora las listas que has creado y sumérgete en tus propios universos cinematográficos! ' +
  'Compártelas con amigos y familiares para inspirar nuevas sesiones de cine o simplemente disfruta ' +
  'de tus propias creaciones como una biblioteca personalizada de tus títulos más queridos. ' +
  'Bienvenido a tu espacio cinematográfico personal, donde cada lista cuenta una historia única.';

const AddList = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  const [listData, setListData] = useState([]);
  useEffect(() => {
    api.getLists().then((data) => {
      setListData(data);
    });
  }, []);

  return (
    <PageContainer>
      <ButtonWrapper>
        <GoBackButton />
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
      <PageTitle label={'Mis listas'} fontSize={'3rem'} textAlign={'center'} />
      <Grid container>
        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
          <Description descriptionText={descriptionText} />
        </Grid>
        <StyledLists>
          <Grid
            item
            xs={12}
            display={'flex'}
            justifyContent={'center'}
            paddingBottom={'2rem'}
          >
            {listData.length === 0 ? (
              <EmptyList clickFunction={openDialog} />
            ) : (
              <UserLists data={listData} />
            )}
          </Grid>
        </StyledLists>
      </Grid>
    </PageContainer>
  );
};

export default AddList;
