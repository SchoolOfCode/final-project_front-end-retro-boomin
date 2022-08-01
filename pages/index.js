import Head from 'next/head';
import Banners from '../components/banners';
import Navbar from '../components/navbar';
import Searchbar from '../components/searchbar';
import RecCard from '../components/recCard.js';
import { Box } from '@mui/material';
// import data from '../db/recipeData.js';
import CreateRecipeButton from '../components/createRecipeButton';
import Link from 'next/link';
import { useContext } from 'react';
import { Context } from '../context/Context';
import { ConstructionOutlined } from '@mui/icons-material';

export default function Home() {
  const dataC = useContext(Context);
  console.log('dataC', dataC);

  // console.log('fromHomePage', data);

  return (
    <Box id="mainBox">
      <Head>
        <title>Craveaway</title>
      </Head>

      <main>
        <Searchbar />
        <Banners />

        <section className="homepageRecipeScroll-container">
          {dataC.cardsData.map((item) => {
            return <RecCard item={item} key={item.id} />;
          })}
        </section>

        <CreateRecipeButton text={'Create Recipe'} />
      </main>
    </Box>
  );
}

/*
- index.js is where all components are initially accessible from
- recCard is rendered on the index.js main page
- recCard receives data as props from the index.js main page

- in recCard this should be its own component:

            <Typography mt="32px" ml="24px" fontWeight="600">
              Top recipes today
            </Typography>



*/
