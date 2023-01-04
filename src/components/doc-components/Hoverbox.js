import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import FalconComponentCard from 'components/common/FalconComponentCard';
import generic1 from 'assets/img/generic/1.jpg';
import generic2 from 'assets/img/generic/2.jpg';
import generic3 from 'assets/img/generic/3.jpg';
import Hoverbox from 'components/common/Hoverbox';

const exampleCode = `
<Hoverbox className="text-center">
  <img className="img-fluid" src={generic3} alt="" />
  <Hoverbox.Content className="light bg-dark p-5 flex-center">
    <div>
      <p className="bg-dark lead text-white">
        Style your card with different design using theme Hoverbox
      </p>
      <a className="btn btn-light btn-sm mt-1" href="#!">
        Learn more
      </a>
    </div>
  </Hoverbox.Content>
</Hoverbox>
`;

const changeImageCode = `
<Hoverbox className="text-center">
  <img className="img-fluid" src={generic1} alt="" />
  <Hoverbox.Content>
    <img className="img-fluid" src={generic2} alt="" />
  </Hoverbox.Content>
</Hoverbox>
`;

const HoverboxExample = () => (
  <>
    <PageHeader
      title="Hoverbox"
      description="Style your card with a different design using theme Hoverbox."
      className="mb-3"
    />

    <Row className="g-3 mb-0">
      <Col lg={6}>
        <FalconComponentCard>
          <FalconComponentCard.Header title="Example" light={false} />
          <FalconComponentCard.Body
            code={exampleCode}
            language="jsx"
            scope={{ Hoverbox, generic3 }}
          />
        </FalconComponentCard>
      </Col>
      <Col lg={6}>
        <FalconComponentCard>
          <FalconComponentCard.Header title="Change Image" light={false} />
          <FalconComponentCard.Body
            code={changeImageCode}
            language="jsx"
            scope={{ Hoverbox, generic1, generic2 }}
          ></FalconComponentCard.Body>
        </FalconComponentCard>
      </Col>
    </Row>
  </>
);

export default HoverboxExample;
