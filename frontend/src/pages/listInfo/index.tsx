import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './listInfoApi';
import ButtonWrapper from './ButtonWrapper';
import { styled } from '@mui/material/styles';
import PageTitle from '../../components/pageTitle';
import Description from '../../components/description';
import ItemList from '../../components/itemList';

const PageContainer = styled('div')({
  padding: '1.8rem 1rem',
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
  title: string;
  description: string;
  image: string;
  items: string[];
  owner: string;
  usersAllowed: string[];
  isCollaborative: boolean;
  isShared: boolean;
}

enum ItemType {
  Film = 'film',
  Series = 'tv',
}

interface ItemInfo {
  data: {
    id: number;
    title: string;
    overview: string;
    poster: string;
    releaseDate: string;
    type: ItemType;
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

        const itemDetails = listData.items.map((item: any) => {
          if (item.type === ItemType.Film) {
            return api.getFilmById(item.id);
          }
          return api.getSerieById(item.id);
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
              label={list.title}
              fontSize={'3rem'}
              textAlign={'center'}
            />
            <Description descriptionText={list.description} />
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
