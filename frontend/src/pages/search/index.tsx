import { useLocation } from 'react-router-dom';
import SearchBar from '../../components/searchBar';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import GoBackButton from '../../components/goBackButton';

const SGoBackButton = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  padding: '1.8rem 1rem 0 1rem',
});

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 9rem;
`;

const SearchPage = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('query');
    if (searchQuery) {
      setQuery(searchQuery);
      // Aquí puedes hacer algo con la consulta, como buscar en tu base de datos
    }
  }, [location.search]);

  return (
    <>
      <SGoBackButton>
        <GoBackButton />
      </SGoBackButton>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
    </>
  );
};

export default SearchPage;
