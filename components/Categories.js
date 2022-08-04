import { Box, Chip, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Categories = () => {
  // handles the chip if clicked on: the chip could be a quicklink or a filter for results
  function handleChip() {
    console.log('Categories Component ChipClicked');
  }
  return (
    <>
      <Container
        sx={{
          marginTop: '24px',
          display: 'flex',
          justifyContent: 'center',
          // backgroundColor: 'red',
        }}
        maxWidth="lg"
      >
        {/* Using Box instead of grid because grid with spacing can cause overlapping issues. */}
        <Box
          display="flex"
          sx={{
            overflowX: 'auto',
            // All the chips except for the last one
            '& > *:not(:last-child)': { marginRight: '16px' },
            // All the chips
            '& > *': { border: 1, padding: '16px 16px', fontSize: '16px' },
          }}
        >
          <Chip
            label={<MenuIcon sx={{ color: 'white', mt: 0.5 }} />} //This is the filter button (change icon to be different from burger menu icon)
            variant="outlined"
            onClick={handleChip}
            sx={{
              backgroundColor: '#343A40',
            }}
          />
          <Chip label="Pizza" variant="outlined" onClick={handleChip} />
          <Chip label="Pizza" variant="outlined" onClick={handleChip} />
          <Chip label="Pizza" variant="outlined" onClick={handleChip} />
          <Chip label="Pizza" variant="outlined" onClick={handleChip} />
          <Chip label="Pizza" variant="outlined" onClick={handleChip} />
          <Chip label="Pizza" variant="outlined" onClick={handleChip} />
          <Chip label="Pizza" variant="outlined" onClick={handleChip} />
          <Chip label="Pizza" variant="outlined" onClick={handleChip} />
        </Box>
      </Container>
    </>
  );
};

export default Categories;
