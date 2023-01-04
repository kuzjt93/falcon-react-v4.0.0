import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Dropdown, Image, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import student from 'assets/img/e-learning/avatar/student.png';
import CardDropdown from 'components/common/CardDropdown';
import SoftBadge from 'components/common/SoftBadge';

const StudentInfo = () => {
  return (
    <Card className="font-sans-serif">
      <Card.Body className="d-flex gap-3 flex-column flex-sm-row align-items-center">
        <Image
          fluid
          width={112}
          className="rounded-3"
          src={student}
          alt="student profile image"
        />
        <Table borderless className="fs--1 fw-medium mb-0">
          <tbody>
            <tr>
              <td className="p-1" style={{ width: '35%' }}>
                Last Online:
              </td>
              <td className="p-1 text-600">3 hours ago</td>
            </tr>
            <tr>
              <td className="p-1" style={{ width: '35%' }}>
                Joined:
              </td>
              <td className="p-1 text-600">2021/01/12 23:13</td>
            </tr>
            <tr>
              <td className="p-1" style={{ width: '35%' }}>
                Email:
              </td>
              <td className="p-1">
                <Link to="mailto:goodguy@nicemail.com" className="text-600">
                  goodguy@nicemail.com
                </Link>
                <SoftBadge
                  bg="success"
                  pill
                  className="d-none d-md-inline-block ms-2"
                >
                  Verified
                  <FontAwesomeIcon icon="check" className="ms-1" />
                </SoftBadge>
              </td>
            </tr>
            <tr>
              <td className="p-1" style={{ width: '35%' }}>
                Mobile No:
              </td>
              <td className="p-1">
                <Link to="tel:+01234567890" className="text-600">
                  +012-345-67890
                </Link>
                <SoftBadge
                  bg="primary"
                  pill
                  className="d-none d-md-inline-block ms-2"
                >
                  2-step verification
                  <FontAwesomeIcon icon="link" className="ms-1" />
                </SoftBadge>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="position-absolute top-0 end-0 m-3">
          <CardDropdown iconClassName="fs--1" drop="bottom">
            <div className="py-2">
              <Dropdown.Item href="#!">View profile</Dropdown.Item>
              <Dropdown.Item href="#!">Courses</Dropdown.Item>
              <Dropdown.Divider as="div" />
              <Dropdown.Item href="#!" className="text-danger">
                Logout
              </Dropdown.Item>
            </div>
          </CardDropdown>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StudentInfo;
