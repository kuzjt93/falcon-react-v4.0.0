import product1 from 'assets/img/products/ecommerce/1.jpg';
import product2 from 'assets/img/products/ecommerce/2.jpg';
import product3 from 'assets/img/products/ecommerce/3.jpg';
import product4 from 'assets/img/products/ecommerce/4.jpg';
import product5 from 'assets/img/products/ecommerce/5.jpg';
import product6 from 'assets/img/products/ecommerce/6.jpg';
import product7 from 'assets/img/products/ecommerce/7.jpg';

export const notifications = [
  {
    id: 1,
    title: '<strong>5 products</strong> didn’t publish to your Facebook page',
    linkFor: 'products',
    type: 'warning'
  },
  {
    id: 2,
    title: '<strong>7 orders</strong> have payments that need to be captured',
    linkFor: 'payments'
  },
  {
    id: 3,
    title: '<strong>50+ orders</strong> need to be fulfilled',
    linkFor: 'orders'
  }
];

export const saleItems = [
  {
    title: 'Orders',
    amount: '15,450',
    subAmount: '13,675',
    type: 'standard',
    percent: 21.8,
    className: 'border-200 border-bottom border-end pb-4'
  },
  {
    title: 'Items sold',
    amount: '1,054',
    subAmount: '13,675',
    type: 'warning',
    percent: 21.8,
    className: 'border-200 border-md-200 border-bottom border-md-end pb-4 ps-3'
  },
  {
    title: 'Refunds',
    amount: '$145.65',
    subAmount: '13,675 ',
    type: 'up',
    percent: 21.8,
    className:
      'border-200 border-bottom border-end border-md-end-0 pb-4 pt-4 pt-md-0 ps-md-3'
  },
  {
    title: 'Gross sale',
    amount: '$100.26',
    subAmount: '$109.65 ',
    type: 'down',
    percent: 21.8,
    className:
      'border-200 border-md-200 border-bottom border-md-bottom-0 border-md-end pt-4 pb-md-0 ps-3 ps-md-0'
  },
  {
    title: 'Shipping',
    amount: '$365.53',
    subAmount: '13,675 ',
    type: 'up',
    percent: 21.8,
    className: 'border-200 border-md-bottom-0 border-end pt-4 pb-md-0 ps-md-3'
  },
  {
    title: 'Processing',
    amount: '861',
    subAmount: '13,675 ',
    type: 'pending',
    percent: 21.8,
    className: 'pb-0 pt-4 ps-3'
  }
];

export const totalSale = {
  lastMonth: [50, 80, 60, 80, 65, 90, 130, 90, 30, 40, 30, 70],
  previousYear: [110, 30, 40, 50, 80, 70, 50, 40, 110, 90, 60, 60]
};

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

const recentPurchaseTableBadge = [
  { content: 'Success', type: 'success', icon: 'check' },
  { content: 'Blocked', type: 'secondary', icon: 'ban' },
  { content: 'Pending', type: 'warning', icon: 'stream' }
];
export const recentPurchaseTableData = [
  {
    customer: 'Sylvia Plath',
    email: 'john@gmail.com',
    product: 'Slick - Drag & Drop Bootstrap Generator',
    status: recentPurchaseTableBadge[0],
    amount: '$99'
  },
  {
    customer: 'Homer',
    email: 'sylvia@mail.ru',
    product: 'Bose SoundSport Wireless Headphones',
    status: recentPurchaseTableBadge[0],
    amount: '$634'
  },
  {
    customer: 'Edgar Allan Poe',
    email: 'edgar@yahoo.com',
    product: 'All-New Fire HD 8 Kids Edition Tablet',
    status: recentPurchaseTableBadge[1],
    amount: '$199'
  },
  {
    customer: 'William Butler Yeats',
    email: 'william@gmail.com',
    product: 'Apple iPhone XR (64GB)',
    status: recentPurchaseTableBadge[0],
    amount: '$798'
  },
  {
    customer: 'Rabindranath Tagore',
    email: 'tagore@twitter.com',
    product: 'ASUS Chromebook C202SA-YS02 11.6"',
    status: recentPurchaseTableBadge[1],
    amount: '$318'
  },
  {
    customer: 'Emily Dickinson',
    email: 'emily@gmail.com',
    product: 'Mirari OK to Wake! Alarm Clock & Night-Light',
    status: recentPurchaseTableBadge[2],
    amount: '$11'
  },
  {
    customer: 'Giovanni Boccaccio',
    email: 'giovanni@outlook.com',
    product: 'Summer Infant Contoured Changing Pad',
    status: recentPurchaseTableBadge[0],
    amount: '$31'
  },
  {
    customer: 'Oscar Wilde',
    email: 'oscar@hotmail.com',
    product: 'Munchkin 6 Piece Fork and Spoon Set',
    status: recentPurchaseTableBadge[0],
    amount: '$43'
  },
  {
    customer: 'John Doe',
    email: 'doe@gmail.com',
    product: 'Falcon - Responsive Dashboard Template',
    status: recentPurchaseTableBadge[0],
    amount: '$57'
  },
  {
    customer: 'Emma Watson',
    email: 'emma@gmail.com',
    product: 'Apple iPhone XR (64GB)',
    status: recentPurchaseTableBadge[1],
    amount: '$999'
  },
  {
    customer: 'Sylvia Plath',
    email: 'plath@yahoo.com',
    product: 'All-New Fire HD 8 Kids Edition Tablet',
    status: recentPurchaseTableBadge[2],
    amount: '$199'
  },
  {
    customer: 'Rabindranath Tagore',
    email: 'Rabindra@gmail.com',
    product: 'Apple iPhone XR (64GB)',
    status: recentPurchaseTableBadge[1],
    amount: '$999'
  },
  {
    customer: 'Anila Wilde',
    email: 'anila@yahoo.com',
    product: 'All-New Fire HD 8 Kids Edition Tablet',
    status: recentPurchaseTableBadge[2],
    amount: '$199'
  },
  {
    customer: 'Jack Watson ',
    email: 'Jack@gmail.com',
    product: 'Apple iPhone XR (64GB)',
    status: recentPurchaseTableBadge[1],
    amount: '$999'
  }
];

export const marketShare = [
  { id: 1, value: 53000000, name: 'Falcon', color: 'primary' },
  { id: 2, value: 19000000, name: 'Sparrow', color: 'info' },
  { id: 3, value: 20000000, name: 'Phoenix', color: 'warning' }
];

export const totalOrder = [110, 100, 250, 210, 530, 480, 320, 325];

export const shoppingCartItems = [
  {
    id: 1,
    title: 'Initiated',
    amount: 43.6,
    barWidth: 50,
    items: ' Session: <span class ="text-600">6817</span> ',
    variant: 'primary',
    iconColor: 'success',
    icon: 'caret-up'
  },
  {
    id: 2,
    title: 'Abandonment rate',
    amount: 13.11,
    barWidth: 25,
    items: '<span class ="text-600">44</span>  of 61',
    variant: 'danger',
    iconColor: 'danger',
    icon: 'caret-up'
  },
  {
    id: 3,
    title: 'Bounce rate',
    amount: 12.11,
    barWidth: 35,
    items: '<span class ="text-600">8</span>  of 61',
    variant: 'primary',
    iconColor: 'success',
    icon: 'caret-up'
  },
  {
    id: 4,
    title: 'Completion rate',
    amount: 43.6,
    barWidth: 43,
    items: '<span class ="text-600">18</span>  of 179',
    variant: 'primary',
    iconColor: 'danger',
    icon: 'caret-down'
  },
  {
    id: 5,
    title: 'Revenue Rate',
    amount: 60.5,
    barWidth: 60,
    items: '<span class ="text-600">18</span>  of 179',
    variant: 'primary',
    iconColor: 'success',
    icon: 'caret-up'
  }
];

export const returningCustomerData = {
  newData: [
    [20, 40, 20, 80, 50, 80, 120, 80, 50, 120, 110, 110],
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
    [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70]
  ],
  returningData: [
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
    [20, 40, 20, 80, 50, 80, 120, 80, 50, 120, 110, 110]
  ]
};

export const products = [
  {
    id: 1,
    img: product1,
    title: 'iPad Pro 2020 11',
    type: 'Tablet',
    unit: 19,
    price: 69
  },
  {
    id: 2,
    img: product2,
    title: 'iPhone XS',
    type: 'Smartphone',
    unit: 19,
    price: 69
  },
  {
    id: 3,
    img: product3,
    title: 'Amazfit Pace (Global)',
    type: 'Smartwatch',
    unit: 16,
    price: 34
  },
  {
    id: 4,
    img: product4,
    title: 'Lotto AMF Posh Sports Plus',
    type: 'Shoes',
    unit: 11,
    price: 30
  },
  {
    id: 5,
    img: product5,
    title: 'Casual Long Sleeve Hoodie',
    type: 'Jacket',
    unit: 10,
    price: 24
  },
  {
    id: 6,
    img: product6,
    title: 'Playstation 4 1TB Slim',
    type: 'Tablet',
    unit: 10,
    price: 24
  },

  {
    id: 7,
    img: product7,
    title: 'SUNGAIT Lightweight Sunglass',
    type: 'Jacket',
    unit: 15,
    price: 24
  }
];
