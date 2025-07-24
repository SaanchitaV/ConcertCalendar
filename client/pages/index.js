import Head from 'next/head';
import { Grid, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CalendarView from '../components/CalendarView';
import Footer from '../components/Footer';
export default function Home() {
  return (
      <>
      <Head>
      <title>Carnatic Concert Calendar</title>
      </Head>
      <Box sx={{minHeight: '100vh',display: 'flex',flexDirection: 'column', bgcolor: 'background.default',color: 'text.primary',}}>
      <Navbar />
      <Grid container sx={{ flex: 1 }}>
      <Grid size={{sm: 12, md:2, lg: 2}} sx={{borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', p: 2,minWidth: 220,}}>
            <Sidebar />
      </Grid>
      <Grid item size={{sm: 12, md:10, lg: 10}} sx={{ p: 4 }}>
            <CalendarView />
      </Grid>
      </Grid>
      <Footer />
      </Box>
      </>
  );
}
 