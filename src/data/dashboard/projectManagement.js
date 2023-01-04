import user1 from 'assets/img/team/1.jpg';
import user2 from 'assets/img/team/2.jpg';
import user3 from 'assets/img/team/3.jpg';
import user4 from 'assets/img/team/4.jpg';
import user5 from 'assets/img/team/5.jpg';
import user7 from 'assets/img/team/7.jpg';
import user10 from 'assets/img/team/10.jpg';
import user12 from 'assets/img/team/12.jpg';
import user13 from 'assets/img/team/13.jpg';
import user16 from 'assets/img/team/16.jpg';
import user25 from 'assets/img/team/25.jpg';
import user18 from 'assets/img/team/18.jpg';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';

import member1 from 'assets/img/team/7.jpg';
import member2 from 'assets/img/team/9.jpg';
import member3 from 'assets/img/team/12.jpg';
import member4 from 'assets/img/team/avatar.png';
import member5 from 'assets/img/team/16.jpg';
import member6 from 'assets/img/team/25.jpg';
import memberImg1 from 'assets/img/team/4-thumb.png';
import memberImg2 from 'assets/img/team/5-thumb.png';
import memberImg3 from 'assets/img/team/16.jpg';
import activity1 from 'assets/img/management/activity-1.png';
import activity2 from 'assets/img/management/activity-2.png';
import activity3 from 'assets/img/management/activity-3.png';
import activity4 from 'assets/img/management/activity-4.png';
import activity5 from 'assets/img/management/activity-5.png';
import activity6 from 'assets/img/management/activity-6.png';
import activity7 from 'assets/img/management/activity-7.png';
import activity8 from 'assets/img/management/activity-8.png';
import activity9 from 'assets/img/management/activity-9.png';

export const greetingItems = [
  {
    title: 'General',
    text: 'Customize with a few clicks',
    icon: 'chess-rook',
    color: 'primary'
  },
  {
    title: 'Upgrade to pro',
    text: 'Try Pro for 14 days free! ',
    icon: 'crown',
    color: 'warning'
  },
  {
    title: 'Create a meeting',
    text: 'Manage and update your meetings',
    icon: 'video',
    color: 'success'
  },
  {
    title: 'Members activity',
    text: 'Monitor activity and supervise',
    icon: 'user',
    color: 'info'
  }
];
export const discussionMembers = [
  {
    id: 1,
    img: user1,
    size: 'xl'
  },
  {
    id: 2,
    img: user2,
    size: 'xl'
  },
  {
    id: 3,
    img: user3,
    size: 'xl'
  },
  {
    id: 4,
    name: '+50',
    size: 'xl'
  }
];

export const projectUsers = [
  {
    id: 1,
    img: user1
  },
  {
    id: 2,
    img: user2
  },
  {
    id: 3,
    img: user3
  },
  {
    id: 4,
    img: user4
  },
  {
    id: 5,
    img: user5
  },
  {
    id: 6,
    name: '+50'
  }
];

export const projectsTable = [
  {
    id: 1,
    project: 'Organizing UI',
    team: 'ThemeWagon',
    iconColor: 'text-primary'
  },
  {
    id: 2,
    project: 'Create Mobile View',
    team: 'Mailbluster',
    iconColor: 'text-warning'
  },
  {
    id: 3,
    project: 'Create Landing Pages',
    team: 'BlackBOx',
    iconColor: 'text-secondary'
  },
  {
    id: 4,
    project: 'Front end issues',
    team: 'Falcon Team',
    iconColor: 'text-info'
  }
];

export const progressBar = [
  {
    id: 1,
    amount: 25,
    variant: 'primary'
  },
  {
    id: 2,
    amount: 45,
    variant: 'secondary'
  },
  {
    id: 3,
    amount: 15,
    variant: 'warning'
  },
  {
    id: 4,
    amount: 15,
    variant: 'info'
  }
];

// ----------- Calendar Management events ------------------------
const date = new Date();
const thisDay = dayjs(date).format('DD');
const plus2Day = dayjs(date).add(2, 'day').format('DD');
const thisMonthNumber = dayjs(date).format('MM');
const thisMonthName = dayjs(date).format('MMM');
const upcomingMonthNumber = dayjs(date).add(1, 'month').format('MM');
const upcomingMonthName = dayjs(date).format('MMM');

const thisYear = dayjs().format('YYYY');
export const managementEvents = [
  {
    id: uuid(),
    title: `Monthly team meeting for Falcon React Project`,
    start: `${thisYear}-${thisMonthNumber}-07`,
    end: `${thisYear}-${thisMonthNumber}-09`,
    startTime: `07 ${thisMonthName}, ${thisYear}`,
    endTime: `10 ${thisMonthName}, ${thisYear}`,
    extendedProps: {
      description:
        'Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council.',
      location:
        'Boston Harborwalk, Christopher Columbus Park, </br> Boston, MA 02109, United States',
      organizer: 'Boston Harbor Now'
    },
    display: 'background',
    color: 'primary',
    classNames: `border border-2 border-primary bg-100`
  },
  {
    id: uuid(),
    title: `Newmarket Nights`,
    start: `${thisYear}-${thisMonthNumber}-16`,
    end: `${thisYear}-${thisMonthNumber}-18`,
    startTime: `16 ${thisMonthName}, ${thisYear}`,
    extendedProps: {
      description:
        'Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council.',
      location:
        'Boston Harborwalk, Christopher Columbus Park, </br> Boston, MA 02109, United States',
      organizer: 'Boston Harbor Now'
    },
    display: 'background',
    color: 'success',
    classNames: `border border-2 border-success bg-100`
  },
  {
    id: uuid(),
    title: 'Folk Festival',
    start: `${thisYear}-${thisMonthNumber}-25`,
    end: `${thisYear}-${thisMonthNumber}-28`,
    startTime: `07 ${thisMonthName}, ${thisYear}`,
    endTime: `10 ${thisMonthName}, ${thisYear}`,
    extendedProps: {
      description:
        'Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council.',
      location:
        'Boston Harborwalk, Christopher Columbus Park, </br> Boston, MA 02109, United States',
      organizer: 'Boston Harbor Now'
    },
    display: 'background',
    color: 'warning',
    classNames: `border border-2 border-warning bg-100`
  },
  {
    id: uuid(),
    title: `Film Festival`,
    start: `${thisYear}-${upcomingMonthNumber}-${thisDay}`,
    end: `${thisYear}-${upcomingMonthNumber}-${plus2Day}`,
    startTime: `07 ${upcomingMonthName}, ${thisYear}`,
    endTime: `10 ${upcomingMonthName}, ${thisYear}`,
    extendedProps: {
      description:
        'Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council.',
      location:
        'Boston Harborwalk, Christopher Columbus Park, </br> Boston, MA 02109, United States',
      organizer: 'Boston Harbor Now'
    },
    display: 'background',
    color: 'danger',
    classNames: `border border-2 border-danger bg-100`
  },
  {
    id: uuid(),
    title: 'Meeting',
    start: `${thisYear}-${upcomingMonthNumber}-28`,
    startTime: `07 ${upcomingMonthName}, ${thisYear}`,
    extendedProps: {
      description:
        'Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council.',
      location:
        'Boston Harborwalk, Christopher Columbus Park, </br> Boston, MA 02109, United States',
      organizer: 'Boston Harbor Now'
    },
    display: 'background',
    color: 'warning',
    classNames: `border border-2 border-warning bg-100`
  }
];

export const todoList = [
  {
    id: 1,
    task: 'Design a facebook ad',
    color: 'primary'
  },
  {
    id: 2,
    task: 'Analyze Data',
    color: 'secondary'
  },
  {
    id: 3,
    task: 'Youtube campaign',
    color: 'success'
  },
  {
    id: 4,
    task: 'Assign 10 employee',
    color: 'warning'
  },
  {
    id: 5,
    task: 'Meeting at 12',
    color: 'danger'
  },
  {
    id: 6,
    task: 'Meeting at 10',
    color: 'info'
  }
];

export const weeklyReport = [
  ['product', 'This Week', 'Last Week'],
  ['Sun', 43, 85],
  ['Mon', 83, 73],
  ['Tue', 86, 62],
  ['Wed', 72, 53],
  ['Thu', 80, 50],
  ['Fri', 50, 70],
  ['Sat', 80, 90]
];
export const membersInfo = [
  {
    id: 1,
    name: 'Gavin Belson',
    img: member1,
    status: 'online',
    role: 'CRM dashboard design',
    attendance: {
      text: 'Late',
      color: 'warning'
    },
    today: {
      amount: 12,
      color: 'danger',
      time: '1h:52m'
    },
    thisWeek: {
      amount: 68,
      time: '1h:52m',
      color: 'primary'
    },
    data: [15, 22, 28, 20, 20, 35]
  },
  {
    id: 2,
    name: 'Rsuss Hanneman',
    img: member2,
    status: 'online',
    role: 'Smart Learning Management',
    attendance: {
      text: 'intime',
      color: 'success'
    },
    today: {
      amount: 86,
      color: 'success',
      time: '1h:52m'
    },
    thisWeek: {
      amount: 45,
      time: '1h:52m',
      color: 'warning'
    },
    data: [30, 20, 40, 18, 20, 35]
  },
  {
    id: 3,
    name: 'Peter Gregory',
    img: member3,
    status: 'away',
    role: 'Graduate Network',
    attendance: {
      text: 'intime',
      color: 'success'
    },
    today: {
      amount: 97,
      color: 'success',
      time: '1h:52m'
    },
    thisWeek: {
      amount: 60,
      time: '1h:52m',
      color: 'primary'
    },
    data: [20, 22, 18, 30, 20, 35]
  },
  {
    id: 4,
    name: 'Jian-Yang',
    img: member4,
    status: 'online',
    role: 'Quality testing',
    attendance: {
      text: 'intime',
      color: 'success'
    },
    today: {
      amount: 34,
      color: 'warning',
      time: '1h:52m'
    },
    thisWeek: {
      amount: 80,
      time: '1h:52m',
      color: 'success'
    },
    data: [30, 22, 18, 20, 20, 35]
  },
  {
    id: 5,
    name: 'Laurie Bream',
    img: member5,
    status: 'do-not-disturb',
    role: 'Accounts',
    attendance: {
      text: 'Late',
      color: 'warning'
    },
    today: {
      amount: 12,
      color: 'primary',
      time: '1h:52m'
    },
    thisWeek: {
      amount: 68,
      time: '1h:52m',
      color: 'danger'
    },
    data: [20, 22, 18, 20, 20, 35]
  },
  {
    id: 6,
    name: 'Fionna Mayer',
    img: member6,
    status: 'online',
    role: 'SAAS dashboard design',
    attendance: {
      text: 'Absent',
      color: 'danger'
    },
    today: {
      amount: 12,
      color: 'primary',
      time: '1h:52m'
    },
    thisWeek: {
      amount: 68,
      time: '1h:52m',
      color: 'success'
    },
    data: [30, 22, 18, 30, 20, 35]
  }
];

export const runningProjects = [
  {
    id: 1,
    title: 'CRM dashboard design',
    avatar: {
      name: 'C',
      size: 'xl'
    },
    projectName: 'Falcon',
    members: [
      {
        id: uuid(),
        img: user1,
        size: 'xl'
      },
      {
        id: uuid(),
        img: user2,
        size: 'xl'
      },
      {
        id: uuid(),
        name: '+2',
        size: 'xl'
      }
    ],
    progress: 50,
    color: 'primary',
    duration: '12h:50m:00s',
    date: '01/02/22'
  },
  {
    id: 2,
    title: 'UI/UX Redesign',
    avatar: {
      name: 'U',
      size: 'xl',
      contentClass: 'text-success bg-soft-success fs-0'
    },
    projectName: 'Themewagon',
    members: [
      {
        id: uuid(),
        img: user3,
        size: 'xl'
      },
      {
        id: uuid(),
        img: user4,
        size: 'xl'
      },
      {
        id: uuid(),
        name: '+5',
        size: 'xl'
      }
    ],
    progress: 70,
    color: 'success',
    duration: '11h:50m:00s',
    date: '04/02/22'
  },
  {
    id: 3,
    title: 'F.A.Q Section',
    avatar: {
      name: 'F',
      size: 'xl',
      contentClass: 'text-info bg-soft-info fs-0'
    },
    projectName: 'Mailbluster',
    members: [
      {
        id: uuid(),
        img: user5,
        size: 'xl'
      },
      {
        id: uuid(),
        img: user7,
        size: 'xl'
      }
    ],
    progress: 60,
    color: 'info',
    duration: '3h:30m:50s',
    date: '01/02/22'
  },
  {
    id: 4,
    title: 'Drip Campaign Feature',
    avatar: {
      name: 'D',
      size: 'xl',
      contentClass: 'text-warning bg-soft-warning fs-0'
    },
    projectName: 'Themewagon',
    members: [
      {
        id: uuid(),
        img: user7,
        size: 'xl'
      },
      {
        id: uuid(),
        img: user10,
        size: 'xl'
      },
      {
        id: uuid(),
        name: '+2',
        size: 'xl'
      }
    ],
    progress: 80,
    color: 'warning',
    duration: '12h:20m:00s',
    date: '22/03/22'
  },
  {
    id: 5,
    title: 'Studio Recording',
    avatar: {
      name: 'S',
      size: 'xl',
      contentClass: 'text-danger bg-soft-danger fs-0'
    },
    projectName: 'Mailbluster Marketing',
    members: [
      {
        id: uuid(),
        img: user12,
        size: 'xl'
      },
      {
        id: uuid(),
        img: user13,
        size: 'xl'
      },
      {
        id: uuid(),
        img: user5,
        size: 'xl'
      }
    ],
    progress: 40,
    color: 'danger',
    duration: '11h:10m:00s',
    date: '28/02/22'
  },
  {
    id: 6,
    title: 'Project Managenemt',
    avatar: {
      name: 'P',
      size: 'xl',
      contentClass: 'text-success bg-soft-success fs-0'
    },
    projectName: 'Themewagon',
    members: [
      {
        id: uuid(),
        img: user16,
        size: 'xl'
      },
      {
        id: uuid(),
        img: user25,
        size: 'xl'
      },
      {
        id: uuid(),
        img: user18,
        size: 'xl'
      }
    ],
    progress: 50,
    color: 'success',
    duration: '12h:30m:30s',
    date: '08/01/22'
  }
];
export const recentActivities = [
  {
    id: 0,
    title: 'Antony Hopkins sent an Email',
    text: 'Got an email for previous year sale report',
    icon: 'envelope',
    time: '2m ago',
    status: 'completed'
  },
  {
    id: 1,
    title: 'Emma archived a board',
    text: "A finished project's board is archived recently",
    icon: 'archive',
    time: '26m ago',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Falcon v3.0.0 released with new features',
    text: 'Falcon new version is released successfully with new Dashboards',
    icon: 'code',
    time: '1h ago',
    status: 'current'
  },
  {
    id: 3,
    title: 'Rowan shared a link to the board',
    text: 'A link is shared with attachments',
    icon: 'code-branch',
    time: '3h ago',
    status: false
  },
  {
    id: 4,
    title: 'Anna updated a file',
    text: 'Fixed some bugs and spelling errors on this update',
    icon: ['far', 'file-code'],
    time: '4h ago',
    status: false
  }
];

export const membersActivities = [
  {
    id: 1,
    name: 'Chandler Bing',
    avatar: memberImg1,
    activity: [
      {
        id: 1.1,
        img: activity1,
        amount: '20%',
        color: 'danger'
      },
      {
        id: 1.2,
        img: activity2,
        amount: '67%',
        color: 'primary'
      },
      {
        id: 1.3,
        img: activity3,
        amount: '89%',
        color: 'success'
      }
    ]
  },
  {
    id: 2,
    name: 'Jared Dunn',
    avatar: memberImg2,
    activity: [
      {
        id: 2.1,
        img: activity4,
        amount: '20%',
        color: 'success'
      },
      {
        id: 2.2,
        img: activity5,
        amount: '67%',
        color: 'danger'
      },
      {
        id: 2.3,
        img: activity6,
        amount: '89%',
        color: 'primary'
      }
    ]
  },
  {
    id: 3,
    name: 'Monica Geller',
    avatar: memberImg3,
    activity: [
      {
        id: 3.1,
        img: activity7,
        amount: '20%',
        color: 'danger'
      },
      {
        id: 3.2,
        img: activity8,
        amount: '67%',
        color: 'success'
      },
      {
        id: 3.3,
        img: activity9,
        amount: '89%',
        color: 'primary'
      }
    ]
  }
];

export const markers = [
  {
    id: 0,
    lat: 53.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  },
  {
    id: 1,
    lat: 52.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  },
  {
    id: 2,
    lat: 51.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  },
  {
    id: 3,
    lat: 53.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  },
  {
    id: 4,
    lat: 54.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  },
  {
    id: 5,
    lat: 55.958332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  },
  {
    id: 6,
    lat: 53.908332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  },
  {
    id: 7,
    lat: 53.008332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  },
  {
    id: 8,
    lat: 53.158332,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  },
  {
    id: 9,
    lat: 53.000032,
    long: -1.080278,
    name: 'Diana Meyer',
    street: 'Slude Strand 27',
    location: '1130 Kobenhavn'
  },
  {
    id: 10,
    lat: 52.292001,
    long: -2.22,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  },
  {
    id: 11,
    lat: 52.392001,
    long: -2.22,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  },
  {
    id: 12,
    lat: 51.492001,
    long: -2.22,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  },
  {
    id: 13,
    lat: 51.192001,
    long: -2.22,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  },
  {
    id: 14,
    lat: 52.292001,
    long: -2.22,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  },
  {
    id: 15,
    lat: 54.392001,
    long: -2.22,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  },
  {
    id: 16,
    lat: 51.292001,
    long: -2.22,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  },
  {
    id: 17,
    lat: 52.102001,
    long: -2.22,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  },
  {
    id: 18,
    lat: 52.202001,
    long: -2.22,
    name: 'Anke Schroder',
    street: 'Industrivej 54',
    location: '4140 Borup'
  },
  {
    id: 19,
    lat: 51.063202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 20,
    lat: 51.363202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 21,
    lat: 51.463202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 22,
    lat: 51.563202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 23,
    lat: 51.763202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 24,
    lat: 51.863202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 25,
    lat: 51.963202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 26,
    lat: 51.000202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 27,
    lat: 51.000202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 28,
    lat: 51.163202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 29,
    lat: 52.263202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 30,
    lat: 53.463202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 31,
    lat: 55.163202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 32,
    lat: 56.263202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 33,
    lat: 56.463202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 34,
    lat: 56.563202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 35,
    lat: 56.663202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 36,
    lat: 56.763202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 37,
    lat: 56.863202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 38,
    lat: 56.963202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 39,
    lat: 57.973202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 40,
    lat: 57.163202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 41,
    lat: 51.163202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 42,
    lat: 51.263202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 43,
    lat: 51.363202,
    long: -1.308,
    name: 'Tobias Vogel',
    street: 'Mollebakken 33',
    location: '3650 Olstykke'
  },
  {
    id: 44,
    lat: 51.409,
    long: -2.647,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 45,
    lat: 53.68,
    long: -1.49,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 46,
    lat: 50.259998,
    long: -5.051,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 47,
    lat: 54.906101,
    long: -1.38113,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 48,
    lat: 53.383331,
    long: -1.466667,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 49,
    lat: 53.483002,
    long: -2.2931,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 50,
    lat: 51.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 51,
    lat: 51.109865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 52,
    lat: 51.209865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 53,
    lat: 51.309865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 54,
    lat: 51.409865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 55,
    lat: 51.609865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 56,
    lat: 51.709865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 57,
    lat: 51.809865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 58,
    lat: 51.909865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 59,
    lat: 52.109865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 60,
    lat: 52.209865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 61,
    lat: 52.309865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 62,
    lat: 52.409865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 63,
    lat: 52.509865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 64,
    lat: 52.609865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 65,
    lat: 52.709865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 66,
    lat: 52.809865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 67,
    lat: 52.909865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 68,
    lat: 52.519865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 69,
    lat: 52.529865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 70,
    lat: 52.539865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 71,
    lat: 53.549865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 72,
    lat: 52.549865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 73,
    lat: 53.109865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 74,
    lat: 53.209865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 75,
    lat: 53.319865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 76,
    lat: 53.329865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 77,
    lat: 53.409865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 78,
    lat: 53.559865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 79,
    lat: 53.619865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 80,
    lat: 53.629865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 81,
    lat: 53.639865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 82,
    lat: 53.649865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 83,
    lat: 53.669865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 84,
    lat: 53.669865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 85,
    lat: 53.719865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 86,
    lat: 53.739865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 87,
    lat: 53.749865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 88,
    lat: 53.759865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 89,
    lat: 53.769865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 90,
    lat: 53.769865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 91,
    lat: 53.819865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 92,
    lat: 53.829865,
    long: -0.118092,
    name: 'Richard Hendricks',
    street: '37 Seafield Place',
    location: 'London'
  },
  {
    id: 93,
    lat: 53.483959,
    long: -2.244644,
    name: 'Ethel B. Brooks',
    street: '2576 Sun Valley Road'
  },
  {
    id: 94,
    lat: 40.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  },
  {
    id: 95,
    lat: 39.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  },
  {
    id: 96,
    lat: 38.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  },
  {
    id: 97,
    lat: 37.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  },
  {
    id: 98,
    lat: 40.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  },
  {
    id: 99,
    lat: 41.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  },
  {
    id: 100,
    lat: 42.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  },
  {
    id: 101,
    lat: 43.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  },
  {
    id: 102,
    lat: 44.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  },
  {
    id: 103,
    lat: 45.737,
    long: -73.923,
    name: 'Marshall D. Lewis',
    street: '1489 Michigan Avenue',
    location: 'Michigan'
  },
  {
    id: 104,
    lat: 46.7128,
    long: 74.006,
    name: 'Elizabeth C. Lyons',
    street: '4553 Kenwood Place',
    location: 'Fort Lauderdale'
  },
  {
    id: 105,
    lat: 40.7128,
    long: 74.1181,
    name: 'Elizabeth C. Lyons',
    street: '4553 Kenwood Place',
    location: 'Fort Lauderdale'
  },
  {
    id: 106,
    lat: 14.235,
    long: 51.9253,
    name: 'Ralph D. Wylie',
    street: '3186 Levy Court',
    location: 'North Reading'
  },
  {
    id: 107,
    lat: 15.235,
    long: 51.9253,
    name: 'Ralph D. Wylie',
    street: '3186 Levy Court',
    location: 'North Reading'
  },
  {
    id: 108,
    lat: 16.235,
    long: 51.9253,
    name: 'Ralph D. Wylie',
    street: '3186 Levy Court',
    location: 'North Reading'
  },
  {
    id: 109,
    lat: 14.235,
    long: 51.9253,
    name: 'Ralph D. Wylie',
    street: '3186 Levy Court',
    location: 'North Reading'
  },
  {
    id: 110,
    lat: 15.8267,
    long: 47.9218,
    name: 'Hope A. Atkins',
    street: '3715 Hillcrest Drive',
    location: 'Seattle'
  },
  {
    id: 111,
    lat: 15.9267,
    long: 47.9218,
    name: 'Hope A. Atkins',
    street: '3715 Hillcrest Drive',
    location: 'Seattle'
  },
  {
    id: 112,
    lat: 23.4425,
    long: 58.4438,
    name: 'Samuel R. Bailey',
    street: '2883 Raoul Wallenberg Place',
    location: 'Cheshire'
  },
  {
    id: 113,
    lat: 23.5425,
    long: 58.3438,
    name: 'Samuel R. Bailey',
    street: '2883 Raoul Wallenberg Place',
    location: 'Cheshire'
  },
  {
    id: 114,
    lat: -37.8927369333,
    long: 175.4087452333,
    name: 'Samuel R. Bailey',
    street: '3228 Glory Road',
    location: 'Nashville'
  },
  {
    id: 115,
    lat: -38.9064188833,
    long: 175.4441556833,
    name: 'Samuel R. Bailey',
    street: '3228 Glory Road',
    location: 'Nashville'
  },
  {
    id: 116,
    lat: -12.409874,
    long: -65.596832,
    name: 'Ann J. Perdue',
    street: '921 Ella Street',
    location: 'Dublin'
  },
  {
    id: 117,
    lat: -22.090887,
    long: -57.411827,
    name: 'Jorge C. Woods',
    street: '4800 North Bend River Road',
    location: 'Allen'
  },
  {
    id: 118,
    lat: -19.019585,
    long: -65.261963,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  },
  {
    id: 119,
    lat: -16.500093,
    long: -68.214684,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  },
  {
    id: 120,
    lat: -17.413977,
    long: -66.165321,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  },
  {
    id: 121,
    lat: -16.489689,
    long: -68.119293,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  },
  {
    id: 122,
    lat: 54.766323,
    long: 3.08603729,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  },
  {
    id: 123,
    lat: 54.866323,
    long: 3.08603729,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  },
  {
    id: 124,
    lat: 49.537685,
    long: 3.08603729,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  },
  {
    id: 125,
    lat: 54.715424,
    long: 0.509207,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  },
  {
    id: 126,
    lat: 44.891666,
    long: 10.136665,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  },
  {
    id: 127,
    lat: 48.078335,
    long: 14.535004,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  },
  {
    id: 128,
    lat: -26.358055,
    long: 27.398056,
    name: 'Russ E. Panek',
    street: '4068 Hartland Avenue',
    location: 'Appleton'
  },
  {
    id: 129,
    lat: -29.1,
    long: 26.2167,
    name: 'Wilbur J. Dry',
    street: '2043 Jadewood Drive',
    location: 'Northbrook'
  },
  {
    id: 130,
    lat: -29.883333,
    long: 31.049999,
    name: 'Wilbur J. Dry',
    street: '2043 Jadewood Drive',
    location: 'Northbrook'
  },
  {
    id: 131,
    lat: -26.266111,
    long: 27.865833,
    name: 'Wilbur J. Dry',
    street: '2043 Jadewood Drive',
    location: 'Northbrook'
  },
  {
    id: 132,
    lat: -29.087217,
    long: 26.154898,
    name: 'Wilbur J. Dry',
    street: '2043 Jadewood Drive',
    location: 'Northbrook'
  },
  {
    id: 133,
    lat: -33.958252,
    long: 25.619022,
    name: 'Wilbur J. Dry',
    street: '2043 Jadewood Drive',
    location: 'Northbrook'
  },
  {
    id: 134,
    lat: -33.977074,
    long: 22.457581,
    name: 'Wilbur J. Dry',
    street: '2043 Jadewood Drive',
    location: 'Northbrook'
  },
  {
    id: 135,
    lat: -26.563404,
    long: 27.844164,
    name: 'Wilbur J. Dry',
    street: '2043 Jadewood Drive',
    location: 'Northbrook'
  },
  {
    id: 136,
    lat: 51.21389,
    long: -102.462776,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  },
  {
    id: 137,
    lat: 52.321945,
    long: -106.584167,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  },
  {
    id: 138,
    lat: 50.288055,
    long: -107.793892,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  },
  {
    id: 139,
    lat: 52.7575,
    long: -108.28611,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  },
  {
    id: 140,
    lat: 50.393333,
    long: -105.551941,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  },
  {
    id: 141,
    lat: 50.930557,
    long: -102.807777,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  },
  {
    id: 142,
    lat: 52.856388,
    long: -104.610001,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  },
  {
    id: 143,
    lat: 52.289722,
    long: -106.666664,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  },
  {
    id: 144,
    lat: 52.201942,
    long: -105.123055,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  },
  {
    id: 145,
    lat: 53.278046,
    long: -110.00547,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  },
  {
    id: 146,
    lat: 49.13673,
    long: -102.990959,
    name: 'Joseph B. Poole',
    street: '3364 Lunetta Street',
    location: 'Wichita Falls'
  },
  {
    id: 147,
    lat: 45.484531,
    long: -73.597023,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  },
  {
    id: 148,
    lat: 45.266666,
    long: -71.900002,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  },
  {
    id: 149,
    lat: 45.349998,
    long: -72.51667,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  },
  {
    id: 150,
    lat: 47.333332,
    long: -79.433334,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  },
  {
    id: 151,
    lat: 45.400002,
    long: -74.033333,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  },
  {
    id: 152,
    lat: 45.683334,
    long: -73.433334,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  },
  {
    id: 153,
    lat: 48.099998,
    long: -77.783333,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  },
  {
    id: 154,
    lat: 45.5,
    long: -72.316666,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  },
  {
    id: 155,
    lat: 46.349998,
    long: -72.550003,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  },
  {
    id: 156,
    lat: 48.119999,
    long: -69.18,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  },
  {
    id: 157,
    lat: 45.599998,
    long: -75.25,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  },
  {
    id: 158,
    lat: 46.099998,
    long: -71.300003,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  },
  {
    id: 159,
    lat: 45.700001,
    long: -73.633331,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  },
  {
    id: 160,
    lat: 47.68,
    long: -68.879997,
    name: 'Claudette D. Nowakowski',
    street: '3742 Farland Avenue',
    location: 'San Antonio'
  },
  {
    id: 161,
    lat: 46.716667,
    long: -79.099998,
    name: '299'
  },
  {
    id: 162,
    lat: 45.016666,
    long: -72.099998,
    name: '299'
  }
];
