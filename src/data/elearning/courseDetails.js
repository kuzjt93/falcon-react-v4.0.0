import target from 'assets/img/icons/target.svg';
import discount from 'assets/img/icons/discount.svg';
import networking from 'assets/img/icons/networking.svg';
import reviewer1 from 'assets/img/team/11.jpg';
import reviewer2 from 'assets/img/team/2-thumb.png';
import reviewer3 from 'assets/img/team/7.jpg';
import reviewer4 from 'assets/img/team/4-thumb.png';
import reviewer5 from 'assets/img/team/10.jpg';
import beachVideo from 'assets/video/beach.mp4';
import intro from 'assets/img/e-learning/lessons/intro.png';
import chapter1 from 'assets/img/e-learning/lessons/chapter1.png';
import chapter2 from 'assets/img/e-learning/lessons/chapter2.png';
import chapter3 from 'assets/img/e-learning/lessons/chapter3.png';
import chapter4 from 'assets/img/e-learning/lessons/chapter4.png';

export const courseFeatures = [
  {
    id: 0,
    title: 'Improve in A purposed Manner',
    description:
      'Improve your skills by immersing yourself in a learning environment with professional instruction and limited access at a time.',
    icon: target
  },
  {
    id: 1,
    title: 'Get Exclusive Deals and Discounts',
    description:
      'Online discussion and crucial insights, Adobe vouchers, and more are all available solely to you and your fellow learners to get you going.',
    icon: discount
  },
  {
    id: 2,
    title: 'Networking with Fellow Artists',
    description:
      'Learn, work together and connect with other learners tools like a common purpose Discord and Slack channel and showcase your works.',
    icon: networking
  }
];

export const courseContents = [
  { id: 0, content: 'Which tool is preferred for what kind of work.' },
  { id: 1, content: 'How to take criticism and make best use of them.' },
  {
    id: 2,
    content: 'Lessons and tasks that will give you intermidiate level skills.'
  },
  {
    id: 3,
    content: 'To build your first portfolio while completing the tasks.'
  },
  {
    id: 4,
    content: 'The Advantage and Disadvantage that comes with each software.'
  },
  { id: 5, content: 'Trials of Premium and Free programs and promo codes.' }
];

export const courseRequirements = [
  {
    id: 0,
    text: 'This course requires profieciency in English language as the Lessons are prepared in English.'
  },
  {
    id: 1,
    text: 'Learners with following skills might be more benefited, but little extra work is all that’ll take to catch up to experts’ level',
    obligations: [
      { id: 0, obligation: 'Comfortable with Computer' },
      { id: 1, obligation: 'Access to Internet and Computer' },
      { id: 2, obligation: 'Background in Fine Arts or Any Creative Field' },
      { id: 3, obligation: 'Digital Drawing Experience' }
    ]
  }
];

export const courseReviews = [
  {
    id: 0,
    reviewer: 'Jim Lee',
    avatar: reviewer1,
    comment:
      'Excellent Course for any beginner like me :p The trainer was very generous and helped whenever DMed.',
    rating: 4.5,
    liked: 230,
    date: '3 days ago'
  },
  {
    id: 1,
    reviewer: 'Greg Capullo',
    avatar: reviewer2,
    comment:
      'Very Sophisticated Content. Helped me a great amount. Going to follow this guy and his other contents.',
    rating: 5,
    liked: 670,
    date: '5 days ago'
  },
  {
    id: 2,
    reviewer: 'Frank Miller',
    avatar: reviewer3,
    comment:
      'BEST COURSE EVER in this topic. Going to use the knowledge I’ve gathered here. Great content and clear, contextual lessons.',
    rating: 5,
    liked: 17,
    date: '5 days ago'
  },
  {
    id: 3,
    reviewer: 'Scott Snyder',
    avatar: reviewer4,
    comment:
      'I was confused about what tool is good for me and this finally course helped me a lot. I’m definitely going to refer it to my peers.',
    rating: 5,
    liked: 68,
    date: '7 days ago'
  },
  {
    id: 4,
    reviewer: 'Bob Kane',
    avatar: reviewer5,
    comment:
      'This course changed my life. I changed my profession and now I’m living a happy life where I’m in charge. Thanks to both Bill and Falcon.',
    rating: 3.5,
    liked: 0,
    date: '8 days ago'
  }
];

export const courseLessons = [
  {
    id: 0,
    title: 'Intro',
    excerpt: 'Introduction and Course Objectives',
    isLocked: false,
    attachment: {
      image: intro,
      src: beachVideo,
      type: 'video'
    }
  },
  {
    id: 1,
    title: 'Chapter 1',
    excerpt: 'Tools, nothing more, nothing less',
    isLocked: true,
    attachment: {
      image: chapter1,
      src: beachVideo,
      type: 'image'
    }
  },
  {
    id: 2,
    title: 'Chapter 2',
    excerpt: 'Choosing the Right Tool',
    isLocked: true,
    attachment: {
      image: chapter2,
      src: beachVideo,
      type: 'image'
    }
  },
  {
    id: 3,
    title: 'Chapter 3',
    excerpt: 'Getting Comfortable',
    isLocked: true,
    attachment: {
      image: chapter3,
      src: beachVideo,
      type: 'image'
    }
  },
  {
    id: 4,
    title: 'Chapter 4',
    excerpt: 'Exploring Beyond Comfort',
    isLocked: true,
    attachment: {
      image: chapter4,
      src: beachVideo,
      type: 'image'
    }
  }
];
