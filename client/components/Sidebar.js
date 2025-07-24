import { Autocomplete, TextField, Button, Stack, Typography, Divider, List, ListItem, ListItemText, Modal, Card, CardContent, Link } from '@mui/material';
import { useState } from 'react';
import moment from 'moment';
const regions = ['Chennai', 'Bengaluru', 'Hyderabad', 'Mumbai'];
const sabhas = ['Music Academy', 'Shaale.com', 'Eppo Events', 'Darbaar'];
const artists = [
 'TM Krishna',
 'Jayanthi Kumaresh',
 'Sanjay Subrahmanyan',
 'Sudha Raghunathan',
 'Ranjani Gayathri',
 'Ramana Balachandran',
 'Aruna Sairam',
];
// Dummy data for today's concerts
const todaysConcerts = [
 {
   title: 'TM Krishna - Concert',
   venue: 'Music Academy, Chennai',
   city: 'Chennai',
   ticketUrl: 'https://bookmyshow.com',
   sabhaUrl: 'https://musicacademymadras.in',
   start: new Date(2025, 6, 25, 18, 0),
   end: new Date(2025, 6, 25, 20, 0),
 },
 {
   title: 'Sanjay Subrahmanyan - Concert',
   venue: 'Eppo Events Hall',
   city: 'Bengaluru',
   ticketUrl: 'https://bookmyshow.com',
   sabhaUrl: 'https://eppoevents.in',
   start: new Date(2025, 6, 25, 19, 0),
   end: new Date(2025, 6, 25, 21, 0),
 },
];
export default function Sidebar() {
 const [open, setOpen] = useState(false);
 const [selectedConcert, setSelectedConcert] = useState(null);
 const handleOpen = (concert) => {
   setSelectedConcert(concert);
   setOpen(true);
 };
 const handleClose = () => setOpen(false);
 return (
<>
<Stack spacing={2}>
<Autocomplete
         options={regions}
         renderInput={(params) => <TextField {...params} label="Select City" variant="outlined" size="small" />}
       />
<Autocomplete
         options={artists}
         renderInput={(params) => <TextField {...params} label="Artist" variant="outlined" size="small" />}
       />
<Autocomplete
         options={sabhas}
         renderInput={(params) => <TextField {...params} label="Sabha" variant="outlined" size="small" />}
       />
<Button variant="contained" color="primary" fullWidth>
         Filter
</Button>
<Button
         variant="contained"
         fullWidth
         sx={{
           bgcolor: 'green',
           color: 'white',
           '&:hover': { bgcolor: 'darkgreen' },
         }}
>
         Upload PDF / Image
</Button>
       {/* Divider and Today's Concerts Section */}
<Divider sx={{ my: 2 }} />
<Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
         Today’s Concerts
</Typography>
<List dense>
         {todaysConcerts.map((concert, idx) => (
<ListItem button key={idx} onClick={() => handleOpen(concert)}>
<ListItemText
               primary={concert.title}
               secondary={concert.venue}
               primaryTypographyProps={{ fontSize: '0.9rem' }}
               secondaryTypographyProps={{ fontSize: '0.75rem' }}
             />
</ListItem>
         ))}
</List>
</Stack>
     {/* Modal on Concert Click */}
<Modal open={open} onClose={handleClose}>
<Card
         sx={{
           width: 400,
           maxWidth: '90vw',
           mx: 'auto',
           my: '10%',
           p: 2,
           outline: 'none',
         }}
>
<CardContent>
<Typography variant="h6" gutterBottom>
             {selectedConcert?.title}
</Typography>
           {selectedConcert?.venue && (
<Typography variant="body2" gutterBottom>
               Venue:{' '}
<Link
                 href={`https://www.google.com/maps/search/?q=${encodeURIComponent(
                   selectedConcert.venue
                 )}`}
                 target="_blank"
                 rel="noopener"
>
                 {selectedConcert.venue}
</Link>
</Typography>
           )}
<Typography variant="body2" gutterBottom>
             City: {selectedConcert?.city}
</Typography>
           {selectedConcert?.ticketUrl && (
<Typography variant="body2" gutterBottom>
               Tickets:{' '}
<Link href={selectedConcert.ticketUrl} target="_blank">
                 Book Here
</Link>
</Typography>
           )}
           {selectedConcert?.sabhaUrl && (
<Typography variant="body2" gutterBottom>
               Sabha:{' '}
<Link href={selectedConcert.sabhaUrl} target="_blank">
                 Visit Sabha Page
</Link>
</Typography>
           )}
<Typography variant="body2" color="textSecondary">
             Date: {moment(selectedConcert?.start).format('MMMM Do YYYY')}
<br />
             Time: {moment(selectedConcert?.start).format('hh:mm A')} –{' '}
             {moment(selectedConcert?.end).format('hh:mm A')}
</Typography>
</CardContent>
</Card>
</Modal>
</>
 );
}