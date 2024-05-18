import styled from '@emotion/styled';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1.2px solid #dbd8e3;
  border-radius: 0.5rem;
  height: 2.5rem;
  background-color: white;
`;

const FormControlStyled = styled(FormControl)`
  min-width: 120px;
  height: 100%;
  border-right: 1px solid #e3e3e3;

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

const StyledInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  border: none;
  outline: none;
  font-size: 1rem;

  &:focus {
    font-weight: normal;
    border: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
`;

const Dropdown = ({
  type,
  onChange,
}: {
  type: string;
  onChange: (value: string) => void;
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControlStyled size="small">
      <Select
        sx={{
          fontSize: '1rem',
          height: '100%',
        }}
        id="item-type"
        value={type}
        onChange={handleChange}
      >
        <MenuItem
          sx={{
            fontSize: '1rem',
          }}
          value="film"
        >
          Películas
        </MenuItem>
        <MenuItem
          sx={{
            fontSize: '1rem',
          }}
          value="tv"
        >
          Series
        </MenuItem>
      </Select>
    </FormControlStyled>
  );
};

const SearchBar = ({
  initialType = 'film',
  initialQuery = '',
}: {
  initialType?: string;
  initialQuery?: string;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState(initialQuery);
  const [type, setType] = useState(initialType);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const queryParam = urlParams.get('query');
    const typeParam = urlParams.get('type');
    if (queryParam) {
      setQuery(queryParam);
    }
    if (typeParam) {
      setType(typeParam);
    }
  }, [location.search]);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${query}&type=${type}`);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <Dropdown type={type} onChange={setType} />
      <StyledInput
        type="text"
        placeholder="Buscar títulos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <IconWrapper onClick={handleSearch}>
        <SearchIcon />
      </IconWrapper>
    </SearchContainer>
  );
};

export default SearchBar;
