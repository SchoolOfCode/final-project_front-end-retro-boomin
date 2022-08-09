import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Typography, Chip, Stack } from '@mui/material';
import RecCard from '../components/recCard';
import data from '../db/recipeData.js';
import { useState } from 'react';
import { Box } from '@mui/system';
import Cards from '../ThemeFolder/Cards';
import { Navbar } from '../ThemeFolder/Navbar';
import { Container } from '@mui/material';
import { Image } from 'next/image';
import { Grid } from '@mui/material';

import { Button } from '@mui/material';

export default function Profile() {
  const { user, error, isLoading } = useUser();
  const [list2, setList2] = useState([]);
  const [shopEmp, setShopEmp] = useState(false);
  const [list, setList] = useState([
    { id: 1, label: 'Clickable Deletable' },
    { id: 2, label: 'Clickable Deletable' },
    { id: 3, label: 'Clickable Deletable' },
    { id: 4, label: 'Clickable Deletable' },
    { id: 5, label: 'Clickable Deletable' },
    { id: 6, label: 'Clickable Deletable' },
    { id: 7, label: 'Clickable Deletable' },
    { id: 8, label: 'Clickable Deletable' },
    { id: 9, label: 'Clickable Deletable' },
    { id: 10, label: 'Clickable Deletable' },
    { id: 11, label: 'Clickable Deletable' },
    { id: 12, label: 'Clickable Deletable' },
    { id: 13, label: 'Clickable Deletable' },
  ]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  // // CHANGE THIS DATA TO BE THE CARD THAT YOU HAVE CLICKED , HEART
  // // BACKEND!!!
  // // HAVE A EMPTY TABLE, ONCE THE HEART IS CLICKED, POST REQUEST TO THIS TABLE, POPULATE THIS DATA WITH THAT TABLE'S DATA
  // // TO GET DATA, GET REQUEST FROM THAT TABLE
  const handleClick = (e) => {
    console.info(e.currentTarget.innerText);
  };
  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  if (user) {
    return (
      <>
        <Navbar />
        <Container maxWidth="lg" sx={{ marginBottom: '88px' }}>
          <Box
            ml="15px"
            sx={
              {
                // backgroundColor: 'red',
              }
            }
          >
            <Typography
              variant="h4"
              mt="50px"
              sx={{
                fontWeight: '700',
                textAlign: 'center',
              }}
            >
              Profile
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={user.picture}
                alt={user.name}
                style={{
                  borderRadius: '100%',
                  width: '108px',
                  height: '108px',
                  marginBottom: '16px',
                  marginTop: '32px',
                }}
              />
              {user.name}
            </Box>

            {/* favourite list */}
            <Typography
              variant="h4"
              mt="40px"
              fontWeight={600}
              fontSize={'25px'}
            >
              Favourite
            </Typography>
            <Cards data={data} />
            <Stack
              direction="column"
              spacing={2}
              mt="15px"
              sx={{
                maxWidth: 345,
                display: 'flex',
                alignContent: 'flex-start',
                flexWrap: 'wrap',
              }}
            >
              {/* shopping list */}
              <Typography
                variant="h4"
                mt="40px"
                fontWeight={600}
                fontSize={'25px'}
              >
                Shopping List
              </Typography>
            </Stack>

            <Container
              maxWidth="lg"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: -2,
                justifyContent: 'flex-start',
                alignContent: 'space-between',
              }}
            >
              {list2.length === 4
                ? setShopEmp(true) && (
                    <Typography fontWeight={700}>Add smt</Typography>
                  )
                : null}
              {list.map((item) => (
                <Chip
                  variant="outlined"
                  label={item.label}
                  onClick={handleClick}
                  onDelete={() => handleDelete(item.id)}
                  sx={{
                    borderColor: '#FCC62E',
                    borderWidth: '1.5px',
                  }}
                ></Chip>
              ))}
            </Container>
          </Box>
        </Container>
      </>
    );
  }
  return (
    <>
      <div>
        <Navbar />
        <Box
          sx={{
            backgroundImage: 'url(/food_illustration.png)',
            minHeight: '100vh',
            paddingBottom: {
              xs: '0',
              sm: '40px',
              md: '40px',
            },
          }}
        >
          <br></br>
          <br></br>
          <Box
            sx={{
              borderRadius: 7,
              backgroundColor: 'white',
              paddingBottom: 8,
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              width: 300,
              height: 10,
              m: 'auto',
            }}
          >
            <Typography
              font-align="center"
              sx={{
                fontWeight: '800',
                fontSize: 15,
                paddingTop: 2,
                paddingBottom: 4,
                textAlign: 'center',
                m: 'auto',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              You must login to access your profile!
            </Typography>
          </Box>
          <>
            <Box
              sx={{
                backgroundColor: 'white',
                borderRadius: 1000,
                display: 'flex',
                width: '33%',
                m: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                alt="Loading..."
                className="fryingpan"
                margin="auto"
                width="400"
                height="250"
                data-id="14475354"
                data-animated-url="https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif"
                skip_resize="false"
                srcset="https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 320w,
  https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 400w,
  https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 450w,
  https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 640w,
  https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 700w,
  https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 800w,
  https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 840w,
  https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 1000w,
  https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 1200w,
  https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 768w,
  https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif 1600w"
                sizes="(max-width: 919px) 100vw, max(768px, 98vh)"
                src="https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif"
              ></img>
            </Box>
          </>
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: 10,
              paddingBottom: 3,
              paddingTop: 3,
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              width: '18%',
              m: 'auto',
            }}
          >
            <Link href="/api/auth/login" passHref>
              <Button
                variant="contained"
                className="fixedLoginButton"
                sx={{
                  fontWeight: '900',
                  marginTop: 15,
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  // width: '10%',
                  m: 'auto',
                }}
              >
                Login
              </Button>
            </Link>
          </Box>
        </Box>
      </div>
    </>
  );
}
