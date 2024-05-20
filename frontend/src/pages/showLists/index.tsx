import CustomButton from '../../components/customButton';
import CreateListForm from '../../components/modals/createListForm';
import { useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmptyList from './EmptyList';
import UserLists from './UserLists';
import api from './listApi';
import PageTitle from '../../components/pageTitle';
import GoBackButton from '../../components/goBackButton';
import Description from '../../components/description';
import AddCollaborativeListForm from '../../components/modals/addCollaborativeListForm';
import { jwtDecode } from 'jwt-decode';

const PageContainer = styled('div')`
  padding: 1.8rem 1rem;
`;

const StyledLists = styled('div')`
  width: 100%;
`;

const ButtonWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;

const SCircularProgress = styled(CircularProgress)({
  color: 'black',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const descriptionText =
  '¡Explora las listas que has creado y sumérgete en tus propios universos cinematográficos! ' +
  'Compártelas con amigos y familiares para inspirar nuevas sesiones de cine o simplemente disfruta ' +
  'de tus propias creaciones como una biblioteca personalizada de tus títulos más queridos. ' +
  'Bienvenido a tu espacio cinematográfico personal, donde cada lista cuenta una historia única.';

const AddList = () => {
  const [user, setUser] = useState<string>('');
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  const [openCollaborative, setOpenCollaborative] = useState(false);
  const openCollaborativeDialog = () => {
    setOpenCollaborative(true);
  };
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      try {
        const decoded: { email: string } = jwtDecode(token);
        setUser(decoded.email);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
    api.getLists(user).then((data) => {
      setListData(data);
      setTimeout(() => setLoading(false), 300);
    });
  }, [user]);

  return (
    <PageContainer>
      <ButtonWrapper>
        <GoBackButton />
        <ButtonWrapper>
          <CustomButton
            label="Añadir lista colaborativa"
            styles={{
              backgroundColor: '#ffcbcb',
            }}
            textStyles={{
              textTransform: 'none',
            }}
            testId="addCollaborativeListButton"
            onClick={openCollaborativeDialog}
          />
          <AddCollaborativeListForm
            open={openCollaborative}
            onClose={setOpenCollaborative}
          />
          <CustomButton
            label="Crear nueva lista"
            styles={{
              backgroundColor: '#cbf078',
            }}
            textStyles={{ textTransform: 'none' }}
            testId="addListButton"
            onClick={openDialog}
          ></CustomButton>
          <CreateListForm open={open} onClose={setOpen} />
        </ButtonWrapper>
      </ButtonWrapper>
      <PageTitle label={'Mis listas'} fontSize={'3rem'} textAlign={'center'} />
      <Grid container>
        <Grid
          item
          xs={12}
          display={'flex'}
          justifyContent={'center'}
          padding={'0 2rem'}
        >
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
            {loading ? (
              <SCircularProgress />
            ) : listData.length === 0 ? (
              <EmptyList clickFunction={() => setOpen(true)} />
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
