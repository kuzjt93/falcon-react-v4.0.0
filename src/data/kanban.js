import team1 from 'assets/img/team/1.jpg';
import team2 from 'assets/img/team/2.jpg';
import team3 from 'assets/img/team/3.jpg';
import team4 from 'assets/img/team/4.jpg';
import team5 from 'assets/img/team/5.jpg';
import team6 from 'assets/img/team/6.jpg';
import kanban1 from 'assets/img/kanban/1.jpg';
import kanban2 from 'assets/img/kanban/2.jpg';
import kanban3 from 'assets/img/kanban/3.jpg';
import kanban4 from 'assets/img/kanban/4.jpg';
import beach from 'assets/video/beach.jpg';
import beachVideo from 'assets/video/beach.mp4';

export const members = [
  { id: 1, name: 'Anna Karinina', img: team1, role: 'Member' },
  { id: 2, name: 'Antony Hopkins', img: team2, role: 'Member' },
  { id: 3, name: 'Rowan Atkinson', img: team3, role: 'Member' },
  { id: 4, name: 'John Doe', img: team4, role: 'Member' },
  { id: 5, name: 'Emily Rose', img: team5, role: 'Member' },
  { id: 6, name: 'Marry Jane', img: team6, role: 'Member' }
];

export const labels = [
  { text: 'New', type: 'success' },
  { text: 'Goal', type: 'primary' },
  { text: 'Enhancement', type: 'info' },
  { text: 'Bug', type: 'danger' },
  { text: 'Documentation', type: 'secondary' },
  { text: 'Helper', type: 'warning' }
];

export const attachments = [
  {
    id: 1,
    image: kanban3,
    src: kanban3,
    title: 'final-img.jpg',
    date: '2020-04-18 5:25 pm',
    type: 'image'
  },
  {
    id: 2,
    image: kanban4,
    src: kanban4,
    title: 'picture.png',
    date: '2020-04-20 4:34 pm',
    type: 'image'
  },
  {
    id: 3,
    src: `#!`,
    title: 'sample.txt',
    date: '2020-04-21 2:10 pm',
    type: 'txt'
  },
  {
    id: 4,
    src: `#!`,
    title: 'example.pdf',
    date: '2020-05-02 11:34 am',
    type: 'pdf'
  },
  {
    id: 5,
    image: beach,
    src: beachVideo,
    title: 'beach.mp4',
    date: '2020-05-10 3:40 pm',
    type: 'video'
  }
];

export const kanbanItems = [
  {
    id: 1,
    name: 'Documentation',
    items: [
      {
        id: 10000001,
        title:
          '👌 <strong>Drag cards</strong> to any list and place anywhere in the list'
      },
      {
        id: 10000002,
        title:
          '👇 <strong>Click</strong> cards to see the detail of the cards or edit them'
      },
      {
        id: 10000003,
        title:
          '➕ <strong>Click "Add Another Card" </strong> at the bottom of the list for a new card'
      },
      {
        id: 10000004,
        title:
          '<strong>Hovering on the cards</strong> will reveal meatball (...) button, click that for more options'
      },
      {
        id: 10000005,
        title:
          '<strong>At the top of the board, click ⭐</strong> to pin this board to your favorites '
      },
      {
        id: 10000006,
        title:
          '🙋 Add members to the board by clicking <strong>+ Invite</strong> at the top of the board'
      },
      {
        id: 10000007,
        title:
          '📃 Add more lists to this board by clicking <strong>+ Add Another List</strong>'
      },
      {
        id: 10000008,
        title:
          '<strong>Click the meatball (...)</strong> button at the top of any list for more options'
      }
    ]
  },
  {
    id: 2,
    name: 'Doing',
    items: [
      {
        id: 20000001,
        title:
          'Add a cookie notice, which will be shown at the bottom of the page and has a link of "Privacy Policy"',
        user: 'Kit',
        checklist: { totalCount: 6, completed: 3 },
        members: [{ name: 'Emma', url: team3 }]
      },
      {
        id: 20000002,
        title: 'Add a pdf file that describes all the symptoms of COVID-19',
        user: 'Rowan',
        members: [
          { name: 'Shophie', url: team3 },
          { name: 'Rowan', url: team4 }
        ],
        attachments: [
          {
            type: 'image',
            url: kanban2,
            className: 'py-8'
          }
        ]
      },
      {
        id: 20000003,
        title:
          'Make a Registration form that includes Name, Email, and a Password input field',
        user: 'Antony',
        labels: [
          { type: 'success', text: 'New' },
          { type: 'primary', text: 'Goal' }
        ],
        attachments: [{ type: 'doc', name: 'test.txt' }],
        checklist: { totalCount: 10, completed: 2 },
        members: [{ name: 'Shophie', url: team3 }]
      },
      {
        id: 20000004,
        title:
          'Update profile page layout with cover image and user setting menu',
        user: 'Emma',
        labels: [{ type: 'info', text: 'Enhancement' }],
        attachments: [{ type: 'txt', url: `falcon.txt` }],
        members: [
          { name: 'Emma', url: team1 },
          { name: 'Antony', url: team2 },
          { name: 'Anna', url: team3 }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Review',
    items: [
      {
        id: 30000001,
        title:
          'Update all the npm packages and also remove the outdated plugins',
        user: 'Emma',
        labels: [{ type: 'danger', text: 'bug' }],
        checklist: { totalCount: 5, completed: 5 },
        members: [
          { name: 'Sophie', url: team4 },
          { name: 'Antony', url: team1 },
          { name: 'Emma', url: team2 }
        ]
      },
      {
        id: 30000002,
        title:
          'Add a getting started page that allows users to see the starting process',
        user: 'Anna',
        labels: [{ type: 'secondary', text: 'Documentation' }],
        attachments: [
          { type: 'pdf', url: `sample.pdf` },
          { type: 'txt', url: `example.txt` }
        ],
        members: [{ name: 'Antony', url: team2 }]
      },
      {
        id: 30000003,
        title: 'Review and test all the task and deploy to the server'
      },
      {
        id: 30000004,
        title:
          'Get all the data by API call and show them to the landing page by adding a new section',
        labels: [{ type: 'success', text: 'New' }]
      }
    ]
  },
  {
    id: 4,
    name: 'Release',
    items: [
      {
        id: 40000001,
        title:
          'Add a new illustration to the landing page according to the contrast of the current theme ',
        user: 'John',
        attachments: [
          {
            type: 'image',
            url: kanban1,
            className: 'py-9'
          },
          { type: 'doc', name: 'test.txt' }
        ],
        members: [
          { name: 'Anna', url: team1 },
          { name: 'Antony', url: team2 },
          { name: 'Emma', url: team3 }
        ]
      },
      {
        id: 40000002,
        title: 'Design a new E-commerce, Product list, and details page',
        labels: [{ type: 'info', text: 'Goal' }]
      },
      {
        id: 40000003,
        title:
          'Make a weather app design which must have: Local weather, Weather map and weather widgets'
      },
      {
        id: 40000004,
        title:
          'List all the Frequently Asked Questions and make an FAQ section in the landing page',
        labels: [{ type: 'secondary', text: 'Documentation' }]
      },
      {
        id: 40000005,
        title:
          'Remove all the warning from dev dependencies and update the packages if needed'
      }
    ]
  }
];

export const comments = [
  {
    id: 1,
    user: {
      name: 'Rowan',
      avatar: team4
    },
    text: 'This time we should finish the task before the deadline',
    time: '23min'
  },
  {
    id: 2,
    user: {
      name: 'Emma',
      avatar: team1
    },
    text: 'We have more task to do',
    time: '2hour'
  }
];

export const activities = [
  {
    id: 1,
    user: {
      name: 'Rowan',
      avatar: team4
    },
    activity: 'Added the card',
    time: '6 hours ago'
  },
  {
    id: 2,
    user: {
      name: 'Anna',
      avatar: team3
    },
    activity: 'attached final-pic.png to this card',
    time: '4 hours ago'
  }
];
