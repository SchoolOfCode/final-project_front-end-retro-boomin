import { Container, Grid, Paper, Box, Typography, Chip } from '@mui/material';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Cards = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 10 }}>
      {/* <Grid container spacing={5}> */}
      {/* <Grid item xs={6} sm={6} md={4} lg={3}> */}
      <Box
        sx={{
          display: 'flex',
          '& > *': {
            minWidth: '250px',
            '&:not(:last-child)': { marginRight: '24px' },
          },
          overflowX: 'auto',
        }}
      >
        <Paper sx={{ overflow: 'hidden' }}>
          <Box
            sx={{
              height: '200px',
              position: 'relative',
            }}
          >
            <Image src="/test.jpg" layout="fill" />

            <Chip
              color="success"
              label="Organic"
              sx={{
                zIndex: 100,
                position: 'absolute',
                top: '16px',
                right: '16px',
              }}
            />
            <FavoriteBorderOutlinedIcon
              sx={{
                zIndex: 101,
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                backgroundColor: '#fff',
                borderRadius: '100%',
                padding: '8px',
                fontSize: '40px',
                color: '#FF6B6B',
              }}
            />
          </Box>

          <Box padding="16px">
            <Typography
              variant="h6"
              sx={{ fontSize: '16px', fontWeight: '500' }}
            >
              Chicken and Broccoli with Spinach
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              marginTop="16px"
              marginBottom="16px"
            >
              <StarIcon sx={{ color: 'yellow', marginRight: '4px' }} /> 4.5
            </Box>

            <Box display="flex" alignItems="center">
              <AccessTimeIcon sx={{ color: '#343A40', marginRight: '4px' }} />{' '}
              20 mins
            </Box>
          </Box>
        </Paper>

        <Paper sx={{ overflow: 'hidden' }}>
          <Box
            sx={{
              height: '200px',
              position: 'relative',
            }}
          >
            <Image src="/test.jpg" layout="fill" />

            <Chip
              color="success"
              label="Organic"
              sx={{
                zIndex: 100,
                position: 'absolute',
                top: '16px',
                right: '16px',
              }}
            />
            <FavoriteBorderOutlinedIcon
              sx={{
                zIndex: 101,
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                backgroundColor: '#fff',
                borderRadius: '100%',
                padding: '8px',
                fontSize: '40px',
                color: '#FF6B6B',
              }}
            />
          </Box>

          <Box padding="16px">
            <Typography
              variant="h6"
              sx={{ fontSize: '16px', fontWeight: '500' }}
            >
              Chicken and Broccoli with Spinach
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              marginTop="16px"
              marginBottom="16px"
            >
              <StarIcon sx={{ color: 'yellow', marginRight: '4px' }} /> 4.5
            </Box>

            <Box display="flex" alignItems="center">
              <AccessTimeIcon sx={{ color: '#343A40', marginRight: '4px' }} />{' '}
              20 mins
            </Box>
          </Box>
        </Paper>

        <Paper sx={{ overflow: 'hidden' }}>
          <Box
            sx={{
              height: '200px',
              position: 'relative',
            }}
          >
            <Image src="/test.jpg" layout="fill" />

            <Chip
              color="success"
              label="Organic"
              sx={{
                zIndex: 100,
                position: 'absolute',
                top: '16px',
                right: '16px',
              }}
            />
            <FavoriteBorderOutlinedIcon
              sx={{
                zIndex: 101,
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                backgroundColor: '#fff',
                borderRadius: '100%',
                padding: '8px',
                fontSize: '40px',
                color: '#FF6B6B',
              }}
            />
          </Box>

          <Box padding="16px">
            <Typography
              variant="h6"
              sx={{ fontSize: '16px', fontWeight: '500' }}
            >
              Chicken and Broccoli with Spinach
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              marginTop="16px"
              marginBottom="16px"
            >
              <StarIcon sx={{ color: 'yellow', marginRight: '4px' }} /> 4.5
            </Box>

            <Box display="flex" alignItems="center">
              <AccessTimeIcon sx={{ color: '#343A40', marginRight: '4px' }} />{' '}
              20 mins
            </Box>
          </Box>
        </Paper>

        <Paper sx={{ overflow: 'hidden' }}>
          <Box
            sx={{
              height: '200px',
              position: 'relative',
            }}
          >
            <Image src="/test.jpg" layout="fill" />

            <Chip
              color="success"
              label="Organic"
              sx={{
                zIndex: 100,
                position: 'absolute',
                top: '16px',
                right: '16px',
              }}
            />
            <FavoriteBorderOutlinedIcon
              sx={{
                zIndex: 101,
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                backgroundColor: '#fff',
                borderRadius: '100%',
                padding: '8px',
                fontSize: '40px',
                color: '#FF6B6B',
              }}
            />
          </Box>

          <Box padding="16px">
            <Typography
              variant="h6"
              sx={{ fontSize: '16px', fontWeight: '500' }}
            >
              Chicken and Broccoli with Spinach
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              marginTop="16px"
              marginBottom="16px"
            >
              <StarIcon sx={{ color: 'yellow', marginRight: '4px' }} /> 4.5
            </Box>

            <Box display="flex" alignItems="center">
              <AccessTimeIcon sx={{ color: '#343A40', marginRight: '4px' }} />{' '}
              20 mins
            </Box>
          </Box>
        </Paper>
      </Box>
      {/* </Grid> */}
      {/* </Grid> */}
    </Container>
  );
};
export default Cards;
