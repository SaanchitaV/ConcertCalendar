import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
 Box,
 Button,
 Typography,
 Modal,
 Card,
 CardContent,
 Link,
} from '@mui/material';
import { useState } from 'react';
const localizer = momentLocalizer(moment);
const events = [
 {
   title: 'TM Krishna - Concert',
   start: new Date(2025, 6, 25, 18, 0),
   end: new Date(2025, 6, 25, 20, 0),
   venue: 'Music Academy, Chennai',
   city: 'Chennai',
   ticketUrl: 'https://bookmyshow.com',
   sabhaUrl: 'https://musicacademymadras.in',
 },
  {
   title: 'TM Krishna - Concert',
   start: new Date(2025, 6, 25, 18, 0),
   end: new Date(2025, 6, 25, 20, 0),
   venue: 'Music Academy, Chennai',
   city: 'Chennai',
   ticketUrl: 'https://bookmyshow.com',
   sabhaUrl: 'https://musicacademymadras.in',
 },
  {
   title: 'TM Krishna - Concert',
   start: new Date(2025, 6, 25, 18, 0),
   end: new Date(2025, 6, 25, 20, 0),
   venue: 'Music Academy, Chennai',
   city: 'Chennai',
   ticketUrl: 'https://bookmyshow.com',
   sabhaUrl: 'https://musicacademymadras.in',
 },
  {
   title: 'TM Krishna - Concert',
   start: new Date(2025, 6, 25, 18, 0),
   end: new Date(2025, 6, 25, 20, 0),
   venue: 'Music Academy, Chennai',
   city: 'Chennai',
   ticketUrl: 'https://bookmyshow.com',
   sabhaUrl: 'https://musicacademymadras.in',
 }
];
export default function CalendarView() {
 const [selectedEvent, setSelectedEvent] = useState(null);
 const [open, setOpen] = useState(false);
 const eventStyleGetter = () => ({
   style: {
     backgroundColor: '#4f46e5',
     color: 'white',
     borderRadius: '5px',
     padding: '2px',
   },
 });
 const handleSelectEvent = (event) => {
   setSelectedEvent(event);
   setOpen(true);
 };
 const handleClose = () => setOpen(false);
 return (
<Box sx={{ flexGrow: 1 }}>
<Box className="mb-4 flex justify-between items-center">
<Box className="space-x-2">
</Box>
</Box>
<Calendar
       localizer={localizer}
       events={events}
       startAccessor="start"
       endAccessor="end"
       style={{ height: 600 }}
       eventPropGetter={eventStyleGetter}
       onSelectEvent={handleSelectEvent}
     />
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
             {selectedEvent?.title}
</Typography>
           {selectedEvent?.venue && (
<Typography variant="body2" gutterBottom>
               Venue:{' '}
<Link
                 href={`https://www.google.com/maps/search/?q=${encodeURIComponent(
                   selectedEvent.venue
                 )}`}
                 target="_blank"
                 rel="noopener"
>
                 {selectedEvent.venue}
</Link>
</Typography>
           )}
<Typography variant="body2" gutterBottom>
             City: {selectedEvent?.city}
</Typography>
           {selectedEvent?.ticketUrl && (
<Typography variant="body2" gutterBottom>
               Tickets:{' '}
<Link href={selectedEvent.ticketUrl} target="_blank">
                 Book Here
</Link>
</Typography>
           )}
           {selectedEvent?.sabhaUrl && (
<Typography variant="body2" gutterBottom>
               Sabha:{' '}
<Link href={selectedEvent.sabhaUrl} target="_blank">
                 Visit Sabha Page
</Link>
</Typography>
           )}
<Typography variant="body2" color="textSecondary">
             Date: {moment(selectedEvent?.start).format('MMMM Do YYYY')}
<br />
             Time: {moment(selectedEvent?.start).format('hh:mm A')} -{' '}
             {moment(selectedEvent?.end).format('hh:mm A')}
</Typography>
</CardContent>
</Card>
</Modal>
</Box>
 );
}