/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { Button } from 'react-bootstrap';
import Flex from '../Flex';

export const AdvanceTablePagination = ({
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
  pageCount,
  pageIndex,
  gotoPage
}) => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Button
        size="sm"
        variant="falcon-default"
        onClick={() => previousPage()}
        className={classNames({ disabled: !canPreviousPage })}
      >
        <FontAwesomeIcon icon="chevron-left" />
      </Button>
      <ul className="pagination mb-0 mx-2">
        {Array.from(Array(pageCount).keys()).map((page, index) => (
          <li key={page} className={classNames({ active: pageIndex === page })}>
            <Button
              size="sm"
              variant="falcon-default"
              className={classNames('page', {
                'me-2': index + 1 !== pageCount
              })}
              onClick={() => gotoPage(page)}
            >
              {page + 1}
            </Button>
          </li>
        ))}
      </ul>
      <Button
        size="sm"
        variant="falcon-default"
        onClick={() => nextPage()}
        className={classNames({ disabled: !canNextPage })}
      >
        <FontAwesomeIcon icon="chevron-right" />
      </Button>
    </Flex>
  );
};

export default AdvanceTablePagination;
