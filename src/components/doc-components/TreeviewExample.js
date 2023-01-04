import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import FalconComponentCard from 'components/common/FalconComponentCard';
import Treeview from 'components/common/Treeview';
import FalconEditor from 'components/common/FalconEditor';

const treeviewItems = [
  {
    name: 'public',
    id: '1',
    children: [
      {
        name: 'assets',
        id: '2',
        children: [
          {
            name: 'image',
            id: '3',
            children: [
              {
                name: 'falcon.png',
                icon: 'image',
                iconClass: 'text-success',
                dot: 'info',
                id: '4'
              },
              {
                name: 'generic.png',
                icon: 'image',
                iconClass: 'text-success',
                dot: 'primary',
                id: '5'
              },
              {
                name: 'shield.svg',
                icon: 'sun',
                iconClass: 'text-warning',
                dot: 'primary',
                id: '6'
              }
            ]
          },
          {
            name: 'video',
            id: '7',
            badge: 3,
            children: [
              {
                name: 'beach.mp4',
                icon: 'play',
                iconClass: 'text-danger',
                dot: 'warning',
                id: '8'
              },
              {
                name: 'background.map',
                icon: 'play',
                iconClass: 'text-danger',
                dot: 'warning',
                id: '9'
              }
            ]
          },
          {
            name: 'js',
            id: '10',
            badge: 2,
            children: [
              {
                name: 'theme.js',
                icon: ['fab', 'js'],
                iconClass: 'text-success',
                id: '11'
              },
              {
                name: 'theme.min.js',
                icon: ['fab', 'js'],
                iconClass: 'text-success',
                id: '12'
              }
            ]
          }
        ]
      },
      {
        name: 'dashboard',
        id: '13',
        children: [
          {
            name: 'default.html',
            icon: ['fab', 'html5'],
            iconClass: 'text-danger',
            id: '14'
          },
          {
            name: 'analytics.html',
            icon: ['fab', 'html5'],
            iconClass: 'text-danger',
            id: '15'
          },
          {
            name: 'crm.html',
            icon: ['fab', 'html5'],
            iconClass: 'text-danger',
            id: '16'
          }
        ]
      },
      {
        name: 'index.html',
        icon: ['fab', 'html5'],
        iconClass: 'text-danger',
        id: '17'
      }
    ]
  },
  {
    name: 'Files',
    id: '18',
    children: [
      {
        name: 'build.zip',
        icon: 'file-archive',
        iconClass: 'text-warning',
        id: '19'
      },
      {
        name: 'live-1.3.4.zip',
        icon: 'file-archive',
        iconClass: 'text-warning',
        id: '20'
      },
      {
        name: 'app.exe',
        icon: 'file',
        iconClass: 'text-primary',
        dot: 'warning',
        id: '21'
      },
      {
        name: 'export.csv',
        icon: 'file',
        iconClass: 'text-primary',
        dot: 'primary',
        id: '22'
      },
      {
        name: 'default.pdf',
        icon: 'file-pdf',
        iconClass: 'text-danger',
        dot: 'primary',
        id: '23'
      },
      {
        name: 'Yellow_Coldplay.wav',
        icon: 'music',
        iconClass: 'text-info',
        id: '24'
      }
    ]
  },
  {
    name: 'package.json',
    icon: ['fab', 'node-js'],
    iconClass: 'text-success',
    id: '25'
  },
  {
    name: 'package-lock.json',
    icon: ['fab', 'node-js'],
    iconClass: 'text-success',
    id: '26'
  },
  {
    name: 'README.md',
    icon: 'exclamation-circle',
    iconClass: 'text-primary',
    id: '27'
  }
];

const treeviewItemsCode = `
const treeviewItems = [
  {
    name: 'public',
    id: '1',
    children: [
      {
        name: 'assets',
        id: '2',
        children: [
          {
            name: 'image',
            id: '3',
            children: [
              {
                name: 'falcon.png',
                icon: 'image',
                iconClass: 'text-success',
                dot: 'info',
                id: '4'
              },
              {
                name: 'generic.png',
                icon: 'image',
                iconClass: 'text-success',
                dot: 'primary',
                id: '5'
              },
              {
                name: 'shield.svg',
                icon: 'sun',
                iconClass: 'text-warning',
                dot: 'primary',
                id: '6'
              }
            ]
          },
          {
            name: 'video',
            id: '7',
            badge: 3,
            children: [
              {
                name: 'beach.mp4',
                icon: 'play',
                iconClass: 'text-danger',
                dot: 'warning',
                id: '8'
              },
              {
                name: 'background.map',
                icon: 'play',
                iconClass: 'text-danger',
                dot: 'warning',
                id: '9'
              }
            ]
          },
          {
            name: 'js',
            id: '10',
            badge: 2,
            children: [
              {
                name: 'theme.js',
                icon: ['fab', 'js'],
                iconClass: 'text-success',
                id: '11'
              },
              {
                name: 'theme.min.js',
                icon: ['fab', 'js'],
                iconClass: 'text-success',
                id: '12'
              }
            ]
          }
        ]
      },
      {
        name: 'dashboard',
        id: '13',
        children: [
          {
            name: 'default.html',
            icon: ['fab', 'html5'],
            iconClass: 'text-danger',
            id: '14'
          },
          {
            name: 'analytics.html',
            icon: ['fab', 'html5'],
            iconClass: 'text-danger',
            id: '15'
          },
          {
            name: 'crm.html',
            icon: ['fab', 'html5'],
            iconClass: 'text-danger',
            id: '16'
          }
        ]
      },
      {
        name: 'index.html',
        icon: ['fab', 'html5'],
        iconClass: 'text-danger',
        id: '17'
      }
    ]
  },
  {
    name: 'Files',
    id: '18',
    children: [
      {
        name: 'build.zip',
        icon: 'file-archive',
        iconClass: 'text-warning',
        id: '19'
      },
      {
        name: 'live-1.3.4.zip',
        icon: 'file-archive',
        iconClass: 'text-warning',
        id: '20'
      },
      {
        name: 'app.exe',
        icon: 'file',
        iconClass: 'text-primary',
        dot: 'warning',
        id: '21'
      },
      {
        name: 'export.csv',
        icon: 'file',
        iconClass: 'text-primary',
        dot: 'primary',
        id: '22'
      },
      {
        name: 'default.pdf',
        icon: 'file-pdf',
        iconClass: 'text-danger',
        dot: 'primary',
        id: '23'
      },
      {
        name: 'Yellow_Coldplay.wav',
        icon: 'music',
        iconClass: 'text-info',
        id: '24'
      }
    ]
  },
  {
    name: 'package.json',
    icon: ['fab', 'node-js'],
    iconClass: 'text-success',
    id: '25'
  },
  {
    name: 'package-lock.json',
    icon: ['fab', 'node-js'],
    iconClass: 'text-success',
    id: '26'
  },
  {
    name: 'README.md',
    icon: 'exclamation-circle',
    iconClass: 'text-primary',
    id: '27'
  }
];`;

const propTypessCode = `
Treeview.propTypes = {
  data: PropTypes.array.isRequired,
  selection: PropTypes.bool, // If true selection is enabled.
  expanded: PropTypes.array, // Default expanded children ids.
  selectedItems: PropTypes.array, // Selected item ids..
  setSelectedItems: PropTypes.func // Setter to select items
};`;

const objectCode = `{
  name: 'public',
  id: '1',
  children: [
    {
      name: 'assets',
      id: '2',
      children: [
        {
          name: 'falcon.png', 
          id: '3' // Every item should have an unique id
          icon: 'image', 
          iconClass: 'text-success',
        },
        // ..
      ]
    }
  ]
}
`;

const exampleCode = `function TreeviewExample(){
  ${treeviewItemsCode}
  return(
    <Treeview
      data={treeviewItems}
      expanded={['1', '2', '3', '7', '18']}
    />
  )
}`;

const selectionCode = `function TreeviewExample(){
  ${treeviewItemsCode}
  return(
    <Treeview
      data={treeviewItems}
      selection
      defaultSelected={['4']}
      expanded={['1', '2', '3', '7', '18']}
    />
  )
}`;

const TreeviewExample = () => {
  const [selectedItems, setSelectedItems] = useState(['4']);
  return (
    <>
      <PageHeader
        title="Treeview"
        description="Treeview is a visual portrayal of hierarchical data that starts with the root item and progresses through its children and their descendants. Aside from the root, every item has a parent and can have children. To create this Treeview, we used React-Bootstrap’s “Collapse” component."
        className="mb-3"
      />

      <Card className="mb-3">
        <FalconComponentCard.Header title="Properties" noPreview />
        <Card.Body className="pt-0">
          <FalconEditor code={propTypessCode} language="jsx" hidePreview />
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <FalconComponentCard.Header title="Treeview Item Structure" noPreview />
        <Card.Body className="pt-0">
          <FalconEditor code={objectCode} language="jsx" hidePreview />
        </Card.Body>
      </Card>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Example" />
        <FalconComponentCard.Body
          code={exampleCode}
          scope={{ Treeview }}
          language="jsx"
          hidePreview
        >
          <Treeview
            data={treeviewItems}
            expanded={['1', '2', '3', '7', '18']}
          />
        </FalconComponentCard.Body>
      </FalconComponentCard>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Select Example" />
        <FalconComponentCard.Body
          code={selectionCode}
          scope={{ Treeview }}
          language="jsx"
          hidePreview
        >
          <Treeview
            data={treeviewItems}
            selection
            defaultSelected={['4']}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            expanded={['1', '2', '3', '7', '18']}
          />
        </FalconComponentCard.Body>
      </FalconComponentCard>
    </>
  );
};

export default TreeviewExample;
