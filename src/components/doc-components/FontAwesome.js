import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import FalconEditor from 'components/common/FalconEditor';

const addIconCode = `import { library } from '@fortawesome/fontawesome-svg-core'
import { faGulp } from '@fortawesome/free-brands-svg-icons' // module
import { faCheckSquare, faHome } from '@fortawesome/free-solid-svg-icons' // module
 
library.add(faGulp, faCheckSquare, faHome)`;

const individualAddIconCode = `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />`;

const exampleCode = `<div>
  <div>
    <FontAwesomeIcon icon="home" className="text-success fs-3 me-3" />
    <FontAwesomeIcon icon="home" className="text-success fs-2 me-3" />
    <FontAwesomeIcon icon="home" className="text-success fs-1" />
  </div>
  <div className='mt-3'>
    <FontAwesomeIcon icon={['fab', 'facebook']} className="text-facebook fs-3 me-3" />
    <FontAwesomeIcon icon={['fab', 'twitter']} className="text-twitter fs-3 me-3"/>
    <FontAwesomeIcon icon={['fab', 'youtube']} className="text-youtube fs-3 me-3"/>
  </div>
</div>`;

const FontAwesome = () => (
  <>
    <PageHeader
      title="React Fontawesome"
      description="Font Awesome 5 React component using SVG with JS"
      className="mb-3"
    >
      <Button
        href="https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        React Fontawesome Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Add Icon" light={false} noPreview />
      <FalconComponentCard.Body>
        <p>
          For adding new icon, go to <code>src/helpers/initFA.js</code> file. We
          initialize all fontawesome icons here for globally use. Import your
          icon from your desired icon module and then pass it to{' '}
          <code>library.add()</code> function.
        </p>
        <FalconEditor code={addIconCode} language="jsx" hidePreview />
        <p className="my-3">
          you can explicitly import icons into each component for individual
          use.
        </p>
        <FalconEditor code={individualAddIconCode} language="jsx" hidePreview />

        <p className="mb-0 mt-3">
          For better understanding you can visit{' '}
          <a href="https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react#using">
            fontawesome usage
          </a>
        </p>
      </FalconComponentCard.Body>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false} />
      <FalconComponentCard.Body
        code={exampleCode}
        scope={{ FontAwesomeIcon }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default FontAwesome;
