import FalconComponentCard from 'components/common/FalconComponentCard';
import PageHeader from 'components/common/PageHeader';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const additiveBorderCode = `
<>
  <span className="border" />
  <span className="border-top" />
  <span className="border-end" />
  <span className="border-bottom" />
  <span className="border-start" />
</>`;

const subtrativeBorderCode = `
<>
  <span className="border border-0" />
  <span className="border border-top-0" />
  <span className="border border-right-0" />
  <span className="border border-bottom-0" />
  <span className="border border-left-0" />
</>`;

const borderColorCode = `
<>
  <span className="border border-info"></span>
  <span className="border border-success"></span>
  <span className="border border-warning"></span>
  <span className="border border-danger"></span>
  <span className="border border-cake"></span>
  <span className="border border-facebook"></span>
  <span className="border border-twitter"></span>
  <span className="border border-google-plus"></span>
  <span className="border border-github"></span>
  <div className="w-100"></div>
  <span className="border border-black"></span>
  <span className="border border-dark"></span>
  <span className="border border-1100"></span>
  <span className="border border-1000"></span>
  <span className="border border-900"></span>
  <span className="border border-800"></span>
  <span className="border border-700"></span>
  <span className="border border-600"></span>
  <span className="border border-500"></span>
  <span className="border border-400"></span>
  <span className="border border-300"></span>
  <span className="border border-200"></span>
  <span className="border border-100"></span>
  <span className="border border-light"></span>
  <span className="border border-white"></span>
  <span className="border border-2"></span>
  <span className="border-top border-top-2"></span>
  <span className="border-end border-end-2"></span>
  <span className="border-bottom border-bottom-2"></span>
  <span className="border-start border-start-2"></span>
</>`;

const borderSizesCode = `
<>
  <span className="rounded-top"></span>
  <span className="rounded-top-lg"></span>
  <span className="rounded-end"></span>
  <span className="rounded-end-lg"></span>
  <span className="rounded-bottom"></span>
  <span className="rounded-bottom-lg"></span>
  <span className="rounded-start"></span>
  <span className="rounded-start-lg"></span>
</>
`;

const borderRadiusCode = `
<>
  <span className="rounded-0"></span>
  <span className="rounded-1"></span>
  <span className="rounded-2"></span>
  <span className="rounded-3"></span>
  <span className="rounded-circle"></span>
  <span className="rounded-pill" style={{ height:'75px',width:'150px' }}></span>
</>`;

const borderStyleCode = `
<>
  <span className="border border-dashed"></span>
  <span className="border-dashed border-top"></span>
  <span className="border-dashed border-end"></span>
  <span className="border-dashed border-bottom"></span>
  <span className="border-dashed border-left"></span>
</>
`;

const borderWidthCode = `
<>
  <span className="border border-1"></span>
  <span className="border border-2"></span>
  <span className="border border-3"></span>
  <span className="border border-4"></span>
  <span className="border border-5"></span>
  <hr />
  <span className="border border-top-2"></span>
  <span className="border border-end-2"></span>
  <span className="border border-bottom-2"></span>
  <span className="border border-start-2"></span>
</>
`;

const Borders = () => (
  <>
    <PageHeader
      title="Borders"
      description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element."
      className="mb-3"
    />

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false} />
      <FalconComponentCard.Body>
        <p>
          The classes are named using the format <code>border-{'{side}'}</code>{' '}
          for <code>xs</code>
          and
          <code> border-{'{breakpoint}-{side}'}</code> for <code>sm</code>,{' '}
          <code>md</code>,<code>lg</code>, and
          <code> xl</code>.
        </p>
        <p>
          Where <em>side</em> is one of:
        </p>
        <ul>
          <li>
            <code>top</code> - for classes that set style for{' '}
            <code>border-top</code>
          </li>
          <li>
            <code>bottom</code> - for classes that set style for{' '}
            <code>border-bottom</code>
          </li>
          <li>
            <code>start</code> - for classes that set style for{' '}
            <code>border-left</code>
          </li>
          <li>
            <code>end</code> - for classes that set style for{' '}
            <code>margin-right</code>
          </li>
          <li>
            <code>x</code> - for classes that set both <code>*-left</code> and{' '}
            <code>*-right</code>
          </li>
          <li>
            <code>y</code> - for classes that set both <code>*-top</code> and{' '}
            <code>*-bottom</code>
          </li>
          <li>
            blank - for classes that set the <code>border</code> style on all 4
            side of the element.
          </li>
        </ul>
        <p className="mb-0">
          Use border utilities to quickly style the <code>border</code> of an
          element. Great for images, buttons, or any other element.
        </p>
      </FalconComponentCard.Body>
    </FalconComponentCard>

    <Row className="mb-3 g-3">
      <Col md={6}>
        <FalconComponentCard noGuttersBottom>
          <FalconComponentCard.Header title="Additive" />
          <FalconComponentCard.Body
            code={additiveBorderCode}
            language="jsx"
            className="border-component"
          />
        </FalconComponentCard>
      </Col>
      <Col md={6}>
        <FalconComponentCard noGuttersBottom>
          <FalconComponentCard.Header title="Subtractive" />
          <FalconComponentCard.Body
            code={subtrativeBorderCode}
            language="jsx"
            className="border-component"
          />
        </FalconComponentCard>
      </Col>
    </Row>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Border Radius">
        <p className="mt-2 mb-0">
          Add helper classes to an element to easily round its corners. For the
          rounded border, the class are named using the format{' '}
          <code> rounded-*</code>
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={borderRadiusCode}
        language="jsx"
        className="border-component"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Border Sizes">
        <p className="mb-0 mt-2">
          You can control top, right, bottom, left border radius of different
          size, using the helper classes. The classes also support responsive
          behaviors like
          <code> rounded-{'{xxl | xl | lg | md | sm}'}-*</code> . Examples are
          given below
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={borderSizesCode}
        language="jsx"
        className="border-component"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Border Style">
        <p className="mb-0 mt-2">
          For the different border style, add
          <code> border-{'{dashed/dotted/hidden/none}'}</code> with
          <code> border</code> class.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={borderStyleCode}
        language="jsx"
        className="border-component"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Border Width">
        <p className="mb-0 mt-2">
          You can control border width using helper classes
          <code>
            border-{'{1 | 2 | 3 | 4 | 5}'}. In addition, you can also use{' '}
            <code>border-top-2</code>,<code>border-end-2</code>,{' '}
            <code>border-bottom-2</code>, <code>border-start-2</code>.
          </code>
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={borderWidthCode}
        language="jsx"
        className="border-component"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Border Color">
        <p className="mt-2">
          Border color set as <code>currentColor</code> and border width{' '}
          <code>1px</code>. Modifier can be used to change border color and
          width. The modifier classes for color are named using the format{' '}
          <code>border-color</code> and for width <code>border-2x</code>.
        </p>
        <p className="mb-0">
          Where<em> color</em> is one of: <code>primary</code>,{' '}
          <code>secondary</code>, <code>success</code>, <code>info</code>,{' '}
          <code>warning</code>, <code>danger</code>, <code>light</code>,{' '}
          <code>dark</code>, <code>black</code>, <code>1100</code>,{' '}
          <code>1000</code>, <code>900</code>, <code>800</code>,{' '}
          <code>700</code>, <code>600</code>, <code>500</code>, <code>400</code>
          , <code>300</code>, <code>200</code>, <code>100</code>,{' '}
          <code>white</code>,
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={borderColorCode}
        language="jsx"
        className="border-component"
      />
    </FalconComponentCard>
  </>
);

export default Borders;
