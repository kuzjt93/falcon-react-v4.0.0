import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Image,
  OverlayTrigger,
  Table,
  Tooltip
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';
import CardDropdown from 'components/common/CardDropdown';

const CourseResources = ({ data }) => {
  return (
    <Card className="mb-3">
      <Card.Header as="h5">Create Resources</Card.Header>
      <Card.Body className="p-0">
        <div className="table-responsive scrollbar">
          <Table borderless className="fs--1 text-end mb-0">
            <tbody>
              {data.map((resource, index) => (
                <tr
                  key={resource.id}
                  className={`btn-reveal-trigger ${
                    index % 2 === 0 && 'bg-light'
                  }`}
                >
                  <td className="align-middle white-space-nowrap text-start">
                    <Flex
                      alignItems="center"
                      className="position-relative gap-3"
                    >
                      <Image
                        src={resource.image}
                        width={60}
                        className="rounded-1 border border-200"
                      />
                      <div>
                        <h5 className="fs-0 text-primary">
                          {resource.title}
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="courseResourceTooltip">
                                {resource.isFulfilled
                                  ? 'Requirement fulfilled'
                                  : "No. of Slide/Test doesn't fulfill requirement"}
                              </Tooltip>
                            }
                          >
                            <span className="ms-2 text-primary fs-0">
                              <FontAwesomeIcon
                                icon={
                                  resource.isFulfilled
                                    ? 'check-circle'
                                    : 'exclamation-circle'
                                }
                              />
                            </span>
                          </OverlayTrigger>
                        </h5>
                        <p className="fs--1 text-900 mb-0">
                          {resource.excerpt}
                        </p>
                      </div>
                    </Flex>
                  </td>
                  <td className="align-middle white-space-nowrap fs--1 text-700 text-start">
                    <p className="mb-1">
                      {resource.details.slides} Slide •{' '}
                      {resource.details.minutes} Minutes
                    </p>
                    <p className="mb-0">{resource.details.tests} Tests</p>
                  </td>
                  <td className="align-middle white-space-nowrap text-end">
                    <CardDropdown />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
      <Card.Footer className="text-center py-2">
        <Button variant="link" size="sm">
          <FontAwesomeIcon icon="plus" className="me-1 fs--2" />
          Add New Chaptar
        </Button>
      </Card.Footer>
    </Card>
  );
};

CourseResources.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CourseResources;
