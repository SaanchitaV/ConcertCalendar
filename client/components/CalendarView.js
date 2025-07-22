import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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
  }
];

export default function CalendarView() {
  const eventStyleGetter = () => ({
    style: {
      backgroundColor: '#4f46e5',
      color: 'white',
      borderRadius: '5px',
      padding: '2px'
    }
  });

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div className="text-lg font-semibold">Select Date Range</div>
        <div className="space-x-2">
          <button className="bg-gray-200 px-3 py-1 rounded">Week</button>
          <button className="bg-gray-200 px-3 py-1 rounded">Month</button>
          <button className="bg-gray-200 px-3 py-1 rounded">Custom</button>
        </div>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
}