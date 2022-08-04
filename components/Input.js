import React from 'react';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Input({ onChange, sx }) {
  console.log('onChange', onChange);
  return (
    <>
      <Box
        sx={{
          ...sx,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#F7F7F7',
          borderRadius: '100px',
          py: 1,
          px: 2,
          '& input': {
            border: 'none',
            outline: 'none',
            borderRadius: '100px',
            fontSize: '1.2rem',
          },
        }}
      >
        <SearchIcon sx={{ color: 'black' }} />
        <input
          onChange={onChange}
          placeholder="Search Recipe"
          style={{ backgroundColor: '#F7F7F7' }}
        />
      </Box>
    </>
  );
}

export default Input;
