import product10 from 'assets/img/products/10.png';
import product11 from 'assets/img/products/11.png';
import product12 from 'assets/img/products/12.png';
import product13 from 'assets/img/products/13.png';
import product14 from 'assets/img/products/14.png';

import iconDocs from 'assets/img/icons/docs.png';
import iconZip from 'assets/img/icons/zip.png';
import product2 from 'assets/img/products/2.jpg';
import product3 from 'assets/img/products/3.jpg';
import product5 from 'assets/img/products/5.jpg';

import team1 from 'assets/img/team/1.jpg';
import team2 from 'assets/img/team/2.jpg';
import team3 from 'assets/img/team/3.jpg';
import team4 from 'assets/img/team/4.jpg';
import team5 from 'assets/img/team/5.jpg';
import team6 from 'assets/img/team/6.jpg';
import team7 from 'assets/img/team/7.jpg';

export const weeklySalesData = [6000, 9000, 8500, 4000, 4500, 6500, 7000];

export const totalOrder = [20, 40, 100, 120];

export const marketShare = [
  { id: 1, value: 53000000, name: 'Samsung', color: 'primary' },
  { id: 2, value: 19000000, name: 'Huawei', color: 'info' },
  { id: 3, value: 20000000, name: 'Apple', color: 'gray-300' }
];
export const weather = {
  city: 'New York City',
  condition: 'Sunny',
  precipitation: '50%',
  temperature: 31,
  highestTemperature: 32,
  lowestTemperature: 25
};

export const totalSales = [
  [60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70],
  [100, 70, 80, 50, 120, 100, 130, 140, 90, 100, 40, 50],
  [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60],
  [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80],
  [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50],
  [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70],
  [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50],
  [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110],
  [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70],
  [50, 80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110],
  [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70],
  [20, 40, 20, 50, 30, 80, 120, 100, 30, 40, 30, 70]
];

export const products = [
  {
    id: 1,
    img: product12,
    title: 'Raven Pro',
    type: 'Landing',
    unit: 19,
    price: 69
  },
  {
    id: 2,
    img: product10,
    title: 'Boots4',
    type: 'Portfolio',
    unit: 10,
    price: 86
  },
  {
    id: 3,
    img: product11,
    title: 'Falcon',
    type: 'Admin',
    unit: 11,
    price: 49
  },
  {
    id: 4,
    img: product14,
    title: 'Slick',
    type: 'Builder',
    unit: 5,
    price: 49
  },
  {
    id: 5,
    img: product13,
    title: 'Reign Pro',
    type: 'Agency',
    unit: 6,
    price: 39
  }
];

export const runningProjects = [
  {
    id: 1,
    title: 'Falcon',
    progress: 90,
    duration: '58:20:00',
    color: 'primary'
  },
  {
    id: 2,
    title: 'Reign',
    progress: 78,
    duration: '31:50:00',
    color: 'success'
  },
  {
    id: 3,
    title: 'Boots4',
    progress: 79,
    duration: '25:20:00',
    color: 'info'
  },
  {
    id: 4,
    title: 'Raven',
    progress: 38,
    duration: '12:50:00',
    color: 'warning'
  },
  {
    id: 5,
    title: 'Slick',
    progress: 40,
    duration: '21:20:00',
    color: 'danger'
  }
];

export const storageStatus = [
  {
    name: 'Regular',
    size: 895,
    color: 'primary'
  },
  {
    name: 'System',
    size: 379,
    color: 'info'
  },
  {
    name: 'Shared',
    size: 192,
    color: 'success'
  },
  {
    name: 'Free',
    size: 576,
    color: '200'
  }
];

export const files = [
  {
    id: 1,
    img: product5,
    name: 'apple-smart-watch.png',
    user: 'Antony',
    time: 'Just Now',
    border: true
  },
  {
    id: 2,
    img: product3,
    name: 'iphone.jpg',
    user: 'Antony',
    time: 'Yesterday at 1:30 PM',
    border: true
  },
  {
    id: 3,
    img: iconZip,
    name: 'Falcon v1.8.2',
    user: 'Jane',
    time: '27 Sep at 10:30 AM',
    border: false
  },
  {
    id: 4,
    img: product2,
    name: 'iMac.jpg',
    user: 'Rowen',
    time: '23 Sep at 6:10 PM',
    border: true
  },
  {
    id: 5,
    img: iconDocs,
    name: 'functions.php',
    user: 'John',
    time: '1 Oct at 4:30 PM',
    border: false
  }
];

export const users = [
  {
    id: 1,
    name: 'Emma Watson',
    avatar: {
      src: team1,
      size: '2xl',
      status: 'online'
    },
    role: 'Admin'
  },
  {
    id: 2,
    name: 'Antony Hopkins',
    avatar: {
      src: team2,
      size: '2xl',
      status: 'online'
    },
    role: 'Moderator'
  },
  {
    id: 3,
    name: 'Anna Karinina',
    avatar: {
      src: team3,
      size: '2xl',
      status: 'away'
    },
    role: 'Editor'
  },
  {
    id: 4,
    name: 'John Lee',
    avatar: {
      src: team4,
      size: '2xl',
      status: 'offline'
    },
    role: 'Admin'
  },
  {
    id: 5,
    name: 'Rowen Atkinson',
    avatar: {
      src: team5,
      size: '2xl',
      status: 'offline'
    },
    role: 'Editor'
  },
  {
    id: 6,
    name: 'Bucky Robert',
    avatar: {
      src: team6,
      size: '2xl',
      status: 'offline'
    },
    role: 'Editor'
  },
  {
    id: 7,
    name: 'Tom Hanks',
    avatar: {
      src: team7,
      size: '2xl',
      status: 'offline'
    },
    role: 'Editor'
  }
];

export const topProducts = [
  ['product', '2019', '2018'],
  ['Boots4', 43, 85],
  ['Reign Pro', 83, 73],
  ['Slick', 86, 62],
  ['Falcon', 72, 53],
  ['Sparrow', 80, 50],
  ['Hideaway', 50, 70],
  ['Freya', 80, 90]
];
