import Head from 'next/head';
import Banners from '../components/banners';
import Navbar from '../components/navbar';
import Searchbar from '../components/searchbar';
import {Box} from "@mui/material"

export default function Home() {
  return (
    <Box id="mainBox">
      <Head>
        <title>Craveaway</title>
      </Head>

      <main>
        <Navbar></Navbar>
        <Searchbar />
        <Banners />
      </main>
    </Box>
  );
}
