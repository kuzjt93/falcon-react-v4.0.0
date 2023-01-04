import React from 'react';
import { Table } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import FalconComponentCard from 'components/common/FalconComponentCard';

const exampleCode = `
<>
  <div className="d-inline bg-primary p-2 text-white">d-inline</div>
  <div className="d-block bg-primary p-2 text-white mt-3">d-inline-block</div>
</>`;

const displayInPrintCode = `
<>
  <div className="d-print-none">Screen Only (Hide on print only)</div>
  <div className="d-none d-print-block">Print Only (Hide on screen only)</div>
  <div className="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>
</>`;

const Display = () => (
  <>
    <PageHeader
      title="Display"
      description="Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing."
      className="mb-3"
    ></PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Notation" noPreview />
      <FalconComponentCard.Body>
        <p>
          Display utility classes that apply to all breakpoints, from{' '}
          <code>xs </code>to <code>xl</code>, have no breakpoint abbreviation in
          them. This is because those classes are applied from{' '}
          <code>min-width: 0; </code>
          and up, and thus are not bound by a media query. The remaining
          breakpoints, however, do include a breakpoint abbreviation.
        </p>
        <p className="mt-3">As such, the classes are named using the format:</p>
        <ul>
          <li>
            <code>.d-{'{value}'} </code> for <code>xs</code>
          </li>
          <li>
            <code>
              .d-{'{breakpoint}'}-{'{value}'}
            </code>{' '}
            for<code> sm</code>,<code> md</code>,<code> lg</code>, and{' '}
            <code> xl</code>,
          </li>
        </ul>
        <p className="mt-3">Where value is one of:</p>
        <ul>
          <li>
            <code>none</code>
          </li>
          <li>
            <code>inline</code>
          </li>
          <li>
            <code>inline-block</code>
          </li>
          <li>
            <code>block</code>
          </li>
          <li>
            <code>table</code>
          </li>
          <li>
            <code>table-cell</code>
          </li>
          <li>
            <code>table-row</code>
          </li>
          <li>
            <code>flex</code>
          </li>
          <li>
            <code>inline-flex</code>
          </li>
        </ul>

        <p>
          The display values can be altered by changing the{' '}
          <code>$displays </code>variable and recompiling the SCSS.
        </p>
        <p>
          The media queries effect screen widths with the given breakpoint or
          larger. For example,
          <code>.d-lg-none </code>sets <code>display: none;</code>on both{' '}
          <code>lg </code>and <code>xl </code>screens.
        </p>
      </FalconComponentCard.Body>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" />
      <FalconComponentCard.Body code={exampleCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" noPreview />
      <FalconComponentCard.Body>
        <p>
          For faster mobile-friendly development, use responsive display classes
          for showing and hiding elements by device. Avoid creating entirely
          different versions of the same site, instead hide elements
          responsively for each screen size.
        </p>
        <p>
          To hide elements simply use the <code>.d-none </code>class or one of
          the
          <code>.d-{'{sm,md,lg,xl}'}-none </code>classes for any responsive
          screen variation.
        </p>
        <p>
          To show an element only on a given interval of screen sizes you can
          combine one <code>.d-*-none class with a </code>
          <code>.d-*-* class, for example </code>
          <code>.d-none .d-md-block .d-xl-none </code>will hide the element for
          all screen sizes except on medium and large devices.
        </p>
        <Table className="table-bordered">
          <thead>
            <tr>
              <th>Screen Size</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hidden on all</td>
              <td>
                <code>.d-none</code>
              </td>
            </tr>
            <tr>
              <td>Hidden only on xs</td>
              <td>
                <code>.d-none .d-sm-block</code>
              </td>
            </tr>
            <tr>
              <td>Hidden only on sm</td>
              <td>
                <code>.d-sm-none .d-md-block</code>
              </td>
            </tr>
            <tr>
              <td>Hidden only on md</td>
              <td>
                <code>.d-md-none .d-lg-block</code>
              </td>
            </tr>
            <tr>
              <td>Hidden only on lg</td>
              <td>
                <code>.d-lg-none .d-xl-block</code>
              </td>
            </tr>
            <tr>
              <td>Hidden only on xl</td>
              <td>
                <code>.d-xl-none</code>
              </td>
            </tr>
            <tr>
              <td>Visible on all</td>
              <td>
                <code>.d-block</code>
              </td>
            </tr>
            <tr>
              <td>Visible only on xs</td>
              <td>
                <code>.d-block .d-sm-none</code>
              </td>
            </tr>
            <tr>
              <td>Visible only on sm</td>
              <td>
                <code>.d-none .d-sm-block .d-md-none</code>
              </td>
            </tr>
            <tr>
              <td>Visible only on md</td>
              <td>
                <code>.d-none .d-md-block .d-lg-none</code>
              </td>
            </tr>
            <tr>
              <td>Visible only on lg</td>
              <td>
                <code>.d-none .d-lg-block .d-xl-none</code>
              </td>
            </tr>
            <tr>
              <td>Visible only on xl</td>
              <td>
                <code>.d-none .d-xl-block</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </FalconComponentCard.Body>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Display in print">
        <p className="mt-2">
          Change the <code>display </code>value of elements when printing with
          our print display utility classes. Includes support for the same{' '}
          <code>display </code>values as our responsive{' '}
          <code>.d-* utilities.</code>
        </p>
        <ul>
          <li>
            <code>.d-print-none</code>
          </li>
          <li>
            <code>.d-print-inline</code>
          </li>
          <li>
            <code>.d-print-inline-block</code>
          </li>
          <li>
            <code>.d-print-block</code>
          </li>
          <li>
            <code>.d-print-table</code>
          </li>
          <li>
            <code>.d-print-table-row</code>
          </li>
          <li>
            <code>.d-print-table-cell</code>
          </li>
          <li>
            <code>.d-print-flex</code>
          </li>
          <li>
            <code>.d-print-inline-flex</code>
          </li>
        </ul>
        <p className="mb-0">The print and display classes can be combined.</p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={displayInPrintCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Display;
