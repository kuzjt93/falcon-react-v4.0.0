import { getDates } from 'helpers/utils';
import email from 'assets/img/icons/email.svg';
import social from 'assets/img/icons/social.svg';
import call from 'assets/img/icons/call.svg';
import other from 'assets/img/icons/other.svg';
import india from 'assets/img/country/india.png';
import uae from 'assets/img/country/uae.png';
import nepal from 'assets/img/country/nepal.png';
import thailand from 'assets/img/country/thailand.png';
import team1 from 'assets/img/team/1-thumb.png';
import team2 from 'assets/img/team/2-thumb.png';
import team3 from 'assets/img/team/3-thumb.png';
import team4 from 'assets/img/team/4-thumb.png';
import team5 from 'assets/img/team/5-thumb.png';

export const statsData = [
  {
    id: 1,
    title: 'New Contact',
    amount: 15,
    target: '2500 vs 2683',
    icon: 'phone',
    caret: 'caret-up',
    color: 'primary',
    caretColor: 'success',
    data: [220, 230, 150, 175, 200, 170, 70, 160]
  },
  {
    id: 2,
    title: 'New Users',
    amount: 13,
    target: '1635 vs 863',
    icon: 'user',
    caret: 'caret-up',
    color: 'info',
    caretColor: 'success',
    data: [90, 160, 150, 120, 230, 155, 220, 240]
  },
  {
    id: 3,
    title: 'New Leads',
    amount: 16,
    target: '1423 vs 256',
    icon: 'bolt',
    caret: 'caret-down',
    color: 'success',
    caretColor: 'danger',
    data: [200, 150, 175, 130, 150, 115, 130, 100]
  }
];

export const revenueChartData = {
  dates: getDates(
    new Date('5-6-2019'),
    new Date('5-6-2021'),
    1000 * 60 * 60 * 24 * 30
  ),
  dataset: {
    revenue: [
      [
        645, 500, 550, 550, 473, 405, 286, 601, 743, 450, 604, 815, 855, 722,
        700, 896, 866, 952, 719, 558, 737, 885, 972, 650, 600
      ],
      [
        440, 250, 270, 400, 175, 180, 200, 400, 600, 380, 340, 550, 650, 450,
        400, 688, 650, 721, 500, 300, 445, 680, 568, 400, 371
      ]
    ],
    users: [
      [
        545, 500, 650, 727, 773, 705, 686, 501, 643, 580, 604, 615, 755, 722,
        727, 816, 836, 952, 719, 758, 937, 785, 872, 850, 800
      ],
      [
        340, 360, 230, 250, 410, 430, 450, 200, 220, 540, 500, 250, 355, 320,
        500, 630, 680, 500, 520, 550, 750, 720, 700, 780, 750
      ]
    ],
    deals: [
      [
        545, 400, 450, 627, 473, 450, 460, 780, 770, 800, 504, 550, 500, 530,
        727, 716, 736, 820, 719, 758, 737, 885, 872, 850, 800
      ],
      [
        245, 300, 450, 427, 273, 250, 260, 580, 570, 500, 402, 450, 400, 330,
        527, 516, 536, 620, 519, 558, 537, 483, 472, 250, 300
      ]
    ],
    profit: [
      [
        545, 400, 450, 627, 673, 605, 686, 501, 843, 518, 504, 715, 955, 622,
        627, 716, 736, 952, 619, 558, 937, 785, 872, 550, 400
      ],
      [
        340, 360, 330, 300, 410, 380, 450, 400, 420, 240, 200, 250, 355, 320,
        500, 630, 680, 400, 420, 450, 650, 620, 700, 450, 340
      ]
    ]
  }
};

export const leadsData = [
  {
    id: 1,
    title: 'Email',
    target: '5200 vs 1052',
    img: email,
    amount: 12
  },
  {
    id: 2,
    title: 'Social',
    target: '5623 vs 4929',
    img: social,
    amount: 25
  },
  {
    id: 3,
    title: 'Call',
    target: '2535 vs 1486',
    img: call,
    amount: 63
  },
  {
    id: 4,
    title: 'Other',
    target: '256 vs 189',
    img: other,
    amount: 53
  }
];

export const dealForecastData = [
  {
    id: 1,
    title: 'Closed won',
    amount: 43230,
    variant: 'progress-gradient'
  },
  {
    id: 2,
    title: 'Contact sent',
    amount: 18268,
    variant: 'soft-primary'
  },
  {
    id: 3,
    title: 'Pending',
    amount: 16279,
    variant: 'soft-info'
  },
  {
    id: 4,
    title: 'Qualified',
    amount: 12661,
    variant: 'info'
  }
];

export const dealClosedVsGoalChart = {
  closedAmount: [0, 5000, 18000, 40000, 58000, 65000, 90000, 110000, 140000],
  revenueGoal: [0, 10000, 24000, 35000, 45000, 53000, 57000, 68000, 79000]
};

export const dealForecastByOwnerData = [
  {
    id: 1,
    owner: 'John oliver',
    qualifiedItem: 1000,
    appointment: 2600,
    contactSent: 3523,
    closedWon: 1311
  },
  {
    id: 2,
    owner: 'Sean Paul',
    qualifiedItem: 1500,
    appointment: 1600,
    contactSent: 3523,
    closedWon: 2311
  },
  {
    id: 3,
    owner: 'Brad Shaw',
    qualifiedItem: 1400,
    appointment: 2200,
    contactSent: 3523,
    closedWon: 3311
  },
  {
    id: 4,
    owner: 'Max Payne',
    qualifiedItem: 6600,
    appointment: 2220,
    contactSent: 3523,
    closedWon: 1511
  }
];

export const locationBySessionTableData = [
  {
    country: 'India',
    flag: india,
    sessions: '268,663',
    users: '325,633',
    percentage: 89
  },
  {
    country: 'UAE',
    flag: uae,
    sessions: '250,663',
    users: '525,633',
    percentage: 62
  },
  {
    country: 'Nepal',
    flag: nepal,
    sessions: '268,663',
    users: '325,633',
    percentage: 50
  },
  {
    country: 'Thailand',
    flag: thailand,
    sessions: '197,554',
    users: '215,303',
    percentage: 42
  }
];

export const toDoList = [
  {
    id: 1,
    task: 'Design a ad',
    completed: false
  },
  {
    id: 2,
    task: 'Analyze Data',
    completed: false
  },
  {
    id: 3,
    task: 'Youtube campaign',
    completed: false
  },
  {
    id: 4,
    task: 'Assaign employee',
    completed: false
  },
  {
    id: 5,
    task: 'Video Conference',
    completed: false
  }
];

export const recentLeadsTableData = [
  {
    name: 'Kerry Ingram',
    img: team1,
    email: 'john@gmail.com',
    status: 'New Lead',
    variant: 'primary'
  },
  {
    name: 'Bradie Knowall',
    img: team2,
    email: 'bradie@mail.ru',
    status: 'New Lead',
    variant: 'primary'
  },
  {
    name: 'Jenny Horas',
    img: team3,
    email: 'jenny@mail.ru',
    status: 'Cold Lead',
    variant: 'warning'
  },
  {
    name: 'Chris Pratt',
    img: team4,
    email: 'pratt@mail.ru',
    status: 'New Lead',
    variant: 'warning'
  },
  {
    name: 'Andy Murray',
    img: team5,
    email: 'andy@gmail.com',
    status: 'Won Lead',
    variant: 'success'
  }
];
