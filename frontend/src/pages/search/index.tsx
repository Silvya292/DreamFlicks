import { useLocation } from 'react-router-dom';
import SearchBar from '../../components/searchBar';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import GoBackButton from '../../components/goBackButton';
import api from './searchApi';
import { CircularProgress } from '@mui/material';
import ItemList from '../../components/itemList';

const Wrapper = styled('div')({
  display: 'flex',
});

const SGoBackButton = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  padding: '1.8rem 1rem 0 1rem',
});

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.8rem 1rem 0 1rem;
  width: 100%;
`;

const SOverflow = styled('div')({
  marginTop: '2rem',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '0px',
  },
});

const SCircularProgress = styled(CircularProgress)({
  color: 'black',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

enum ItemType {
  Film = 'film',
  Series = 'tv',
}

const SearchPage = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('query');
    const type = params.get('type');

    const fetchData = async () => {
      if (searchQuery) {
        setQuery(searchQuery);
        setLoading(true);
        try {
          let searchItems;
          if (type === ItemType.Film) {
            searchItems = await api.searchFilm(searchQuery);
          } else if (type === ItemType.Series) {
            searchItems = await api.searchSerie(searchQuery);
          }
          if (searchItems) {
            setItems(searchItems);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [location.search]);

  return (
    <>
      <Wrapper>
        <SGoBackButton>
          <GoBackButton />
        </SGoBackButton>
        <SearchContainer>
          <SearchBar />
        </SearchContainer>
      </Wrapper>
      {loading ? (
        <SCircularProgress />
      ) : (
        <SOverflow>
          {items.length !== 0 ? (
            <ItemList items={items} type="search" />
          ) : (
            <NotFound />
          )}
        </SOverflow>
      )}
    </>
  );
};

const NotFound = () => {
  return <p>No results found</p>;
};

export default SearchPage;
