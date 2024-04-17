import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './listInfoApi';
import ButtonWrapper from './ButtonWrapper';
import { transformDate } from '../../components/transformDate';
import { styled } from '@mui/material/styles';
import PageTitle from '../../components/pageTitle';
import Description from '../../components/description';
import ItemList from '../../components/itemList';

const TextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
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

interface ItemInfo {
  data: {
    id: number;
    title: string;
    name: string;
    overview: string;
    poster_path: string;
    release_date: string;
    first_air_date: string;
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
            data.first_air_date = transformDate(data.release_date);
            return data;
          } catch (error) {
            console.error('Not a film, trying as a serie. Error:', error);
            try {
              const data = await api.getSerieById(item);
              data.first_air_date = transformDate(data.first_air_date);
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
    <div>
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
          <ItemList items={items} />
        </>
      )}
    </div>
  );
};

export default ListInfo;
