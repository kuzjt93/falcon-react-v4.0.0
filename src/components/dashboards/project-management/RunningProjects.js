import React from 'react';
import PropTypes from 'prop-types';
import { Card, ProgressBar } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import Avatar, { AvatarGroup } from 'components/common/Avatar';
import { Link } from 'react-router-dom';
import FalconCardFooterLink from 'components/common/FalconCardFooterLink';
import FalconCardHeader from 'components/common/FalconCardHeader';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';

const columns = [
  {
    accessor: 'title',
    Header: 'Projects',
    Cell: rowData => {
      const { avatar, color, title, projectName } = rowData.row.original;
      return (
        <Flex alignItems="center" className="position-relative">
          <Avatar
            name={avatar.name}
            width="60"
            alt=""
            mediaClass={`text-${color} bg-soft-${color} fs-0`}
          />
          <div className="flex-1 ms-3">
            <h6 className="mb-0 fw-semi-bold">
              <Link className="text-dark stretched-link" to="#!">
                {title}
              </Link>
            </h6>
            <p className="fs--2 mb-0 text-500">{projectName}</p>
          </div>
        </Flex>
      );
    }
  },
  {
    accessor: 'progress',
    Header: 'Worked',
    headerProps: {
      className: 'text-center'
    },
    cellProps: {
      className: 'text-center'
    },
    Cell: rowData => (
      <ProgressBar
        now={rowData.row.original.progress}
        style={{ height: 5 }}
        className="rounded-pill align-middle"
        variant="progress-gradient"
      />
    )
  },
  {
    accessor: 'duration',
    Header: 'Progress',
    cellProps: {
      className: 'text-center fw-semi-bold fs--1'
    },
    headerProps: {
      className: 'text-center'
    }
  },
  {
    accessor: 'date',
    Header: 'Due Date',
    cellProps: {
      className: 'text-center fw-semi-bold fs--1'
    },
    headerProps: {
      className: 'text-center'
    }
  },
  {
    accessor: 'members',
    Header: 'Members',
    disableSortBy: true,
    headerProps: {
      className: 'text-end'
    },
    Cell: rowData => {
      return (
        <AvatarGroup className="justify-content-end">
          {rowData.row.original.members.map(({ img, name, id }) => {
            return (
              <Avatar
                src={img && img}
                key={id}
                name={name && name}
                isExact
                className="border border-3 rounded-circle border-light"
              />
            );
          })}
        </AvatarGroup>
      );
    }
  }
];

const RunningProjects = ({ data }) => {
  return (
    <AdvanceTableWrapper
      columns={columns}
      data={data}
      sortable
      pagination
      perPage={10}
    >
      <Card className="h-100">
        <FalconCardHeader title="Running Projects" titleTag="h6" />
        <Card.Body className="p-0">
          <AdvanceTable
            table
            headerClassName="bg-light text-800 text-nowrap align-middle"
            rowClassName="align-middle white-space-nowrap"
            tableProps={{
              borderless: true,
              className: 'fs--2 mb-0 overflow-hidden'
            }}
          />
        </Card.Body>
        <FalconCardFooterLink title="Show all projects" size="sm" />
      </Card>
    </AdvanceTableWrapper>
  );
};

RunningProjects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
      duration: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      avatar: PropTypes.shape({
        name: PropTypes.string.isRequired,
        size: PropTypes.string
      }),
      projectName: PropTypes.string.isRequired,
      members: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          img: PropTypes.string,
          size: PropTypes.string
        })
      ),
      date: PropTypes.string.isRequired,
      isLast: PropTypes.bool
    })
  )
};

export default RunningProjects;
