import intro from 'assets/img/e-learning/lessons/intro.png';
import chapter1 from 'assets/img/e-learning/lessons/chapter1.png';
import chapter2 from 'assets/img/e-learning/lessons/chapter2.png';

export const courseResourcesData = [
  {
    id: 0,
    title: 'Intro',
    excerpt: 'Introduction and Course Objectives',
    details: {
      slides: 1,
      minutes: 4,
      tests: 0
    },
    image: intro,
    isFulfilled: true
  },
  {
    id: 1,
    title: 'Chapter 1',
    excerpt: 'Getting Started with Photoshop',
    details: {
      slides: 3,
      minutes: 11,
      tests: 3
    },
    image: chapter1,
    isFulfilled: true
  },
  {
    id: 2,
    title: 'Chapter 2',
    excerpt: 'Understanding Layers',
    details: {
      slides: 1,
      minutes: 3,
      tests: 0
    },
    image: chapter2,
    isFulfilled: false
  }
];
