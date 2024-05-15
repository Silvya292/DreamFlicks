import styled from '@emotion/styled';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled.div`
  width: 45rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #d1d1d1;
  border-radius: 0.5rem;
`;

const Dropdown = () => {
  const [item, setItem] = useState('film');

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <Select
        sx={{
          fontSize: '0.9rem',
          border: 'none',
          outline: 'none',

          '&:focus': {
            border: 'none',
          },
        }}
        id="item-type"
        value={item}
        onChange={handleChange}
      >
        <MenuItem
          sx={{
            fontSize: '0.9rem',
          }}
          value="film"
        >
          Películas
        </MenuItem>
        <MenuItem
          sx={{
            fontSize: '0.9rem',
          }}
          value="tv"
        >
          Series
        </MenuItem>
      </Select>
    </FormControl>
  );
};

const StyledInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: none;
  outline: none;

  &:focus {
    font-weight: normal;
    border: 0;
  }
`;

const IconWrapper = styled.div`
  align-items: center;
  padding: 0.5rem;
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <Dropdown />
      <StyledInput type="text" placeholder="Buscar títulos..." />
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </SearchContainer>
  );
};

export default SearchBar;
