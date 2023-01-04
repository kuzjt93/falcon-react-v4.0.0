import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { getSize } from 'helpers/utils';
import Flex from 'components/common/Flex';
import { useDropzone } from 'react-dropzone';

import cloudUpload from 'assets/img/icons/cloud-upload.svg';
import CardDropdown from 'components/common/CardDropdown';

const exampleCode = `import { useDropzone } from 'react-dropzone';
import Flex from 'components/common/Flex';
import cloudUpload from 'assets/img/icons/cloud-upload.svg';

function Example() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <>
      <div {...getRootProps({ className: 'dropzone-area py-6' })}>
        <input {...getInputProps()} />
        <Flex justifyContent="center">
          <img src={cloudUpload} alt="" width={25} className="me-2" />
          <p className="fs-0 mb-0 text-700">Drop your files here</p>
        </Flex>
      </div>
      <div className="mt-3">
        {acceptedFiles.length > 0 && (
          <>
            <h6>Files</h6>
            <ul>{files}</ul>
          </>
        )}
      </div>
    </>
  );
}`;

const singleFileCode = `import { useDropzone } from 'react-dropzone';
import Flex from 'components/common/Flex';
import cloudUpload from 'assets/img/icons/cloud-upload.svg';

function SingleFileExample() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <>
      <div {...getRootProps({ className: 'dropzone-area py-6' })}>
        <input {...getInputProps({multiple:false})} />
        <Flex justifyContent="center">
          <img src={cloudUpload} alt="" width={25} className="me-2" />
          <p className="fs-0 mb-0 text-700">Drop your file here</p>
        </Flex>
      </div>
      <div className="mt-3">
        {acceptedFiles.length > 0 && (
          <>
            <h6>File</h6>
            <ul>{files}</ul>
          </>
        )}
      </div>
    </>
  );
}`;

const previewCode = `import { useDropzone } from 'react-dropzone';
import Flex from 'components/common/Flex';
import cloudUpload from 'assets/img/icons/cloud-upload.svg';
import CardDropdown from 'components/common/CardDropdown';
import Images from 'components/bootstrap-components/Image';
import { getSize } from 'helpers/utils';
import { Dropdown } from 'react-bootstrap';


function PreviewExample() {
  const [files, setFiles] = React.useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const handleRemove = path => {
    setFiles(files.filter(file => file.path !== path));
  };

  return (
    <>
      <div {...getRootProps({ className: 'dropzone-area py-6' })}>
        <input {...getInputProps()} />
        <Flex justifyContent="center">
          <img src={cloudUpload} alt="" width={25} className="me-2" />
          <p className="fs-0 mb-0 text-700">Drop your images here</p>
        </Flex>
      </div>

      <div className="mt-3">
        {files.map(file => (
          <Flex
            alignItems="center"
            className="py-3 border-bottom btn-reveal-trigger"
            key={file.path}
          >
            <Image rounded width={40} height={40} src={file.preview} alt={file.path} />
            <Flex justifyContent="between" alignItems="center" className="ms-3 flex-1">
              <div>
                <h6>{file.path}</h6>
                <Flex className="position-relative" alignItems="center">
                  <p className="mb-0 fs--1 text-400 line-height-1">
                    <strong>
                      {getSize(file.size)}
                    </strong>
                  </p>
                </Flex>
              </div>
            </Flex>
            <CardDropdown>
              <div className="py-2">
                <Dropdown.Item className="text-danger" onClick={() => handleRemove(file.path)}>
                  Remove
                </Dropdown.Item>
              </div>
            </CardDropdown>
          </Flex>
        ))}
      </div>
    </>
  );
}`;

const FileUploader = () => (
  <>
    <PageHeader
      title="File Uploader"
      description="Falcon-React uses <strong>React Dropzone</strong> for file-uploader. <strong>React Dropzone</strong> provides a simple react hook to create a HTML5-compliant drag'n'drop zone for files."
      className="mb-3"
    >
      <Button
        href="https://react-dropzone.js.org/"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        React Dropzone Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false} />
      <FalconComponentCard.Body
        code={exampleCode}
        language="jsx"
        scope={{ useDropzone, Flex, cloudUpload }}
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Single File Upload" light={false} />
      <FalconComponentCard.Body
        code={singleFileCode}
        language="jsx"
        scope={{ useDropzone, Flex, cloudUpload }}
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Image Preview" light={false} />
      <FalconComponentCard.Body
        code={previewCode}
        language="jsx"
        scope={{ useDropzone, Flex, cloudUpload, CardDropdown, getSize }}
      />
    </FalconComponentCard>
  </>
);

export default FileUploader;
