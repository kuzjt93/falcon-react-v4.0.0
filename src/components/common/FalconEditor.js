import React from 'react';
import PropTypes from 'prop-types';
import * as reactBootstrap from 'react-bootstrap';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import classNames from 'classnames';

const FalconEditor = ({
  code,
  scope,
  language,
  hidePreview,
  theme = dracula,
  className
}) => {
  const importRegex =
    /import(?:["'\s]*([\w*{}\n, ]+)from\s*)["'\s]*([@\w/_-]+)["'\s]*;?/gm;
  const requireRegex =
    /(const|let|var)\s*([\w{}\n, ]+\s*)=\s*require\s*\(["'\s]*([@\w/_-]+)["'\s]*\s*\);?/gm;
  const imports = {
    CardDropdown: 'CardDropdown '
  };

  const transformCode = code => {
    return code
      .replace(importRegex, (match, p1, p2) => {
        const matchingImport = imports[p2];
        if (!matchingImport) {
          // leave it alone if we don't have a matching import
          return match;
        }

        return 'var ' + p1 + ' = ' + matchingImport + ';';
      })
      .replace(requireRegex, (match, p1, p2, p3) => {
        const matchingImport = imports[p3];
        if (!matchingImport) {
          // leave it alone if we don't have a matching import
          return match;
        }

        return p1 + ' ' + p2 + ' = ' + matchingImport + ';';
      });
  };

  return (
    <LiveProvider
      {...defaultProps}
      theme={theme}
      language={language}
      scope={{ ...reactBootstrap, ...React, PropTypes, ...scope }}
      code={code}
      disabled={hidePreview}
      transformCode={transformCode}
    >
      {!hidePreview && <LivePreview className="mb-3" />}
      <LiveEditor
        dir="ltr"
        className={classNames('rounded border-top border-bottom', {
          [className]: !!className
        })}
      />
      {!hidePreview && <LiveError />}
    </LiveProvider>
  );
};

FalconEditor.propTypes = {
  code: PropTypes.string.isRequired,
  scope: PropTypes.object,
  language: PropTypes.string,
  hidePreview: PropTypes.bool,
  theme: PropTypes.object,
  className: PropTypes.string
};

FalconEditor.defaultProps = {
  language: 'markup',
  hidePreview: false
};

export default FalconEditor;
