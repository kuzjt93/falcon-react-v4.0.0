import atlassian from 'assets/img/logos/atlassian.png';
import hubstaff from 'assets/img/logos/hubstaff.png';
import bootstrap from 'assets/img/logos/bs-5.png';
import asana from 'assets/img/logos/asana-logo.png';
import adobe from 'assets/img/logos/adobe-creative-cloud.png';
import coursera from 'assets/img/logos/coursera.png';
import medium from 'assets/img/logos/medium.png';
import bg1 from 'assets/img/icons/spot-illustrations/corner-1.png';
import bg2 from 'assets/img/icons/spot-illustrations/corner-2.png';
import bg3 from 'assets/img/icons/spot-illustrations/corner-3.png';

export const payment = {
  all: [4, 1, 6, 2, 7, 12, 4, 6, 5, 4, 5, 10],
  successful: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8],
  failed: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2]
};

export const activeUser = [3, 7, 6, 8, 5, 12, 11];

export const statsData = [
  {
    title: 'Customers',
    value: 58.39,
    decimal: true,
    suffix: 'k',
    prefix: '',
    valueClassName: 'text-warning',
    badgeBg: 'warning',
    badgeText: '-0.23%',
    link: '/e-commerce/customers',
    linkText: 'See all',
    image: bg1
  },
  {
    title: 'Orders',
    value: 23.43,
    decimal: true,
    suffix: 'k',
    prefix: '',
    valueClassName: 'text-info',
    badgeBg: 'info',
    badgeText: '0.0%',
    link: '/e-commerce/orders/order-list',
    linkText: 'All orders',
    image: bg2
  },
  {
    title: 'Revenue',
    value: 43594,
    decimal: false,
    suffix: '',
    prefix: '$',
    valueClassName: '',
    badgeBg: 'success',
    badgeText: '9.54%',
    link: '/',
    linkText: 'Statistics',
    image: bg3
  }
];

export const candleChartStatsData = [
  {
    id: 1,
    title: 'Forecast Hours',
    grow: {
      isGrow: true,
      growAmount: 20.2,
      color: 'primary'
    },
    amount: '2077h'
  },
  {
    id: 2,
    title: 'Workflow Hours',
    grow: {
      isGrow: true,
      growAmount: 20,
      color: 'success'
    },
    amount: '100h'
  },
  {
    id: 3,
    title: 'Forecast Income',
    grow: {
      isGrow: true,
      growAmount: 18,
      color: 'primary'
    },
    amount: '$256,489'
  }
];

export const transactionSummary = [
  {
    id: 1,
    img: atlassian,
    title: 'Atlassian',
    subtitle: 'Subscription payment',
    status: 'Completed',
    amount: '$290.00 USD',
    date: '15 May, 2020'
  },
  {
    id: 2,
    img: hubstaff,
    title: 'Hubstaff',
    subtitle: 'Subscription payment',
    status: 'Pending',
    amount: '$200.00 USD',
    date: '1 May, 2020'
  },
  {
    id: 3,
    img: bootstrap,
    title: 'Bootstrap',
    subtitle: 'Subscription payment',
    status: 'Pending',
    amount: '$300.00 USD',
    date: '26 April, 2020'
  },
  {
    id: 4,
    img: asana,
    title: 'Asana',
    subtitle: 'Subscription payment',
    status: 'Pending',
    amount: '$320.00 USD',
    date: '14 April, 2020'
  },
  {
    id: 5,
    img: adobe,
    title: 'Adobe Creative Cloud',
    subtitle: 'Subscription payment',
    status: 'Pending',
    amount: '$150.00 USD',
    date: '11 April, 2020'
  },
  {
    id: 6,
    img: coursera,
    title: 'Coursera',
    subtitle: 'Subscription payment',
    status: 'Pending',
    amount: '$280.00 USD',
    date: '26 March, 2020'
  },
  {
    id: 7,
    img: medium,
    title: 'Medium',
    subtitle: 'Subscription payment',
    status: 'Rejected',
    amount: '$290.00 USD',
    date: '15 March, 2020'
  }
];

export const grossRevenue = {
  Jan: [20, 40, 20, 80, 50, 80, 120, 80, 50, 120, 110, 110],
  Feb: [60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70],
  Mar: [100, 70, 80, 50, 120, 100, 130, 140, 90, 100, 40, 50],
  Apr: [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60],
  May: [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80],
  Jun: [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50],
  Jul: [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70],
  Aug: [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50],
  Sep: [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110],
  Oct: [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70],
  Nov: [50, 80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110],
  Dec: [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70]
};

export const candleChartData = [
  ['2013/1/24', 2320.26, 2320.26, 2287.3, 2362.94],
  ['2013/1/25', 2300, 2291.3, 2288.26, 2308.38],
  ['2013/1/28', 2295.35, 2346.5, 2295.35, 2346.92],
  ['2013/1/29', 2347.22, 2358.98, 2337.35, 2363.8],
  ['2013/1/30', 2360.75, 2382.48, 2347.89, 2383.76],
  ['2013/1/31', 2383.43, 2385.42, 2371.23, 2391.82],
  ['2013/2/1', 2377.41, 2419.02, 2369.57, 2421.15],
  ['2013/2/4', 2425.92, 2428.15, 2417.58, 2440.38],
  ['2013/2/5', 2411, 2433.13, 2403.3, 2437.42],
  ['2013/2/6', 2432.68, 2434.48, 2427.7, 2441.73],
  ['2013/2/7', 2430.69, 2418.53, 2394.22, 2433.89],
  ['2013/2/8', 2416.62, 2432.4, 2414.4, 2443.03],
  ['2013/2/18', 2441.91, 2421.56, 2415.43, 2444.8],
  ['2013/2/19', 2420.26, 2382.91, 2373.53, 2427.07],
  ['2013/2/20', 2383.49, 2397.18, 2370.61, 2397.94],
  ['2013/2/21', 2378.82, 2325.95, 2309.17, 2378.82],
  ['2013/2/22', 2322.94, 2314.16, 2308.76, 2330.88],
  ['2013/2/25', 2320.62, 2325.82, 2315.01, 2338.78],
  ['2013/2/26', 2313.74, 2293.34, 2289.89, 2340.71],
  ['2013/2/27', 2297.77, 2313.22, 2292.03, 2324.63],
  ['2013/2/28', 2322.32, 2365.59, 2308.92, 2366.16],
  ['2013/3/1', 2364.54, 2359.51, 2330.86, 2369.65],
  ['2013/3/4', 2332.08, 2273.4, 2259.25, 2333.54],
  ['2013/3/5', 2274.81, 2326.31, 2270.1, 2328.14],
  ['2013/3/6', 2333.61, 2347.18, 2321.6, 2351.44],
  ['2013/3/7', 2340.44, 2324.29, 2304.27, 2352.02],
  ['2013/3/8', 2326.42, 2318.61, 2314.59, 2333.67],
  ['2013/3/11', 2314.68, 2310.59, 2296.58, 2320.96],
  ['2013/3/12', 2309.16, 2286.6, 2264.83, 2333.29],
  ['2013/3/13', 2282.17, 2263.97, 2253.25, 2286.33],
  ['2013/3/14', 2255.77, 2270.28, 2253.31, 2276.22],
  ['2013/3/15', 2269.31, 2278.4, 2250, 2312.08],
  ['2013/3/18', 2267.29, 2240.02, 2239.21, 2276.05],
  ['2013/3/19', 2244.26, 2257.43, 2232.02, 2261.31],
  ['2013/3/20', 2257.74, 2317.37, 2257.42, 2317.86],
  ['2013/3/21', 2318.21, 2324.24, 2311.6, 2330.81],
  ['2013/3/22', 2321.4, 2328.28, 2314.97, 2332],
  ['2013/3/25', 2334.74, 2326.72, 2319.91, 2344.89],
  ['2013/3/26', 2318.58, 2297.67, 2281.12, 2319.99],
  ['2013/3/27', 2299.38, 2301.26, 2289, 2323.48],
  ['2013/3/28', 2273.55, 2236.3, 2232.91, 2273.55],
  ['2013/3/29', 2238.49, 2236.62, 2228.81, 2246.87],
  ['2013/4/1', 2229.46, 2234.4, 2227.31, 2243.95],
  ['2013/4/2', 2234.9, 2227.74, 2220.44, 2253.42],
  ['2013/4/3', 2232.69, 2225.29, 2217.25, 2241.34],
  ['2013/4/8', 2196.24, 2211.59, 2180.67, 2212.59],
  ['2013/4/9', 2215.47, 2225.77, 2215.47, 2234.73],
  ['2013/4/10', 2224.93, 2226.13, 2212.56, 2233.04],
  ['2013/4/11', 2236.98, 2219.55, 2217.26, 2242.48],
  ['2013/4/12', 2218.09, 2206.78, 2204.44, 2226.26]
];
