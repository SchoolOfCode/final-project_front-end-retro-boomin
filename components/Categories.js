import { Chip, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const Categories = () => {
  // handles the chip if clicked on: the chip could be a quicklink or a filter for results
  function handleChip() {
    console.log('Categories Component ChipClicked');
  }
  return (
    <>
      <Container sx={{ border: 1, mt: 10, backgroundColor: 'red' }}>
        <Grid container spacing={16}>
          <Grid item>
            <Chip
              label="Pizza"
              variant="outlined"
              onClick={handleChip}
              sx={{ padding: '8px 16px', fontSize: '14px' }}
            />
            <Chip
              label="Pizza"
              variant="outlined"
              onClick={handleChip}
              sx={{ padding: '8px 16px', fontSize: '14px' }}
            />
            <Chip
              label="Pizza"
              variant="outlined"
              onClick={handleChip}
              sx={{ padding: '8px 16px', fontSize: '14px' }}
            />
            <Chip
              label="Pizza"
              variant="outlined"
              onClick={handleChip}
              sx={{ padding: '8px 16px', fontSize: '14px' }}
            />
            <Chip
              label="Pizza"
              variant="outlined"
              onClick={handleChip}
              sx={{ padding: '8px 16px', fontSize: '14px' }}
            />
            <Chip
              label="Pizza"
              variant="outlined"
              onClick={handleChip}
              sx={{ padding: '8px 16px', fontSize: '14px' }}
            />
            <Chip
              label="Pizza"
              variant="outlined"
              onClick={handleChip}
              sx={{ padding: '8px 16px', fontSize: '14px' }}
            />
            <Chip
              label="Pizza"
              variant="outlined"
              onClick={handleChip}
              sx={{ padding: '8px 16px', fontSize: '14px' }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Categories;
