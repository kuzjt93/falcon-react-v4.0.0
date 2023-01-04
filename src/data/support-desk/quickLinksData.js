/* eslint-disable react/react-in-jsx-scope */
import img1 from 'assets/img/support-desk/reports/1.png';
import img2 from 'assets/img/support-desk/reports/2.png';
import img3 from 'assets/img/support-desk/reports/3.png';
import img4 from 'assets/img/support-desk/reports/4.png';
import img5 from 'assets/img/support-desk/reports/5.png';
import img6 from 'assets/img/support-desk/reports/6.png';
import img7 from 'assets/img/support-desk/reports/7.png';
import {
  FiAlertCircle,
  FiBriefcase,
  FiClock,
  FiFileText,
  FiGitPullRequest,
  FiHexagon,
  FiLock,
  FiRepeat,
  FiSunrise,
  FiUser,
  FiUserCheck,
  FiUsers
} from 'react-icons/fi';

export const reports = {
  analysis: [
    {
      title: 'In-Depth Helpdesk',
      description: 'an overview of your helpdesk system',
      img: img1
    },
    {
      title: 'Trends in Ticket Volume',
      description: 'an overview of the number of tickets',
      img: img2
    }
  ],
  customerSatisfaction: [
    {
      title: 'Analysis of the Top Customers',
      description: 'Check out our customer stories',
      img: img3
    },
    {
      title: 'Customer Satisfaction Survey',
      description: 'Check out the report details',
      img: img4
    }
  ],
  productivity: [
    {
      title: 'Performance of Agents',
      description: 'Check out the report details',
      img: img5
    },
    {
      title: 'Performance in a Group',
      description: 'Check out the report details',
      img: img6
    },
    {
      title: 'Distribution of Performance',
      description: 'Check out the report details',
      img: img7
    }
  ]
};

export const team = [
  {
    icon: <FiUser className="text-primary fs-2" />,
    color: 'primary',
    title: 'Agents',
    description:
      "Define agents' scope of work, type, language, and other details."
  },
  {
    icon: <FiUsers className="text-info fs-2" />,
    color: 'info',
    title: 'Groups',
    description:
      'Agents can be organized and unattended tickets can be notified.'
  },
  {
    icon: <FiGitPullRequest className="text-warning fs-2" />,
    color: 'warning',
    title: 'Roles',
    description: 'Provide agents with fine-grained access and privileges.'
  },
  {
    icon: <FiClock className="text-success fs-2" />,
    color: 'success',
    title: 'Working Hours',
    description:
      'To set client expectations, define operating hours and holidays.'
  },
  {
    icon: <FiBriefcase className="text-primary fs-2" />,
    color: 'primary',
    title: 'Skills',
    description: 'Assign kinds of tickets to agents based on their expertise.'
  },
  {
    icon: <FiRepeat className="text-info fs-2" />,
    color: 'info',
    title: 'Agent Changes',
    description: 'Create and manage agent schedules all in one spot.'
  }
];

export const account = [
  {
    icon: <FiUserCheck className="text-primary fs-2" />,
    color: 'primary',
    title: 'Account Information',
    description:
      'View the status of your account as well as your invoice email address.'
  },
  {
    icon: <FiFileText className="text-info fs-2" />,
    color: 'info',
    title: 'Billing & Plans',
    description:
      'Plan, add-ons, team size, and billing cycle are all under your control.'
  },
  {
    icon: <FiSunrise className="text-warning fs-2" />,
    color: 'warning',
    title: 'Passes for the day',
    description: 'Part-time agents can purchase on-demand licenses.'
  },
  {
    icon: <FiLock className="text-success fs-2" />,
    color: 'success',
    title: 'Security',
    description:
      'Advanced SSO settings, password policy, and domain restriction.'
  },
  {
    icon: <FiHexagon className="text-primary fs-2" />,
    color: 'primary',
    title: 'Log of Audits',
    description:
      'All of the changes made to your falcon Support tickets account.'
  },
  {
    icon: <FiAlertCircle className="text-info fs-2" />,
    color: 'info',
    title: 'Configure the Helpdesk',
    description: 'Your Falcon Support Tickets will be personalized.'
  }
];
