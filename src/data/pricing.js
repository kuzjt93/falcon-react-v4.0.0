import freeIcon from 'assets/img/icons/free.svg';
import proIcon from 'assets/img/icons/pro.svg';

export const pricingData = [
  {
    id: 0,
    title: 'Single',
    subTitle: 'For teams that need to create project plans with confidence.',
    price: 0,
    url: '/e-commerce/billing',
    buttonText: 'Start free trial',
    isFeatured: false,
    featureTitle: 'Track team projects with free:',
    features: [
      { id: 1, title: 'Timeline' },
      { id: 2, title: 'Advanced Search' },
      { id: 3, title: 'Custom fields', tag: { label: 'New', type: 'success' } },
      { id: 4, title: 'Task dependencies' },
      { id: 5, title: 'Private teams & projects' }
    ]
  },
  {
    id: 1,
    title: 'Business',
    subTitle:
      'For teams and companies that need to manage work across initiatives.',
    price: 39,
    url: '/e-commerce/billing',
    buttonText: 'Get Business',
    isFeatured: true,
    featureTitle: 'Everything in Premium, plus:',
    features: [
      { id: 1, title: 'Portfolios' },
      { id: 2, title: 'Lock custom fields' },
      { id: 3, title: 'Onboarding plan' },
      { id: 4, title: 'Resource Management' },
      { id: 5, title: 'Lock custom fields' }
    ]
  },
  {
    id: 2,
    title: 'Extended',
    subTitle: 'For organizations that need additional security and support.',
    price: 99,
    url: '/e-commerce/billing',
    buttonText: 'Purchase',
    isFeatured: false,
    featureTitle: 'Everything in Business, plus:',
    features: [
      { id: 1, title: 'Portfolios' },
      { id: 2, title: 'Tags', tag: { label: 'Coming soon', type: 'primary' } },
      { id: 3, title: 'Onboarding plan' },
      { id: 4, title: 'Resource Management' }
    ]
  }
];

export const pricingAltData = [
  {
    id: 0,
    title: 'Free',
    price: 0,
    period: 'm',
    icon: freeIcon,
    url: '#!',
    buttonText: 'Start free trial',
    isFeatured: false,
    features: [
      { id: 0, title: 'Unlimited Broadcasts', isActive: true },
      { id: 1, title: 'Unlimited Sequences', isActive: true },
      { id: 2, title: 'Advanced marketing', isActive: true },
      { id: 3, title: 'Api & Developer Tools', isActive: true },
      { id: 4, title: 'Integrations', isActive: false },
      { id: 5, title: 'Payments', isActive: false },
      { id: 6, title: 'Unlimted Tags', isActive: false },
      { id: 7, title: 'Custom Fields', isActive: false }
    ]
  },
  {
    id: 1,
    title: 'Pro',
    price: 99,
    period: 'm',
    icon: proIcon,
    url: '#!',
    buttonText: 'Purchase Now',
    isFeatured: true,
    features: [
      { id: 0, title: 'Unlimited Broadcasts', isActive: true },
      { id: 1, title: 'Unlimited Sequences', isActive: true },
      { id: 2, title: 'Advanced marketing', isActive: true },
      { id: 3, title: 'Api & Developer Tools', isActive: true },
      { id: 4, title: 'Integrations', isActive: true },
      { id: 5, title: 'Payments', isActive: true },
      { id: 6, title: 'Unlimted Tags', isActive: true },
      { id: 7, title: 'Custom Fields', isActive: true }
    ]
  }
];
