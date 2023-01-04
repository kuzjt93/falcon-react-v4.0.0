import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { BsFillAlarmFill, BsFacebook } from 'react-icons/bs';
import { FiActivity } from 'react-icons/fi';
import { MdAddShoppingCart } from 'react-icons/md';

const exampleCode = `<div>
  <div>
    <BsFillAlarmFill className="text-success fs-3 me-3"/>
    <BsFillAlarmFill className="text-success fs-2 me-3" />
    <BsFillAlarmFill className="text-success fs-1" />
  </div>
  <div className='mt-3'>
    <BsFillAlarmFill className="text-facebook fs-3 me-3"/>
    <BsFillAlarmFill className="text-twitter fs-3 me-3" />
    <BsFillAlarmFill className="text-youtube fs-3" />
  </div>
 </div>`;

const featherIconCode = `<div>
  <div>
    <FiActivity className="text-success fs-3 me-3" />
    <FiActivity className="text-success fs-2 me-3" />
    <FiActivity className="text-success fs-1" />
  </div>
  <div className='mt-3'>
    <FiActivity className="text-facebook fs-3 me-3" />
    <FiActivity className="text-twitter fs-3 me-3"/>
    <FiActivity className="text-youtube fs-3 me-3"/>
  </div>
</div>`;

const materialIconCode = `<div>
  <div>
    <MdAddShoppingCart className="text-success fs-3 me-3" />
    <MdAddShoppingCart className="text-success fs-2 me-3" />
    <MdAddShoppingCart className="text-success fs-1" />
  </div>
  <div className='mt-3'>
    <MdAddShoppingCart className="text-facebook fs-3 me-3" />
    <MdAddShoppingCart className="text-twitter fs-3 me-3"/>
    <MdAddShoppingCart className="text-youtube fs-3 me-3"/>
  </div>
</div>`;

const ReactIcons = () => (
  <>
    <PageHeader
      title="React Icons"
      description="Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using."
      className="mb-3"
    >
      <Button
        href="https://react-icons.github.io/react-icons/"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        React Icons Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Bootstrap Icons" light={false} />
      <FalconComponentCard.Body
        code={exampleCode}
        scope={{ BsFillAlarmFill, BsFacebook }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Feather Icons" light={false} />
      <FalconComponentCard.Body
        code={featherIconCode}
        scope={{ FiActivity }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Material Icons" light={false} />
      <FalconComponentCard.Body
        code={materialIconCode}
        scope={{ MdAddShoppingCart }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default ReactIcons;
