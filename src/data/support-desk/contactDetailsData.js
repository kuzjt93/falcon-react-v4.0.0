const timelineBadges = [
  { content: 'Recent', type: 'success' },
  { content: 'Overdue', type: 'danger' },
  { content: 'Remaining', type: 'warning' },
  { content: 'Responded', type: 'info' },
  { content: 'Closed', type: 'secondary' }
];

export const timeline = [
  {
    subject: 'Got a new television #377',
    description: 'Thank you for replacing my broken television with a new one.',
    time: '10:28 AM',
    icon: 'envelope',
    priority: {
      color: 'danger',
      text: 'Urgent'
    },
    status: timelineBadges[0],
    year: '2022',
    day: '25 September'
  },
  {
    subject: 'Subscription Issue #362',
    description:
      'On November 2, 2022, your membership at Falcon is going to expire. We really hope that you have benefited from your membership.',
    time: '09:26 PM',
    icon: 'envelope',
    priority: {
      color: 'info',
      text: 'Low'
    },
    status: timelineBadges[4],
    year: '2022',
    day: '23 September'
  },
  {
    subject: 'Received a broken TV #345',
    description:
      'My television from your website was delivered with a cracked screen. I need assistance getting a refund or a replacement.',
    time: '01:06 PM',
    icon: 'envelope',
    priority: {
      color: 'danger',
      text: 'Urgent'
    },
    status: timelineBadges[0],
    year: '2022',
    day: '20 September'
  },
  {
    subject: 'Payment failed #324',
    description:
      'Your payment failed while I tried to make a payment on your website, I was told. My card was, however, billed.',
    time: '11:06 PM',
    icon: 'envelope',
    priority: {
      color: 'primary',
      text: 'Medium'
    },
    status: timelineBadges[4],
    year: '2022',
    day: '03 September'
  },
  {
    subject: 'Password change #234',
    description:
      "I must modify my password. If I make a modification, will I lose access to my account? I have a lot of items in my cart and don't want to go looking for them again.",
    time: '10:08 AM',
    icon: 'envelope',
    priority: {
      color: 'danger',
      text: 'Urgent'
    },
    status: timelineBadges[4],
    year: '2022',
    day: '24 August'
  },
  {
    subject: 'Email Address change #202',
    description:
      "My email address needs to be updated. I'm curious if changing it will result in me losing access to my account. I've put a lot of items in my shopping basket and don't want to search for them again.",
    time: '12:26 PM',
    icon: 'envelope',
    priority: {
      color: 'info',
      text: 'Low'
    },
    status: timelineBadges[4],
    year: '2022',
    day: '20 August'
  }
];

export const tickets = [
  {
    subject: 'Got a new television | Order #377',
    status: timelineBadges[0],
    date: '25 September, 2022',
    priority: {
      title: 'Urgent',
      color: '#e63757',
      data: 100
    },
    agent: 'Anindya'
  },
  {
    subject: 'Subscription Issue | Order #362',
    status: timelineBadges[4],
    date: '23 September, 2022',
    priority: {
      title: 'Low',
      color: '#00D27B',
      data: 25
    },
    agent: 'Khalid'
  },
  {
    subject: 'Received a broken TV | Order #345',
    status: timelineBadges[0],
    date: '20 September, 2022',
    priority: {
      title: 'Urgent',
      color: '#e63757',
      data: 100
    },
    agent: 'Nowrin'
  },
  {
    subject: 'Payment failed | Order #324',
    status: timelineBadges[4],
    date: '03 September, 2022',
    priority: {
      title: 'Medium',
      color: '#2A7BE4',
      data: 50
    },
    agent: 'Anindya'
  },
  {
    subject: 'Password change | Order #234',
    status: timelineBadges[4],
    date: '24 August, 2022',
    priority: {
      title: 'Urgent',
      color: '#e63757',
      data: 100
    },
    agent: 'Nowrin'
  },
  {
    subject: 'Email Address change | Order #202',
    status: timelineBadges[4],
    date: '20 August, 2022',
    priority: {
      title: 'Low',
      color: '#00D27B',
      data: 25
    },
    agent: 'Shajeeb'
  }
];

export const notes = [
  {
    title: 'Not able to access the system',
    description:
      "The PS4's hard drive is most likely the source of this CE-34335-8 safe mode error notice. Try these techniques to fix the hard drive issue if your PS4 won't start and won't let you access system storage because of error number CE-34335-8.",
    date: '28 Sep, 2020',
    time: '12:06 AM',
    agent: 'Anindya'
  },
  {
    title: 'No refund was requested',
    description:
      'It only takes a little while for a consumer to arrive on your door asking for a refund if you sell things online or in a physical store. And instead of closing that door all the way, think of a different approach.',
    date: '25 Sep, 2020',
    time: '03:18 PM',
    agent: 'Khalid'
  },
  {
    title: 'Use case for online ticket notes',
    description:
      'Using the inline ticket notes allows you to take notes while interacting with consumers. You may jot down notes while assisting a customer over live chat or over the phone, for instance. Aside from that.',
    date: '22 Sep, 2020',
    time: '10:21 AM',
    agent: 'Nowrin'
  },
  {
    title: 'Github Uploaded of the Conscious Administrator',
    description:
      'Are they really that dissimilar, even though those are mock-ups and this is politics? She may simply have my card, I believe.',
    date: '15 Sep, 2020',
    time: '12:21 PM',
    agent: 'Shajeeb'
  },
  {
    title: 'Selection of a design team',
    description:
      'One designer can make up a design team, as can a group of designers who take on various tasks and employ various techniques and tools to reach a single objective. The shared objective can be achieved by creating a website, a mobile application, or any other design project.',
    date: '11 Sep, 2020',
    time: '10:11 PM',
    agent: 'Anindya'
  },
  {
    title: 'Quickness of Reaction',
    description:
      'It has been designed particularly for WordPress, as opposed to other Frameworks which attempt to cover everything.',
    date: '09 Sep, 2020',
    time: '12:22 AM',
    agent: 'Shajeeb'
  },
  {
    title: 'Cultivate a design-oriented culture',
    description:
      'By teaching your designers to put the needs of the customer first and coordinating design objectives with corporate objectives, you can foster a culture of design strategy. Everything your design team does should be based on a design strategy.',
    date: '05 Sep, 2020',
    time: '10:21 AM',
    agent: 'Khalid'
  }
];
