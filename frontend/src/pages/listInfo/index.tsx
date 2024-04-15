import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './listInfoApi';

interface ListProps {
  listId: number;
  listTitle: string;
  listDescription: string;
  listImage: string;
  isCollaborative: boolean;
}

const ListInfo = () => {
  const { listId } = useParams<{ listId: string }>();
  const [list, setList] = useState<ListProps>();
  useEffect(() => {
    if (listId) {
      api.getFilmById(parseInt(listId)).then((data) => {
        setList(data);
      });
    }
  }, []);

  return (
    <div>
      ListInfo
      <br></br>
      list.listId: {list?.listId}
      <br></br>
    </div>
  );
};

export default ListInfo;
