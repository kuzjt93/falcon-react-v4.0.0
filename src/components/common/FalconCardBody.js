import React from 'react';
import PropTypes from 'prop-types';
import * as ReactBootstrap from 'react-bootstrap';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';
import classNames from 'classnames';

const FalconCardBody = ({
  code,
  scope,
  language = 'jsx',
  hidePreview,
  children,
  noInline,
  noLight,
  className,
  childrenPosition
}) => {
  return (
    <ReactBootstrap.Card.Body
      className={classNames({ 'bg-light': !noLight, [className]: className })}
    >
      <LiveProvider
        {...defaultProps}
        theme={theme}
        language={language}
        scope={{ ...ReactBootstrap, ...React, PropTypes, ...scope }}
        code={code}
        disabled={hidePreview}
        noInline={noInline}
        transformCode={code => code.replace(/^import.*$/gm, '')}
      >
        <ReactBootstrap.Tab.Content>
          <ReactBootstrap.Tab.Pane eventKey="preview">
            {childrenPosition !== 'bottom' && children}
            {!hidePreview && <LivePreview />}
            {childrenPosition === 'bottom' && children}
          </ReactBootstrap.Tab.Pane>
          <ReactBootstrap.Tab.Pane eventKey="code">
            <LiveEditor dir="ltr" className="rounded" />
            {!hidePreview && <LiveError />}
          </ReactBootstrap.Tab.Pane>
        </ReactBootstrap.Tab.Content>
      </LiveProvider>
    </ReactBootstrap.Card.Body>
  );
};

FalconCardBody.propTypes = {
  code: PropTypes.string,
  scope: PropTypes.object,
  language: PropTypes.string,
  hidePreview: PropTypes.bool,
  children: PropTypes.node,
  noInline: PropTypes.bool,
  noLight: PropTypes.bool,
  className: PropTypes.string,
  childrenPosition: PropTypes.string
};

export default FalconCardBody;
