import FalconComponentCard from 'components/common/FalconComponentCard';
import PageHeader from 'components/common/PageHeader';
import createMarkup from 'helpers/createMarkup';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Plugins = () => {
  const [plugins] = useState([
    {
      title: 'Chart Js',
      description: `<strong>Chart.js</strong> is React components for Chart.js. Chart.js is a simple yet flexible JavaScript charting for designers & developers.`,
      docLink: 'https://github.com/reactchartjs/react-chartjs-2'
    },
    {
      title: 'Classnames',
      description: `<strong>Classnames</strong> is a simple JavaScript utility for conditionally joining classNames together.`,
      docLink: 'https://github.com/JedWatson/classnames'
    },
    {
      title: 'Dayjs',
      description: `<strong>Day.js</strong> is a 2KB immutable date-time library alternative to Moment.js
      with the same modern API.`,
      docLink: 'https://day.js.org/docs/en/installation/installation'
    },
    {
      title: 'Echarts For React',
      description: ` Falcon-React uses <strong>echarts-for-react</strong> for chart component.
      <strong> echarts-for-react </strong>
      is the simplest, and the best React wrapper for
      <a href="https://echarts.apache.org/en/index.html" target="_blank">
        Apache ECharts
      </a>`,
      docLink: 'https://github.com/hustcc/echarts-for-react'
    },
    {
      title: 'Emoji Mart',
      description: `<strong>Emoji Mart</strong> is a Slack-like customizable
      emoji picker component for React`,
      docLink: 'https://github.com/missive/emoji-mart'
    },
    {
      title: 'Fuse.js',
      description: `<strong>Fuse.js</strong> is a powerful, lightweight fuzzy-search library, with zero dependencies.`,
      docLink: 'https://fusejs.io/'
    },
    {
      title: 'Google Map React',
      description: `A declarative Google Map React component using React, lazy-loading dependencies, current-location finder and a test-driven approach by the Fullstack React team.`,
      docLink: 'https://github.com/google-map-react/google-map-react'
    },
    {
      title: 'Is.js',
      description: `Check types, regexps, presence, time and more...`,
      docLink: 'http://is.js.org/'
    },
    {
      title: 'React Leaflet',
      description: `React components for Leaflet maps`,
      docLink: 'https://react-leaflet.js.org/'
    },
    {
      title: 'React Countup',
      description: `A configurable React component wrapper around <strong>CountUp.js.</strong>`,
      docLink: 'https://github.com/glennreyes/react-countup'
    },

    {
      title: 'React Datepicker',
      description: `A simple and reusable Datepicker component for React.`,
      docLink: 'https://github.com/Hacker0x01/react-datepicker'
    },

    {
      title: 'React Dropzone',
      description: `Simple React hook to create a HTML5-compliant drag'n'drop zone for files.`,
      docLink: 'https://react-dropzone.js.org/'
    },

    {
      title: 'React Font Awesome',
      description: `Get vector icons and social logos on your website with <strong>React Font Awesome</strong> , the web's
      most popular icon set and toolkit.`,
      docLink:
        'https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react'
    },

    {
      title: 'React Hook Form',
      description: `Performant, flexible and extensible forms with easy-to-use validation.`,
      docLink: 'https://react-hook-form.com/'
    },

    {
      title: 'React Image Lightbox',
      description: `A flexible lightbox component for displaying images in a React project.`,
      docLink: 'https://github.com/frontend-collective/react-image-lightbox'
    },

    {
      title: 'React Player',
      description: `A React component for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, DailyMotion and Kaltura. `,
      docLink: 'https://github.com/CookPete/react-player'
    },

    {
      title: 'React Rating',
      description: `<strong>React Rating</strong> is a react rating component which supports custom symbols both with inline styles and glyphicons found in popular CSS Toolkits like Fontawesome or Bootstrap.`,
      docLink: 'https://github.com/dreyescat/react-rating'
    },

    {
      title: 'React Select',
      description: `A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.`,
      docLink: 'https://react-select.com/home'
    },

    {
      title: 'React Slick',
      description: `Carousel component built with React. It is a react port of <strong>slick carousel</strong>`,
      docLink: 'https://react-slick.neostack.com/'
    },

    {
      title: 'React-Toastify',
      description: `<strong>React-Toastify</strong> allows you to add notifications to your app with ease. `,
      docLink: 'https://github.com/fkhadra/react-toastify'
    },

    {
      title: 'React Table',
      description: `Lightweight and extensible data tables for React`,
      docLink: 'https://react-table.tanstack.com/'
    },

    {
      title: 'React Simple Typewriter',
      description: `A simple react component for adding a nice typewriter effect to your project.`,
      docLink: 'https://github.com/awran5/react-simple-typewriter'
    },
    {
      title: 'React Router Hash Link',
      description: `When you click on a link created with <code>react-router-hash-link</code> it will scroll to the element on the page with the <code>id</code> that matches the <code>#hash-fragment</code> in the link.`,
      docLink: 'https://github.com/rafgraph/react-router-hash-link'
    },
    {
      title: 'Lottie React',
      description: `Render After Effects animations natively on Web, Android, and iOS, and React Native.`,
      docLink: 'https://github.com/Gamote/lottie-react'
    },
    {
      title: 'Simplebar React',
      description: `SimpleBar does only one thing: replace the browser's default scrollbar with a custom CSS-styled one without losing performances`,
      docLink:
        'https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-react'
    },
    {
      title: 'Tinymce React',
      description: `The world's most advanced rich text editor in react.`,
      docLink: 'https://www.tiny.cloud/docs/integrations/react/'
    }
  ]);
  return (
    <>
      <PageHeader title="Plugins" className="mb-3">
        <p className="mt-2 mb-0">
          Falcon-React uses some third-party library to make it more flexible
          and robust.Here is the list of all plugins:
        </p>
      </PageHeader>

      {plugins.map(plugin => (
        <PluginCard
          key={plugin.title}
          title={plugin.title}
          description={plugin.description}
          themeLink={plugin.themeLink}
          docLink={plugin.docLink}
        />
      ))}
    </>
  );
};

const PluginCard = ({ title, description, docLink }) => (
  <FalconComponentCard>
    <FalconComponentCard.Header title={title} light={false} noPreview />
    <FalconComponentCard.Body>
      <p dangerouslySetInnerHTML={createMarkup(description)} />
      <a href={docLink} target="_blank" rel="noreferrer">
        Full Documentation
      </a>
    </FalconComponentCard.Body>
  </FalconComponentCard>
);

PluginCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  docLink: PropTypes.string.isRequired
};

export default Plugins;
