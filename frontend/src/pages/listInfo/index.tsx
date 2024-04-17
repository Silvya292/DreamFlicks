import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './listInfoApi';
import ButtonWrapper from './ButtonWrapper';
import { styled } from '@mui/material/styles';
import PageTitle from '../../components/pageTitle';
import Description from '../../components/description';
import ItemList from '../../components/itemList';

const PageContainer = styled('div')({
  padding: '0.5rem 1rem 1rem',
  height: '85vh',
  display: 'flex',
  flexDirection: 'column',
});

const TextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
});

const SOverflow = styled('div')({
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '0px',
  },
});

interface ListProps {
  listId: number;
  listTitle: string;
  listDescription: string;
  listImage: string;
  listItems: string[];
  listOwner: string;
  usersAllowed: string[];
  isCollaborative: boolean;
  isShared: boolean;
}

enum ItemType {
  film = 'movie',
  serie = 'tv',
}

interface ItemInfo {
  data: {
    id: number;
    title: string;
    name: string;
    overview: string;
    poster_path: string;
    release_date: string;
    first_air_date: string;
    type?: ItemType;
  };
}

const ListInfo = () => {
  const { listId } = useParams<{ listId: string }>();
  const [list, setList] = useState<ListProps>();
  const [items, setItems] = useState<ItemInfo['data'][]>();

  useEffect(() => {
    const fetchListInfo = async () => {
      if (listId) {
        const listData = await api.getListById(parseInt(listId));
        setList(listData);

        const itemDetails = listData.listItems.map(async (item: string) => {
          try {
            const data = await api.getFilmById(item);
            data.type = ItemType.film;
            return data;
          } catch (error) {
            console.error('Not a film, trying as a serie. Error:', error);
            try {
              const data = await api.getSerieById(item);
              data.type = ItemType.serie;
              return data;
            } catch (error) {
              console.error('Not a serie either. Error:', error);
              return null;
            }
          }
        });

        Promise.all(itemDetails)
          .then((itemsData) => {
            setItems(itemsData);
          })
          .catch((error) => {
            console.error('Error fetching item details:', error);
          });
      }
    };

    fetchListInfo();
  }, [listId]);

  return (
    <PageContainer>
      {list && (
        <>
          <ButtonWrapper />
          <TextContainer>
            <PageTitle
              label={list.listTitle}
              fontSize={'3rem'}
              textAlign={'center'}
            />
            <Description descriptionText={list.listDescription} />
          </TextContainer>
          <SOverflow>
            <ItemList items={items} />
          </SOverflow>
        </>
      )}
    </PageContainer>
  );
};

export default ListInfo;
