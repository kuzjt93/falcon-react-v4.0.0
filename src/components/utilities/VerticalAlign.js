import React from 'react';
import PageHeader from 'components/common/PageHeader';
import FalconComponentCard from 'components/common/FalconComponentCard';

const baselineCode = `<>
  <span className="align-baseline">baseline</span>
  <span className="align-top">top</span>
  <span className="align-middle">middle</span>
  <span className="align-bottom">bottom</span>
  <span className="align-text-top">text-top</span>
  <span className="align-text-bottom">text-bottom</span>
</>`;

const tableCellsCode = `<Table bordered responsive style={{ height:'100px' }}>
  <tbody>
    <tr>
      <td className="align-baseline">baseline</td>
      <td className="align-top">top</td>
      <td className="align-middle">middle</td>
      <td className="align-bottom">bottom</td>
      <td className="align-text-top">text-top</td>
      <td className="align-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</Table>`;

const VerticalAlign = () => (
  <>
    <PageHeader
      title="Vertical Align"
      description="Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements."
      className="mb-3"
    />

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false}>
        <p className="my-2">
          Change the alignment of elements with the vertical-alignment
          utilities. Please note that vertical-align only affects inline,
          inline-block, inline-table, and table cell elements.
        </p>
        <p className="mb-2">
          Choose from <code>.align-baseline, </code>
          <code>.align-top, </code>
          <code>.align-middle, </code>
          <code>.align-bottom, </code>
          <code>.align-text-bottom, </code>and{' '}
          <code>.align-text-top as needed.</code>
        </p>
        <p className="mb-0">
          Multiple links and tap targets are not recommended with stretched
          links. However, some <code>position </code>and <code>z-index </code>
          styles can help should this be required.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={baselineCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Vertical Alignment With Table Cells"
        light={false}
      />
      <FalconComponentCard.Body code={tableCellsCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default VerticalAlign;
