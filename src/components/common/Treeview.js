import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Collapse } from 'react-bootstrap';

const TreeviewListItem = ({
  item,
  openedItems,
  setOpenedItems,
  selectedItems,
  setSelectedItems,
  selection
}) => {
  const [open, setOpen] = useState(openedItems.indexOf(item.id) !== -1);
  const [children, setChildren] = useState([]);
  const [firstChildren, setFirstChildren] = useState([]);
  const [childrenOpen, setChildrenOpen] = useState(false);
  const checkRef = useRef();

  const getChildrens = item => {
    function flatInnter(item) {
      let flat = [];
      item.map(child => {
        if (child.children) {
          flat = [...flat, child.id, ...flatInnter(child.children)];
        } else {
          flat = [...flat, child.id];
        }
      });

      return flat;
    }
    if (item.children) {
      return flatInnter(item.children);
    } else {
      return [];
    }
  };

  const isChildrenOpen = () => {
    return openedItems.some(item => firstChildren.indexOf(item) !== -1);
  };

  const handleOnExiting = () => {
    setOpenedItems(openedItems.filter(openedItem => openedItem !== item.id));
  };
  const handleEntering = () => {
    setOpenedItems([...openedItems, item.id]);
  };

  const handleSingleCheckboxChange = e => {
    if (e.target.checked) {
      setSelectedItems([...selectedItems, item.id]);
    } else {
      setSelectedItems(
        selectedItems.filter(selectedItem => selectedItem !== item.id)
      );
    }
  };

  const handleParentCheckboxChange = e => {
    const filteredItems = selectedItems.filter(
      selectedItem => children.indexOf(selectedItem) === -1
    );
    if (e.target.checked) {
      setSelectedItems([...filteredItems, ...children]);
    } else {
      setSelectedItems(filteredItems);
    }
  };

  useEffect(() => {
    setChildren(getChildrens(item));
    if (item.children) {
      setFirstChildren(item.children.map(child => child.id));
    }
  }, []);

  useEffect(() => {
    setChildrenOpen(isChildrenOpen());
  }, [children, openedItems]);

  useEffect(() => {
    const childrenSelected = selectedItems.some(
      selectedItem => children.indexOf(selectedItem) !== -1
    );
    const allChildrenSelected = children.every(
      child => selectedItems.indexOf(child) !== -1
    );
    if (childrenSelected && checkRef.current) {
      checkRef.current.indeterminate = true;
    }
    if (!childrenSelected && checkRef.current) {
      checkRef.current.indeterminate = false;
    }
    if (allChildrenSelected && checkRef.current) {
      checkRef.current.indeterminate = false;
      checkRef.current.checked = true;
    }
    if (!allChildrenSelected && checkRef.current) {
      checkRef.current.checked = false;
    }
  }, [selectedItems, checkRef.current]);

  return (
    <li className="treeview-list-item">
      {Object.prototype.hasOwnProperty.call(item, 'children') ? (
        <>
          <div className="toggle-container">
            {selection && (
              <input
                type="checkbox"
                className="form-check-input"
                onChange={handleParentCheckboxChange}
                ref={checkRef}
              />
            )}
            <a
              className={classNames('collapse-toggle', {
                collapsed: open || item.expanded
              })}
              href="#!"
              onClick={() => setOpen(!open)}
            >
              <p
                className={classNames('treeview-text', { 'ms-2': !selection })}
              >
                {item.name}
              </p>
            </a>
          </div>
          <Collapse
            in={open}
            onExiting={handleOnExiting}
            onEntering={handleEntering}
          >
            <ul
              className={classNames('treeview-list', {
                'collapse-hidden': !open,
                'collapse-show treeview-border': open,
                'treeview-border-transparent': childrenOpen
              })}
            >
              {item.children.map((nestedItem, index) => (
                <TreeviewListItem
                  key={index}
                  item={nestedItem}
                  index={index}
                  openedItems={openedItems}
                  setOpenedItems={setOpenedItems}
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                  selection={selection}
                />
              ))}
            </ul>
          </Collapse>
        </>
      ) : (
        <div className="treeview-item">
          {selection && (
            <input
              type="checkbox"
              className="form-check-input"
              onChange={handleSingleCheckboxChange}
              checked={selectedItems.indexOf(item.id) !== -1}
            />
          )}
          <a href="#!" className="flex-1">
            <p className="treeview-text">
              <FontAwesomeIcon
                icon={item.icon}
                className={classNames('me-2', item.iconClass)}
              />
              {item.name}
            </p>
          </a>
        </div>
      )}
    </li>
  );
};

const Treeview = ({
  data,
  selection,
  expanded = [],
  selectedItems = [],
  setSelectedItems
}) => {
  const [openedItems, setOpenedItems] = useState(expanded);

  return (
    <ul className="treeview treeview-select">
      {data.map((treeviewItem, index) => (
        <TreeviewListItem
          key={index}
          item={treeviewItem}
          openedItems={openedItems}
          setOpenedItems={setOpenedItems}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          selection={selection}
        />
      ))}
    </ul>
  );
};

TreeviewListItem.propTypes = {
  item: PropTypes.object,
  openedItems: PropTypes.array,
  setOpenedItems: PropTypes.func,
  selectedItems: PropTypes.array,
  setSelectedItems: PropTypes.func,
  selection: PropTypes.bool
};

Treeview.propTypes = {
  data: PropTypes.array.isRequired,
  selection: PropTypes.bool, // If true selection is enabled.
  expanded: PropTypes.array, // Default expanded children ids.
  selectedItems: PropTypes.array, // Selected item ids..
  setSelectedItems: PropTypes.func // Setter to select items
};

export default Treeview;
