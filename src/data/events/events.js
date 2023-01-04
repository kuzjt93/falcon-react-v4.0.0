import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    calendar: { month: 'Mar', day: '26' },
    title: "Crain's New York Business",
    badge: {
      title: 'Free',
      type: 'soft-success'
    },
    organizer: 'AID MIT',
    time: '11:00AM',
    duration: 'Feb 29 - Mar 2',
    place: 'The Liberty Warehouse, New Yourk'
  },
  {
    id: uuid(),
    calendar: { month: 'Feb', day: '29' },
    title: 'Film Festival',
    organizer: 'American Nuclear Society',
    time: '11:00AM',
    duration: 'Feb 29 - Mar 2',
    place: 'Workbar - Central Square, Cambridge'
  },
  {
    id: uuid(),
    calendar: { month: 'Feb', day: '21' },
    title: 'Newmarket Nights',
    organizer: 'University of Oxford',
    time: '6:00AM',
    duration: '6:00AM - 5:00PM',
    place: 'Cambridge Boat Club, Cambridge'
  },
  {
    id: uuid(),
    calendar: { month: 'Dec', day: '31' },
    title: '31st Night Celebration',
    organizer: 'Chamber Music Society',
    time: '11:00PM',
    interested: '280 people interested',
    place: 'Tavern on the Greend, New York'
  },
  {
    id: uuid(),
    calendar: { month: 'Dec', day: '16' },
    title: 'Folk Festival',
    organizer: 'Harvard University',
    time: '9:00AM',
    location: 'Cambridge Masonic Association',
    place: 'Porter Square, North Cambridge'
  }
];
