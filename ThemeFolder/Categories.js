import { Box, Chip } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const Categories = () => {
  return (
    <>
      <Container
        sx={{
          marginTop: {
            xs: '32px',
            sm: '80px',
            md: '88px',
          },
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '',
        }}
        maxWidth="lg"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            overflowX: 'auto',
            // All the chips except for the last one
            '& > *:not(:last-child)': { marginRight: '16px' },
            // All the chips
            '& > div': {
              border: ' 0.75px solid rgba(114, 117, 118, 1)',
              padding: {
                xs: '16px 16px',
                sm: '16px 8px',
                md: '16 px 16px',
              },
              fontSize: '16px',
              borderRadius: '40px',
            },
          }}
        >
          <Chip label="🍕 Pizza" variant="outlined" onClick={handleChip} />
          <Chip label="🍔 Burgers" variant="outlined" onClick={handleChip} />
          <Chip label="🥡 Chinese" variant="outlined" onClick={handleChip} />
          <Chip label="🍗 Fried" variant="outlined" onClick={handleChip} />
          <Chip label="🍖 BBQ" variant="outlined" onClick={handleChip} />
          <Chip label="🍰 Desserts" variant="outlined" onClick={handleChip} />
          <Chip label="🥤 Drinks" variant="outlined" onClick={handleChip} />
        </Box>
      </Container>
    </>
  );
};
export default Categories;
