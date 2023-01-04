import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Tab, Row, Col, Nav, Button } from 'react-bootstrap';
import FalconCardBody from './FalconCardBody';
import classNames from 'classnames';
import { HashLink } from 'react-router-hash-link';
import Flex from './Flex';
import { useLocation } from 'react-router-dom';
import { camelize } from '../../helpers/utils';
import AppContext from 'context/Context';

const PreviewCode = () => {
  return (
    <Row>
      <Col>
        <Nav variant="pills" className="nav-pills-falcon m-0">
          <Nav.Item>
            <Nav.Link as={Button} size="sm" eventKey="preview">
              Preview
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Button} size="sm" eventKey="code">
              Code
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  );
};

const FalconComponentCardHeader = ({
  light,
  className,
  title,
  children,
  noPreview
}) => {
  const location = useLocation();
  const {
    config: { isRTL }
  } = useContext(AppContext);
  return (
    <Card.Header className={classNames({ 'bg-light': light }, className)}>
      <Row className="align-items-end g-2">
        <Col>
          {title && (
            <Flex>
              <h5 className="mb-0 hover-actions-trigger" id={camelize(title)}>
                {isRTL ? (
                  <>
                    <HashLink
                      to={`${location.pathname}#${camelize(title)}`}
                      className="hover-actions ps-2"
                      style={{ top: 0, left: '-25px' }}
                    >
                      #
                    </HashLink>
                    {title}
                  </>
                ) : (
                  <>
                    {title}
                    <HashLink
                      to={`${location.pathname}#${camelize(title)}`}
                      className="hover-actions ps-2"
                      style={{ top: 0, right: '-25px' }}
                    >
                      #
                    </HashLink>
                  </>
                )}
              </h5>
            </Flex>
          )}
          {children}
        </Col>
        {!noPreview && (
          <Col xs={'auto'}>
            <PreviewCode />
          </Col>
        )}
      </Row>
    </Card.Header>
  );
};

const FalconComponentCard = ({
  children,
  multiSections,
  noGuttersBottom,
  ...rest
}) => {
  return (
    <Card className={classNames({ 'mb-3': !noGuttersBottom })} {...rest}>
      {multiSections ? (
        <>{children}</>
      ) : (
        <Tab.Container defaultActiveKey="preview">{children}</Tab.Container>
      )}
    </Card>
  );
};

FalconComponentCard.Header = FalconComponentCardHeader;
FalconComponentCard.Body = FalconCardBody;

FalconComponentCard.propTypes = {
  children: PropTypes.node,
  multiSections: PropTypes.bool,
  noGuttersBottom: PropTypes.bool
};

FalconComponentCardHeader.propTypes = {
  light: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  noPreview: PropTypes.bool
};

export default FalconComponentCard;
