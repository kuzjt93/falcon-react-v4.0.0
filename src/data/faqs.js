import { version } from 'config';
import packageInfo from '../../package.json';

const { homepage } = packageInfo;

export const faqs = [
  {
    id: 0,
    title: `How does Falcon's pricing work?`,
    description: `The free version of Falcon is available for teams of up to 15 people. Our Falcon Premium plans of 15 or fewer qualify for a small team discount. As your team grows to 20 users or more and gets more value out of Falcon, you'll get closer to our standard monthly price per seat. The price of a paid Falcon plan is tiered, starting in groups of 5 and 10 users, based on the number of people you have in your Team or Organization.`
  },
  {
    id: 1,
    title: 'What forms of payment do you accept?',
    description: `You can purchase Falcon with any major credit card. For annual subscriptions, we can issue an invoice payable by bank transfer or check. Please contact us to arrange an invoice purchase. Monthly purchases must be paid for by credit card.`
  },
  {
    id: 2,
    title: 'We need to add more people to our team. How will that be billed?',
    description: `You can add as many new teammates as you need before changing your subscription. We will subsequently ask you to correct your subscription to cover current usage.`
  },
  {
    id: 3,
    title: `How secure is Falcon?`,
    description: `Protecting the data you trust to Falcon is our first priority. Falcon uses physical, procedural, and technical safeguards to preserve the integrity and security of your information. We regularly back up your data to prevent data loss and aid in recovery. Additionally, we host data in secure SSAE 16 / SOC1 certified data centers, implement firewalls and access restrictions on our servers to better protect your information, and work with third party security researchers to ensure our practices are secure.`
  },
  {
    id: 4,
    title: `Will I be charged sales tax?`,
    description: `As of May 2016, state and local sales tax will be applied to fees charged to customers with a billing address in the State of New York.`
  },
  {
    id: 5,
    title: `Do you offer discounts?`,
    description: `We've built in discounts at each tier for teams smaller than 15 members. We also offer two months for free in exchange for an annual subscription.`
  },
  {
    id: 6,
    title: `Do you offer academic pricing?`,
    description: `We're happy to work with student groups using Falcon. Contact Us`
  },
  {
    id: 7,
    title: `Is there an on-premise version of Falcon?`,
    description: `We are passionate about the web. We don't plan to offer an internally hosted version of Falcon. We hope you trust us to provide a robust and secure service so you can do the work only your team can do.`
  },
  {
    id: 8,
    title: `What is your refund policy?`,
    description: `We do not offer refunds apart from exceptions listed below. If you cancel your plan before the next renewal cycle, you will retain access to paid features until the end of your subscription period. When your subscription expires, you will lose access to paid features and all data associated with those features. Exceptions to our refund policy: canceling within 48 hours of initial charge will result in a full refund. If you cancel within this timeframe, you will lose access to paid features and associated data immediately upon canceling.`
  }
];

export const faqAccordions = [
  {
    id: 0,
    title: 'How long do payouts take?',
    description:
      '<p class = "mb-0">Once you’re set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly.</p>'
  },
  {
    id: 1,
    title: 'How do refunds work?',
    description:
      '<p class = "mb-0">You can issue either partial or full refunds. There are no fees to refund a charge, but the fees from the original charge are not returned.</p>'
  },
  {
    id: 2,
    title: 'How much do disputes costs?',
    description:
      '<p class = "mb-0">Disputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded.</p>'
  },
  {
    id: 3,
    title: 'Is there a fee to use Apple Pay or Google Pay?',
    description:
      '<p class = "mb-0">There are no additional fees for using our mobile SDKs or to accept payments using consumer wallets like Apple Pay or Google Pay.</p>'
  }
];

export const faqDoc = [
  {
    id: 1,
    title: 'How to start working with Falcon React',
    description: `<p class='mb-0'>Install latest version of Node js to your PC <a href='https://nodejs.dev/' target="_blank">https://nodejs.dev/</a> Download the template file and unzip it.
    You will get 2 files in the folder. Now unzip the <code>falcon-react-${version}</code> directory and open this directory from your terminal.
    Run <code>npm install </code> from your terminal.
    After installing all the required packages, run <code>npm start</code>. <br>
    Please check the following link to see How to Getting started in Falcon React: <a target='_blank' href='//${homepage}/documentation/getting-started'>${homepage}/documentation/getting-started<a/>.</p>`
  },
  {
    id: 2,
    title:
      'Is there a specific version of Node.js I should use for Falcon React?',
    description: `<p class="mb-0">Node version to <code>16.15.1</code> or any further updated version.</p>`
  },

  {
    id: 3,
    title: 'What React library is used for general API integration?',
    description: `<p class="mb-0">We used react context API for general API integration.</p>`
  },
  {
    id: 4,
    title: 'How are the SEO headers built?',
    description: `<p class="mb-0">We didn't build with any SEO headers by default. You have to integrate it manually by yourself.</p>`
  },
  {
    id: 5,
    title:
      'Which bootstrap react framework you are using? Reactstrap or React-Bootstrap?',
    description: `<p class="mb-0">We used the <b>reactstrap</b> for Falcon React <code>v2.x</code> and <b>React bootstrap</b> for Falcon React <code>v3.x</code>.</p>`
  },
  {
    id: 6,
    title: 'Where will I get the Figma Files?',
    description: `<p >You will find the Figma link in the <code>README.md</code> file on your downloaded copy of Falcon. Here is the detailed documentation: <a target='_blank' href='//${homepage}/documentation/design-file'> ${homepage}/documentation/design-file</a>.</p>
    <p class='mb-0'>If you still have any problem with the link, reach us out with your purchase ID at <a href="mailto:support@themewagon.com">support@themewagon.com</a></p>`
  },
  {
    id: 7,
    title:
      'What are the bare minimum files just to get the layout and navigation?',
    description: `<p >You can start from the Falcon’s Starter page where the minimum required components are included to get layout and navigation.
    More specifically, the below list of files are required to work with layout and navigation:<br>
    <code>src/assets</code><br>
    <code>src/components/common</code><br>
    <code>src/components/footer</code><br>
    <code>src/components/navbar</code><br>
    <code>src/components/notification</code><br>
    <code>src/components/pages/Starter.js</code><br>
    <code>src/components/settings-panel</code><br>
    <code>src/context</code><br>
    <code>src/data</code><br>
    <code>src/helpers</code><br>
    <code>src/hooks</code><br>
    <code>src/layouts/Layout.js</code><br>
    <code>src/layouts/MainLayout.js</code><br>
    <code>src/layouts/MainRoutes.js</code><br>
    <code>src/reducers</code><br>
    <code>src/routes</code><br>
    <code>src/App.js</code><br>
    <code>src/Config.js</code><br>
    <code>src/Index.js</code><br>
    <code>src/Main.js</code></p>

    <p>Note:  Remember deleting other files/directories will be the cause of errors. You have to remove the corresponding import statement and unnecessary lines from your code manually.
    </p>
    <p class="mb-0">We have created a mini version of Falcon React with all the essential files only. If you are interested, please reach us out with your purchase ID at <a href="mailto:support@themewagon.com">support@themewagon.com</a>.
    </p>`
  },
  {
    id: 8,
    title: 'How to compile SCSS files with Falcon React?',
    description: `<p class="mb-0">To compile scss files in Falcon react run npm run <code>build:css</code> from your terminal, or you can watch the scss files by running npm run <code>watch:css</code> to a separate terminal. 
    Check the link below to have a look on the styling documentation in Falcon React <a target='_blank' href='//${homepage}/documentation/styling'> ${homepage}/documentation/styling</a>
    </p>`
  },
  {
    id: 9,
    title: 'How to update from Falcon React v2.x to the upper version?',
    description: `<p><b>Updating from any earlier version of 3.x to ${version}:</b></br>
    Check out the following link and follow the changes: <a target='_blank' href='//${homepage}/changelog'> ${homepage}/changelog</a>
    </p>
    <p class='mb-0'><b>Updating from version 2 to version 3:</b></br>
    As the latest versions of templates and all their packages have different structures behind their components, you have to update all the components manually into your project.<br>
    So, it would be better to start building applications with the Bootstrap 5 version of Falcon from scratch. You can include any components from your existing project to your current project. Bring the component and its required SCSS and place it into your current project.
    </p>`
  }
];
