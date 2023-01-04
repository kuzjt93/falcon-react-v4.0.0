/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';
import { Form } from 'react-bootstrap';
import {
  useTable,
  useSortBy,
  usePagination,
  useRowSelect,
  useGlobalFilter
} from 'react-table';

export const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, className, ...rest }, ref) => {
    const defaultRef = React.useRef();

    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <Form.Check
        type="checkbox"
        className={classNames('form-check fs-0 mb-0', className)}
      >
        <Form.Check.Input type="checkbox" ref={resolvedRef} {...rest} />
      </Form.Check>
    );
  }
);

const AdvanceTableWrapper = ({
  children,
  columns,
  data,
  sortable,
  selection,
  selectionColumnWidth,
  pagination,
  perPage = 10
}) => {
  const {
    getTableProps,
    headers,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
    gotoPage,
    pageCount,
    state: { pageIndex, pageSize, selectedRowIds, globalFilter },
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      disableSortBy: !sortable,
      initialState: { pageSize: pagination ? perPage : data.length }
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      if (selection) {
        hooks.visibleColumns.push(columns => [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            ),
            headerProps: {
              style: {
                width: selectionColumnWidth
              }
            },
            cellProps: {
              style: {
                width: selectionColumnWidth
              }
            },
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            )
          },
          ...columns
        ]);
      }
    }
  );

  const recursiveMap = children => {
    return React.Children.map(children, child => {
      if (child.props?.children) {
        return React.cloneElement(child, {
          children: recursiveMap(child.props.children)
        });
      } else {
        if (child.props?.table) {
          return React.cloneElement(child, {
            ...child.props,
            getTableProps,
            headers,
            page,
            prepareRow,
            canPreviousPage,
            canNextPage,
            nextPage,
            previousPage,
            gotoPage,
            pageCount,
            pageIndex,
            selectedRowIds,
            pageSize,
            setPageSize,
            globalFilter,
            setGlobalFilter
          });
        } else {
          return child;
        }
      }
    });
  };

  return (
    // <>
    //   {React.Children.map(children, child => {
    //     if (child.props.table) {
    //       return React.cloneElement(child, {
    //         ...child.props,
    //         getTableProps,
    //         headers,
    //         page,
    //         prepareRow,
    //         canPreviousPage,
    //         canNextPage,
    //         nextPage,
    //         previousPage,
    //         gotoPage,
    //         pageCount,
    //         pageIndex,
    //         selectedRowIds,
    //         pageSize,
    //         setPageSize
    //       });
    //     } else {
    //       return child;
    //     }
    //   })}
    // </>
    <>{recursiveMap(children)}</>
  );
};

export default AdvanceTableWrapper;
