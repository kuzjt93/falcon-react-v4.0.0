import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const isIterableArray = array => Array.isArray(array) && !!array.length;

//===============================
// Breakpoints
//===============================
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1540
};

export const getItemFromStore = (key, defaultValue, store = localStorage) => {
  try {
    return store.getItem(key) === null
      ? defaultValue
      : JSON.parse(store.getItem(key));
  } catch {
    return store.getItem(key) || defaultValue;
  }
};

export const setItemToStore = (key, payload, store = localStorage) =>
  store.setItem(key, payload);

export const getStoreSpace = (store = localStorage) =>
  parseFloat(
    (
      escape(encodeURIComponent(JSON.stringify(store))).length /
      (1024 * 1024)
    ).toFixed(2)
  );

//===============================
// Cookie
//===============================
export const getCookieValue = name => {
  const value = document.cookie.match(
    '(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)'
  );
  return value ? value.pop() : null;
};

export const createCookie = (name, value, cookieExpireTime) => {
  const date = new Date();
  date.setTime(date.getTime() + cookieExpireTime);
  const expires = '; expires=' + date.toUTCString();
  document.cookie = name + '=' + value + expires + '; path=/';
};

export const numberFormatter = (number, fixed = 2) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(number)) >= 1.0e9
    ? (Math.abs(Number(number)) / 1.0e9).toFixed(fixed) + 'B'
    : // Six Zeroes for Millions
    Math.abs(Number(number)) >= 1.0e6
    ? (Math.abs(Number(number)) / 1.0e6).toFixed(fixed) + 'M'
    : // Three Zeroes for Thousands
    Math.abs(Number(number)) >= 1.0e3
    ? (Math.abs(Number(number)) / 1.0e3).toFixed(fixed) + 'K'
    : Math.abs(Number(number)).toFixed(fixed);
};

//===============================
// Colors
//===============================
export const hexToRgb = hexValue => {
  let hex;
  hexValue.indexOf('#') === 0
    ? (hex = hexValue.substring(1))
    : (hex = hexValue);
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)
  );
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
      ]
    : null;
};

export const rgbColor = (color = colors[0]) => `rgb(${hexToRgb(color)})`;
export const rgbaColor = (color = colors[0], alpha = 0.5) =>
  `rgba(${hexToRgb(color)},${alpha})`;

export const colors = [
  '#2c7be5',
  '#00d97e',
  '#e63757',
  '#39afd1',
  '#fd7e14',
  '#02a8b5',
  '#727cf5',
  '#6b5eae',
  '#ff679b',
  '#f6c343'
];

export const themeColors = {
  primary: '#2c7be5',
  secondary: '#748194',
  success: '#00d27a',
  info: '#27bcfd',
  warning: '#f5803e',
  danger: '#e63757',
  light: '#f9fafd',
  dark: '#0b1727'
};

export const grays = {
  white: '#fff',
  100: '#f9fafd',
  200: '#edf2f9',
  300: '#d8e2ef',
  400: '#b6c1d2',
  500: '#9da9bb',
  600: '#748194',
  700: '#5e6e82',
  800: '#4d5969',
  900: '#344050',
  1000: '#232e3c',
  1100: '#0b1727',
  black: '#000'
};

export const darkGrays = {
  white: '#fff',
  1100: '#f9fafd',
  1000: '#edf2f9',
  900: '#d8e2ef',
  800: '#b6c1d2',
  700: '#9da9bb',
  600: '#748194',
  500: '#5e6e82',
  400: '#4d5969',
  300: '#344050',
  200: '#232e3c',
  100: '#0b1727',
  black: '#000'
};

export const getGrays = isDark => (isDark ? darkGrays : grays);

export const rgbColors = colors.map(color => rgbColor(color));
export const rgbaColors = colors.map(color => rgbaColor(color));

export const getColor = (name, dom = document.documentElement) => {
  return getComputedStyle(dom).getPropertyValue(`--falcon-${name}`).trim();
};

//===============================

// Echarts
//===============================
export const getPosition = (pos, params, dom, rect, size) => ({
  top: pos[1] - size.contentSize[1] - 10,
  left: pos[0] - size.contentSize[0] / 2
});
//===============================
// E-Commerce
//===============================
export const calculateSale = (base, less = 0, fix = 2) =>
  (base - base * (less / 100)).toFixed(fix);
export const getTotalPrice = (cart, baseItems) =>
  cart.reduce((accumulator, currentValue) => {
    const { id, quantity } = currentValue;
    const { price, sale } = baseItems.find(item => item.id === id);
    return accumulator + calculateSale(price, sale) * quantity;
  }, 0);
export const getSubtotal = items =>
  items.reduce((acc, curr) => curr.price * curr.quantity + acc, 0);
export const getDiscountPrice = (total, discount) =>
  total - total * (discount / 100);

export const getProductsQuantity = products =>
  products.reduce((acc, product) => product.quantity + acc, 0);

//===============================
// Helpers
//===============================
export const getPaginationArray = (totalSize, sizePerPage) => {
  const noOfPages = Math.ceil(totalSize / sizePerPage);
  const array = [];
  let pageNo = 1;
  while (pageNo <= noOfPages) {
    array.push(pageNo);
    pageNo = pageNo + 1;
  }
  return array;
};

export const capitalize = str =>
  (str.charAt(0).toUpperCase() + str.slice(1)).replace(/-/g, ' ');

export const camelize = str => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

export const dashed = str => {
  return str.toLowerCase().replaceAll(' ', '-');
};

//routes helper

export const flatRoutes = childrens => {
  const allChilds = [];

  const flatChild = childrens => {
    childrens.forEach(child => {
      if (child.children) {
        flatChild(child.children);
      } else {
        allChilds.push(child);
      }
    });
  };
  flatChild(childrens);

  return allChilds;
};

export const getFlatRoutes = children =>
  children.reduce(
    (acc, val) => {
      if (val.children) {
        return {
          ...acc,
          [camelize(val.name)]: flatRoutes(val.children)
        };
      } else {
        return {
          ...acc,
          unTitled: [...acc.unTitled, val]
        };
      }
    },
    { unTitled: [] }
  );

export const routesSlicer = ({ routes, columns = 3, rows }) => {
  const routesCollection = [];
  routes.map(route => {
    if (route.children) {
      return route.children.map(item => {
        if (item.children) {
          return routesCollection.push(...item.children);
        }
        return routesCollection.push(item);
      });
    }
    return routesCollection.push(route);
  });

  const totalRoutes = routesCollection.length;
  const calculatedRows = rows || Math.ceil(totalRoutes / columns);
  const routesChunks = [];
  for (let i = 0; i < totalRoutes; i += calculatedRows) {
    routesChunks.push(routesCollection.slice(i, i + calculatedRows));
  }
  return routesChunks;
};

export const getPageName = pageName => {
  return window.location.pathname.split('/').slice(-1)[0] === pageName;
};

export const copyToClipBoard = textFieldRef => {
  const textField = textFieldRef.current;
  textField.focus();
  textField.select();
  document.execCommand('copy');
};

export const reactBootstrapDocsUrl = 'https://react-bootstrap.github.io';

export const pagination = (currentPage, size) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let prev = currentPage - 1 - Math.floor(size / 2);

  if (currentPage - 1 - Math.floor(size / 2) < 0) {
    prev = 0;
  }
  if (currentPage - 1 - Math.floor(size / 2) > pages.length - size) {
    prev = pages.length - size;
  }
  const next = prev + size;

  return pages.slice(prev, next);
};

export const tooltipFormatter = params => {
  let tooltipItem = ``;
  params.forEach(el => {
    tooltipItem =
      tooltipItem +
      `<div class='ms-1'> 
        <h6 class="text-700"><span class="fas fa-circle me-1 fs--2" style="color:${
          el.borderColor ? el.borderColor : el.color
        }"></span>
          ${el.seriesName} : ${
        typeof el.value === 'object' ? el.value[1] : el.value
      }
        </h6>
      </div>`;
  });
  return `<div>
            <p class='mb-2 text-600'>
              ${
                dayjs(params[0].axisValue).isValid()
                  ? dayjs(params[0].axisValue).format('MMMM DD')
                  : params[0].axisValue
              }
            </p>
            ${tooltipItem}
          </div>`;
};

export const addIdField = items => {
  return items.map((item, index) => ({
    id: index + 1,
    ...item
  }));
};

// get file size

export const getSize = size => {
  if (size < 1024) {
    return `${size} Byte`;
  } else if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(2)} KB`;
  } else {
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  }
};

/* Get A Random Number */
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

/* get Dates between */

export const getDates = (
  startDate,
  endDate,
  interval = 1000 * 60 * 60 * 24
) => {
  const duration = endDate - startDate;
  const steps = duration / interval;
  return Array.from(
    { length: steps + 1 },
    (v, i) => new Date(startDate.valueOf() + interval * i)
  );
};

/* Get Past Dates */
export const getPastDates = duration => {
  let days;

  switch (duration) {
    case 'week':
      days = 7;
      break;
    case 'month':
      days = 30;
      break;
    case 'year':
      days = 365;
      break;

    default:
      days = duration;
  }

  const date = new Date();
  const endDate = date;
  const startDate = new Date(new Date().setDate(date.getDate() - (days - 1)));
  return getDates(startDate, endDate);
};

// Add id to items in array
export const addId = items =>
  items.map((item, index) => ({
    id: index + 1,
    ...item
  }));

//
export const getTimeDuration = (startDate, endDate, format = '') => {
  return dayjs.duration(endDate.diff(startDate)).format(format);
};

// Get Percentage
export const getPercentage = (number, percent) => {
  return (Number(number) / 100) * Number(percent);
};

//get chunk from array
export const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr];
  if (chunkSize <= 0) return cache;
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
};

// Slugify text
export const slugifyText = str =>
  str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
