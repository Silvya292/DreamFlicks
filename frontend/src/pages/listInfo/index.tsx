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
  listId: string;
  title: string;
  description: string;
  image: string;
  items: {
    id: number;
    type: ItemType;
  }[];
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
        const listData = await api.getListById(listId);
        setList(listData);

        if (listData.items) {
          const itemDetails = listData.items.map((item: any) => {
            if (item.type === ItemType.Film) {
              return api.getFilmById(item.id);
            } else if (item.type === ItemType.Series) {
              return api.getSerieById(item.id);
            } else {
              throw new Error('Invalid item type');
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
      }
    };

    fetchListInfo();
  }, [listId]);

  return (
    <PageContainer>
      {list && (
        <>
          <ButtonWrapper id={list.listId} owner={list.owner} userId="admin" />
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
