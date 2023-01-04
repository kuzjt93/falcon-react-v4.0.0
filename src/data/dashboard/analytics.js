import chromeLogo from 'assets/img/icons/chrome-logo.png';
import firefoxLogo from 'assets/img/icons/firefox-logo.png';
import safariLogo from 'assets/img/icons/safari-logo.png';

export const audienceChart = {
  users: [
    [504, 333, 400, 606, 451, 685, 404],
    [237, 229, 707, 575, 420, 536, 258]
  ],
  sessions: [
    [322, 694, 235, 537, 791, 292, 806],
    [584, 661, 214, 286, 526, 707, 627]
  ],
  rate: [
    [789, 749, 412, 697, 633, 254, 472],
    [276, 739, 525, 394, 643, 653, 719]
  ],
  duration: [
    [625, 269, 479, 654, 549, 305, 671],
    [499, 670, 550, 222, 696, 695, 469]
  ]
};

export const realTimeUsers = [
  {
    page: '/bootstrap-themes/',
    count: 3
  },
  {
    page: '/tags/html5/',
    count: 3
  },
  {
    page: '/',
    count: 3
  },
  {
    page: '/preview/falcon/dashboard/',
    count: 3
  },
  {
    page: '/100-best-themes...all-time/',
    count: 3
  },
  {
    page: '/product/falcon-admin-dashboard/',
    count: 3
  }
];

export const sessionByBrowser = [
  {
    icon: chromeLogo,
    label: 'Chrome',
    value: '50.3%',
    progress: false,
    caret: 'fas fa-caret-down text-danger',
    color: 'primary',
    progressValue: '2.9%'
  },
  {
    icon: safariLogo,
    label: 'Safari',
    value: '30.1%',
    progress: true,
    caret: 'fas fa-caret-up text-success',
    color: 'success',
    progressValue: '29.4%'
  },
  {
    icon: firefoxLogo,
    label: 'Mozilla',
    value: '20.6%',
    progress: true,
    caret: 'fas fa-caret-up text-success',
    color: 'info',
    progressValue: '220.7%'
  }
];

export const sessionByCountry = [
  ['CHINA', 'INDIA', 'USA', 'IRAN', 'BRAZIL', 'PAKISTAN'],
  [19.53, 17.32, 4.49, 3.46, 2.8, 1.7]
];

export const intelligence = [
  {
    title: 'Content Analysis',
    icon: 'code-branch',
    description:
      'Which landing pages with over 10 sessions have the worst bounce rates?'
  },
  {
    title: 'Technical performance',
    icon: 'bug',
    description:
      'Show me a trend of my average page load time over the last 3 months'
  },
  {
    title: 'Where you get your users from',
    icon: 'project-diagram',
    description: 'What are my top default channel groupings by user?'
  },
  {
    title: 'Geographic Analysis',
    icon: 'map-marker-alt',
    description: 'What pages do people from California go to the most?'
  }
];

export const activeUsersChart = {
  mobile: [
    4164, 4652, 4817, 4841, 4920, 5439, 5486, 5498, 5512, 5538, 5841, 5877,
    6086, 6146, 6199, 6431, 6704, 7939, 8127, 8296, 8322, 8389, 8411, 8502,
    8868, 8977, 9273, 9325, 9345, 9430
  ],
  desktop: [
    2164, 2292, 2386, 2430, 2528, 3045, 3255, 3295, 3481, 3604, 3688, 3840,
    3932, 3949, 4003, 4298, 4424, 4869, 4922, 4973, 5155, 5267, 5566, 5689,
    5692, 5758, 5773, 5799, 5960, 6000
  ],
  tablet: [
    1069, 1089, 1125, 1141, 1162, 1179, 1185, 1216, 1274, 1322, 1346, 1395,
    1439, 1564, 1581, 1590, 1656, 1815, 1868, 2010, 2133, 2179, 2264, 2265,
    2278, 2343, 2354, 2456, 2472, 2480
  ]
};

export const campaignTable = [
  {
    id: 1,
    campaigns: 'Black Friday Sale',
    cost: 1304.28,
    revenue: 543217.65
  },
  {
    id: 2,
    campaigns: 'Christmas Bundle',
    cost: 9876.56,
    revenue: 3904.0
  },
  {
    id: 3,
    campaigns: 'Halloween Party Started 🎃 👻',
    cost: 3267.84,
    revenue: 7654.8
  },
  {
    id: 4,
    campaigns: 'Grab your reward',
    cost: 87545.28,
    revenue: 68654.35
  },
  {
    id: 5,
    campaigns: 'Black Friday Sale',
    cost: 1304.28,
    revenue: 3904.0
  },
  {
    id: 6,
    campaigns: 'Boxing Day offer',
    cost: 1200.5,
    revenue: 5004.87
  }
];

export const campaignChart = {
  revenue: [10100, 16500, 14000, 16200, 12100, 19000, 13900],
  clicks: [119, 199, 195, 101, 155, 131, 180]
};

export const bounceRate = [
  40, 37, 42, 44, 36, 39, 37, 43, 38, 35, 43, 39, 42, 36, 37, 36, 42, 44, 34,
  41, 37, 41, 40, 40, 43, 34, 41, 35, 44, 41, 40
];

export const stats = [
  {
    title: 'Completed Goals',
    value: 1727,
    chartData: [
      172, 129, 123, 158, 196, 106, 187, 198, 152, 175, 178, 165, 188, 139, 115,
      131, 143, 140, 112, 167, 180, 156, 121, 190, 100
    ],
    grid: { right: '16px', left: '0', bottom: '0', top: '0' }
  },
  {
    title: 'Value',
    value: '$34.2M',
    chartData: [
      170, 156, 171, 193, 108, 178, 163, 175, 117, 123, 174, 199, 122, 111, 113,
      140, 192, 167, 186, 172, 131, 187, 135, 115, 118
    ],
    grid: { right: '16px', left: '16px', bottom: '0', top: '0' }
  },
  {
    title: 'Conversion Rate',
    value: '19.67%',
    chartData: [
      199, 181, 155, 164, 108, 158, 117, 148, 121, 152, 189, 116, 111, 130, 113,
      171, 193, 104, 110, 153, 190, 162, 180, 114, 183
    ],
    grid: { right: '0', left: '16px', bottom: '0', top: '0' }
  }
];

export const topPagesTableData = [
  {
    id: 1,
    path: '/sparrow/landing-page',
    views: 1455,
    time: '2m:25s',
    exitRate: '20.4%'
  },
  {
    id: 2,
    path: '/falcon/pages/starter.html',
    views: 1422,
    time: '2m:14s',
    exitRate: '52.4%'
  },
  {
    id: 3,
    path: '/pages/falcon-webapp-theme',
    views: 1378,
    time: '2m:23s',
    exitRate: '25.1%'
  },
  {
    id: 4,
    path: '/product/sparrow-bootstrap-theme',
    views: 1144,
    time: '2m:2s',
    exitRate: '6.3%'
  },
  {
    id: 5,
    path: '/themes/falcon/components',
    views: 11047,
    time: '1m:16s',
    exitRate: '49.3%'
  },
  {
    id: 6,
    path: '/themewagon.com/themes/free-website-template',
    views: 1007,
    time: '0m:34s',
    exitRate: '35.9%'
  },
  {
    id: 7,
    path: '/mailbluster.com/about',
    views: 997,
    time: '1m:5s',
    exitRate: '87.3%'
  },
  {
    id: 8,
    path: '/technext.it/services',
    views: 983,
    time: '1m:16s',
    exitRate: '74.3%'
  },
  {
    id: 9,
    path: '/themewagon.com/themes/free-website-template',
    views: 971,
    time: '1m:06s',
    exitRate: '49.3%'
  },
  {
    id: 10,
    path: '/blog/mailbluster-vs-sendy',
    views: 996,
    time: '1m:26s',
    exitRate: '4.3%'
  },
  {
    id: 11,
    path: '/blog/mailbluster-vs-emailoctopus',
    views: 890,
    time: '1m:19s',
    exitRate: '49.3%'
  },
  {
    id: 12,
    path: '/themewagon.com/themes/bootstrap-template',
    views: 11047,
    time: '1m:16s',
    exitRate: '21.5%'
  },
  {
    id: 13,
    path: '/themewagon.com/themes/free-website-template',
    views: 11047,
    time: '0m:54s',
    exitRate: '62.5%'
  }
];
