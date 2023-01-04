import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import TinymceEditor from 'components/common/TinymceEditor';
import FalconEditor from 'components/common/FalconEditor';

const exampleCode = `function SingleSelectExample() {
  const [value, setValue] = useState(null);
  return(
    <TinymceEditor
      value={value}
      handleChange={newValue => setFormData(newValue)}
    />
  )
}`;

const Editor = () => (
  <>
    <PageHeader
      title="Editor"
      description="React-Falcon uses <strong>Tinymce React</strong> for rich text editor. TinyMCE React component integrates TinyMCE into React projects."
      className="mb-3"
    >
      <Button
        href="https://github.com/tinymce/tinymce-react"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Tinymce React Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Responsive behavior" noPreview>
        <p className="mt-2 mb-0">
          To use Tinymce editor at first you need to sign up in{' '}
          <a
            href="https://www.tiny.cloud/auth/signup/"
            target="_blank"
            rel="noreferrer"
          >
            Tiny Cloud
          </a>
          . And collect your api key and paste it in .env file variable
          <code> REACT_APP_TINYMCE_APIKEY</code>
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body>
        <FalconEditor
          code={`REACT_APP_TINYMCE_APIKEY= your_api_key_here`}
          language="bash"
          hidePreview
        />
      </FalconComponentCard.Body>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example">
        {/* <p className="mt-2">
          Falcon React created <strong>TinymceEditor</strong> wrapper component
          for Tinymce Editor. You can use this component to integrate tinymce
          editor.
        </p> */}
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={exampleCode}
        scope={{ TinymceEditor }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default Editor;
