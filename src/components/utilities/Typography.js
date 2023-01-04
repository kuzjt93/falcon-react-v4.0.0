import React from 'react';
import PageHeader from 'components/common/PageHeader';
import FalconComponentCard from 'components/common/FalconComponentCard';

const fontFamilyCode = `<>
  <div className="text-sans-serif">Poppins</div>
  <div className="text-base">Open Sans</div>
  <code className="text-monospace">Monospace</code>
</>`;

const headingCode = `<>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
</>`;

const headingWithClassesCode = `<>
  <p className="h1">h1. Heading</p>
  <p className="h2">h2. Heading</p>
  <p className="h3">h3. Heading</p>
  <p className="h4">h4. Heading</p>
  <p className="h5">h5. Heading</p>
  <p className="h6">h6. Heading</p>
</>`;

const customizingHeadingCode = `<h3>Fancy display heading<small className="text-muted"> With faded secondary text</small></h3>`;

const fontWeightCode = `<>
  <div className="fw-light">Hello World 300</div>
  <div className="fw-normal">Hello World 400</div>
  <div className="fw-medium">Hello World 500</div>
  <div className="fw-semi-bold">Hello World 600</div>
  <div className="fw-bold">Hello World 700</div>
  <div className="fw-bolder">Hello World 800</div>
  <div className="fw-black">Hello World 900</div>
</>`;

const displayCode = `<>
  <h1 className="display-1 mb-3">Display 1</h1>
  <h1 className="display-2 mb-3">Display 2</h1>
  <h1 className="display-3 mb-3">Display 3</h1>
  <h1 className="display-4 mb-3">Display 4</h1>
  <h1 className="display-5 mb-3">Display 5</h1>
  <h1 className="display-6 mb-3">Display 6</h1>
</>`;

const textColorsCode = `<>
  <h5 className="text-primary">.text-primary</h5>
  <h5 className="text-info">.text-info</h5>
  <h5 className="text-success">.text-success</h5>
  <h5 className="text-warning">.text-warning</h5>
  <h5 className="text-danger">.text-danger</h5>
  <h5 className="text-black">.text-black</h5>
  <h5 className="text-dark">.text-dark</h5>
  <h5 className="text-1000">.text-1000</h5>
  <h5 className="text-900">.text-900</h5>
  <h5 className="text-800">.text-800</h5>
  <h5 className="text-700">.text-700</h5>
  <h5 className="text-600">.text-600</h5>
  <h5 className="text-500">.text-500</h5>
  <h5 className="text-400">.text-400</h5>
  <h5 className="text-300"><span className="bg-black">.text-300</span></h5>
  <h5 className="text-200"><span className="bg-dark">.text-200</span></h5>
  <h5 className="text-light"><span className="bg-1000">.text-light</span></h5>
  <h5 className="text-white"><span className="bg-900">.text-white</span></h5>
</>`;

const fontSizeCode = `<>
  <h6 className="fs--2">.fs--2</h6>
  <h6 className="fs--1">.fs--1</h6>
  <h6 className="fs-0">.fs-0</h6>
  <h6 className="fs-1">.fs-1</h6>
  <h6 className="fs-2">.fs-2</h6>
  <h6 className="fs-3">.fs-3</h6>
  <h6 className="fs-4">.fs-4</h6>
  <h6 className="fs-5">.fs-5</h6>
  <h6 className="fs-6">.fs-6</h6>
  <h6 className="fs-7">.fs-7</h6>
  <h6 className="fs-8">.fs-8</h6>
</>`;

const tranformationCode = `<>
  <div className="text-lowercase">Lowercased text</div>
  <div className="text-uppercase">Uppercased text</div>
  <div className="text-capitalize">Capitalized text</div>
</>`;

const leadCode = `<p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>`;

const dropCapCode = `<p className="dropcap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro hic ex. Earum similique laudantium esse nostrum sed corporis. Libero omnis quos deleniti amet aliquam nam. Natus voluptas reiciendis eligendi reprehenderit, facere tenetur distinctio sunt officia, temporibus aperiam voluptatum quo ducimus illum incidunt adipisci doloremque rem est magnam in, molestiae excepturi odit. Reprehenderit ullam.</p>`;

const Typography = () => (
  <>
    <PageHeader
      title="Typography"
      description="Documentation and examples for Falcon typography, including global settings, headings, body text, lists, and special typographic element."
      className="mb-3"
    />

    <FalconComponentCard>
      <FalconComponentCard.Header title="Font Family">
        <p className="mb-0 mt-2">
          You have three font-family helper classes available to use.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={fontFamilyCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Headings">
        <p className="mb-0 mt-2">
          All HTML headings, <code> h1 </code>through <code> h6 </code>, are
          available.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={headingCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Headings with classes">
        <p className="mb-0 mt-2">
          <code>.h1</code> through <code>.h6</code> classes are also available,
          for when you want to match the font styling of a heading but cannot
          use the associated HTML element.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={headingWithClassesCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Customizing headings">
        <p className="mb-0 mt-2">
          Use the included utility classes to recreate the small secondary
          heading text
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={customizingHeadingCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Font Weights" />
      <FalconComponentCard.Body code={fontWeightCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Display headings">
        <p className="mb-0 mt-2">
          Traditional heading elements are designed to work best in the meat of
          your page content. When you need a heading to stand out, consider
          using a<strong> display heading </strong> —a larger, slightly more
          opinionated heading style.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={displayCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Colors">
        <p className="mb-0 mt-2">
          Use the following colors to change the text color
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={textColorsCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Sizes">
        <p className="mb-0 mt-2">
          If you want different sizes of fonts, you may use the following
          classes.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={fontSizeCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Text Transformation">
        <p className="mb-0 mt-2">
          Transform text in components with text capitalization classes.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={tranformationCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Lead">
        <p className="mb-0 mt-2">
          Make a paragraph stand out by adding <code>.lead</code>
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={leadCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Dropcap">
        <p className="mb-0 mt-2">
          Make a paragraph stand out by adding <code>.dropcap</code> class.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={dropCapCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Typography;
