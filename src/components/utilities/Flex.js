import React from 'react';
import { Tab } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import FalconComponentCard from 'components/common/FalconComponentCard';
import Flex from 'components/common/Flex';

const flexCode = `<>
  <Flex className="p-2 bg-200 mb-2">Flexbox container!</Flex>
  <Flex inline className="p-2 bg-200">
    Inline flexbox container!
  </Flex>
</>`;

const flexDirectionRowCode = `<>
  <Flex direction='row' className="p-2 bg-200 mb-2">  
    <div className="p-2 bg-300 border border-400">Flex item 1</div>
    <div className="p-2 bg-300 border border-400">Flex item 2</div>
    <div className="p-2 bg-300 border border-400">Flex item 3</div>
  </Flex>
  <Flex direction='row-reverse' className="p-2 bg-200 mb-2">  
    <div className="p-2 bg-300 border border-400">Flex item 1</div>
    <div className="p-2 bg-300 border border-400">Flex item 2</div>
    <div className="p-2 bg-300 border border-400">Flex item 3</div>
  </Flex>
  <Flex direction='lg-row-reverse' className="p-2 bg-200 mb-2">  
    <div className="p-2 bg-300 border border-400">
      Flex Item (<code>flex-direction:row-reverse</code> in <code>lg</code> screen )
    </div>
  </Flex>
</>`;

const flexDirectionColumnCode = `<>
  <Flex direction='column' className="p-2 mb-2">  
    <div className="p-2 bg-300 border border-400">Flex item 1</div>
    <div className="p-2 bg-300 border border-400">Flex item 2</div>
    <div className="p-2 bg-300 border border-400">Flex item 3</div>
  </Flex>
  <Flex direction='column-reverse' className="p-2 mb-2">  
    <div className="p-2 bg-300 border border-400">Flex item 1</div>
    <div className="p-2 bg-300 border border-400">Flex item 2</div>
    <div className="p-2 bg-300 border border-400">Flex item 3</div>
  </Flex>
  <Flex direction='lg-column-reverse' className="p-2 mb-2">  
    <div className="p-2 bg-300 border border-400">Flex item 1 (<code>column-reverse</code> in <code>lg</code> screen )</div>
    <div className="p-2 bg-300 border border-400">Flex item 2 (<code>column-reverse</code> in <code>lg</code> screen )</div>
    <div className="p-2 bg-300 border border-400">Flex item 3 (<code>column-reverse</code> in <code>lg</code> screen )</div>
  </Flex>
</>`;

const justifyCode = `<>
  <Flex justifyContent='start' className="bg-200 p-2 mb-2">  
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex justifyContent='end' className="bg-200 p-2 mb-2">  
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex justifyContent='center' className="bg-200 p-2 mb-2">  
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex justifyContent='between' className="bg-200 p-2 mb-2">  
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex justifyContent='around' className="bg-200 p-2 mb-2">  
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex justifyContent='lg-center' className="bg-200 p-2 mb-2">  
    <div className="p-2 bg-300 border border-400">Flex item (<code>justify-content:center</code> in <code>lg</code> screen)</div>
  </Flex>
</>`;

const alignItemsCode = `<>
  <Flex alignItems='start' className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex alignItems='end' className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex alignItems='center' className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex alignItems='baseline' className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex alignItems='stretch' className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex alignItems='lg-center' className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-300 border border-400">Flex item (<code>align-items:center</code> in <code>lg</code> screen)</div>
  </Flex>
</>`;

const alignSelfCode = `<>
  <Flex className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="border border-400 p-2 bg-300">Flex Item</div>
    <div className="border border-400 p-2 bg-300 align-self-start">Align self start</div>
    <div className="border border-400 p-2 bg-300">Flex Item</div>
  </Flex>
  <Flex className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="border border-400 p-2 bg-300">Flex Item</div>
    <div className="border border-400 p-2 bg-300 align-self-end">Align self end</div>
    <div className="border border-400 p-2 bg-300">Flex Item</div>
  </Flex>
  <Flex className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="border border-400 p-2 bg-300">Flex Item</div>
    <div className="border border-400 p-2 bg-300 align-self-center">Align self center</div>
    <div className="border border-400 p-2 bg-300">Flex Item</div>
  </Flex>
  <Flex className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="border border-400 p-2 bg-300">Flex Item</div>
    <div className="border border-400 p-2 bg-300 align-self-baseline">Align self baseline</div>
    <div className="border border-400 p-2 bg-300">Flex Item</div>
  </Flex>
  <Flex className="bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="border border-400 p-2 bg-300">Flex Item</div>
    <div className="border border-400 p-2 bg-300 align-self-stretch">Align self stretch</div>
    <div className="border border-400 p-2 bg-300">Flex Item</div>
  </Flex>
</>`;

const fillCode = `<>
  <Flex className="bg-200">
    <div className="p-2 flex-fill bg-300 border border-400">Flex item with a lot of content</div>
    <div className="p-2 flex-fill bg-300 border border-400">Flex item</div>
    <div className="p-2 flex-fill bg-300 border border-400">Flex item</div>
  </Flex>
</>`;

const growCode = `<>
  <Flex className="bg-200">
    <div className="p-2 flex-grow-1 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Third flex item</div>
  </Flex>
</>`;

const shrinkCode = `<>
  <Flex className="bg-200">
    <div className="p-2 w-100 bg-300 border border-400">Flex item</div>
    <div className="p-2 flex-shrink-1 bg-300 border border-400">Flex item</div>
  </Flex>
</>`;

const wrapCode = `<>
  <Flex wrap='nowrap' className="mb-3 bg-200 border border-300 py-3" style={{width: '8rem'}}>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex wrap='wrap' className="mb-3 bg-200 border border-300">
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex wrap='wrap-reverse' className="mb-3 bg-200 border border-300">
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
</>`;

const orderCode = `<>
  <Flex className="bg-200 p-2 mb-2">  
    <div className="order-3 p-2 bg-300 border border-400">First flex item</div>
    <div className="order-2 p-2 bg-300 border border-400">Second flex item</div>
    <div className="order-1 p-2 bg-300 border border-400">Third flex item</div>
  </Flex>
</>`;

const alignContentCode = `<>
  <Flex alignContent='start' wrap='wrap' className="bg-200 mb-3" style={{ height: '300px' }}>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex alignContent='end' wrap='wrap' className="bg-200 mb-3" style={{ height: '300px' }}>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex alignContent='center' wrap='wrap' className="bg-200 mb-3" style={{ height: '300px' }}>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex alignContent='between' wrap='wrap' className="bg-200 mb-3" style={{ height: '300px' }}>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex alignContent='around' wrap='wrap' className="bg-200 mb-3" style={{ height: '300px' }}>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
  <Flex alignContent='streach' wrap='wrap' className="bg-200 mb-3" style={{ height: '300px' }}>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
    <div className="p-2 bg-300 border border-400">Flex item</div>
  </Flex>
</>`;

const Flexs = () => (
  <>
    <PageHeader
      title="Flex"
      description="Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities."
      className="mb-3"
    />

    <FalconComponentCard>
      <FalconComponentCard.Header title="Flex Behaviors">
        <p className="mt-2 mb-0">
          Apply Falcon's <code> &lt;Flex&gt; </code> component to create a
          flexbox container and transform direct children elements into flex
          items. Flex containers and items are able to be modified further with
          additional flex properties.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={flexCode}
        scope={{ Flex }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard multiSections>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header title="Direction">
          <p className="mt-2 mb-0">
            Use <code>direction={'{row|row-reverse}'}</code> prop to set a
            horizontal direction.Set direction with{' '}
            <code>{'{xxl|xl|lg|md|sm}'}</code> prefix for responsiveness.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body
          code={flexDirectionRowCode}
          scope={{ Flex }}
          language="jsx"
        />
      </Tab.Container>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header>
          <p className=" mb-0">
            Use <code>direction={'{column|column-reverse}'}</code> prop to set a
            vertical direction.Set direction with{' '}
            <code>{'{xxl|xl|lg|md|sm}'}</code> prefix for responsiveness.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body
          code={flexDirectionColumnCode}
          scope={{ Flex }}
          language="jsx"
        />
      </Tab.Container>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Justify Content">
        <p className="mt-2 mb-0">
          Use <code>justifyContent</code> prop to change the alignment of flex
          items on the main axis (the x-axis to start, y-axis if{' '}
          <code>flex-direction: column</code>). Choose from <code>start</code>{' '}
          (browser default), <code>end</code>, <code>center</code>,{' '}
          <code>between</code>, <code>around</code>, or <code>evenly</code>. Set{' '}
          <code>justifyContent</code> with <code>{'{xxl|xl|lg|md|sm}'}</code>{' '}
          prefix for responsiveness.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={justifyCode}
        scope={{ Flex }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Align items">
        <p className="mt-2 mb-0">
          Use <code>alignItems</code> prop to change the alignment of flex items
          on the cross axis (the y-axis to start, x-axis if{' '}
          <code>flex-direction: column</code>). Choose from <code>start</code>,{' '}
          <code>end</code>, <code>center</code>, <code>baseline</code>, or{' '}
          <code>stretch</code> (browser default). Set <code>alignItems</code>{' '}
          with <code>{'{xxl|xl|lg|md|sm}'}</code> prefix for responsiveness.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={alignItemsCode}
        scope={{ Flex }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Align self">
        <p className="mt-2 mb-0">
          Use <code>align-self</code> utilities on flexbox items to individually
          change their alignment on the cross axis (the y-axis to start, x-axis
          if <code>flex-direction: column</code>). Choose from the same options
          as <code>align-items</code>: <code>start</code>, <code>end</code>,{' '}
          <code>center</code>, <code>baseline</code>, or <code>stretch</code>{' '}
          (browser default).
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={alignSelfCode}
        scope={{ Flex }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Fill">
        <p className="mt-2 mb-0">
          Use the <code>.flex-fill</code> class on a series of sibling elements
          to force them into widths equal to their content (or equal widths if
          their content does not surpass their border-boxes) while taking up all
          available horizontal space.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={fillCode}
        scope={{ Flex }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard multiSections>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header title="Grow and Shrink">
          <p className="mt-2 mb-0">
            Use <code>.flex-grow-*</code> utilities to toggle a flex item’s
            ability to grow to fill available space. In the example below, the{' '}
            <code>.flex-grow-1</code> elements uses all available space it can,
            while allowing the remaining two flex items their necessary space.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body
          code={growCode}
          scope={{ Flex }}
          language="jsx"
        />
      </Tab.Container>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header>
          <p className="mb-0">
            Use <code>.flex-shrink-*</code> utilities to toggle a flex item’s
            ability to shrink if necessary. In the example below, the second
            flex item with <code>.flex-shrink-1</code> is forced to wrap its
            contents to a new line, “shrinking” to allow more space for the
            previous flex item with <code>.w-100</code>.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body
          code={shrinkCode}
          scope={{ Flex }}
          language="jsx"
        />
      </Tab.Container>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Wrap">
        <p className="mt-2 mb-0">
          Use <code>wrap</code> prop to change how flex items wrap in a flex
          container. Choose from no wrapping at all (the browser default) with{' '}
          <code>nowrap</code>, wrapping with <code>wrap</code>, or reverse
          wrapping with <code>wrap-reverse</code>. Set{' '}
          <code>justifyContent</code> with <code>{'{xxl|xl|lg|md|sm}'}</code>{' '}
          prefix for responsiveness.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={wrapCode}
        scope={{ Flex }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Order">
        <p className="mt-2 mb-0">
          Change the <em>visual</em> order of specific flex items with a handful
          of <code>order</code> utilities. We only provide options for making an
          item first or last, as well as a reset to use the DOM order.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={orderCode}
        scope={{ Flex }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Align content">
        <p className="mt-2 mb-0">
          Use <code>alignContent</code> prop to align flex items{' '}
          <em>together</em> on the cross axis. Choose from <code>start</code>{' '}
          (browser default), <code>end</code>, <code>center</code>,{' '}
          <code>between</code>, <code>around</code>, or <code>stretch</code>. To
          demonstrate these, we’ve enforced <code>wrap='wrap'</code> prop and
          increased the number of flex items.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={alignContentCode}
        scope={{ Flex }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default Flexs;
