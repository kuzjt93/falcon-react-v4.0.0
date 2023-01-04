import React, { useContext, useEffect, useState } from 'react';
import {
  Card,
  Col,
  Form,
  OverlayTrigger,
  Row,
  Tooltip,
  Button,
  InputGroup
} from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import ProductList from './ProductList';
import ProductGrid from './ProductGrid';
import { ProductContext } from 'context/Context';
import CartModal from '../cart/CartModal';
import usePagination from 'hooks/usePagination';
import Flex from 'components/common/Flex';

const Products = () => {
  const {
    productsState: { products },
    productsDispatch
  } = useContext(ProductContext);

  const [sortBy, setSortBy] = useState('price');
  const [isAsc, setIsAsc] = useState(true);
  const [productPerPage, setProductPerPage] = useState(4);

  const { productLayout } = useParams();
  const layout = productLayout.split(/-/)[1];
  const isList = layout === 'list';
  const isGrid = layout === 'grid';

  const {
    paginationState: {
      data: paginatedProducts,
      totalItems,
      itemsPerPage,
      currentPage,
      canNextPage,
      canPreviousPage,
      paginationArray,
      from,
      to
    },
    nextPage,
    prevPage,
    goToPage,
    setItemsPerPage
  } = usePagination(products, productPerPage);

  useEffect(() => {
    productsDispatch({
      type: 'SORT_PRODUCT',
      payload: {
        sortBy,
        order: isAsc ? 'asc' : 'desc'
      }
    });
  }, [sortBy, isAsc]);
  const navigate = useNavigate();

  useEffect(() => {
    isList || isGrid || navigate('/errors/404');
  }, []);

  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <Row className="flex-between-center">
            <Col
              sm="auto"
              as={Flex}
              alignItems="center"
              className="mb-2 mb-sm-0"
            >
              <Form.Select
                size="sm"
                value={itemsPerPage}
                onChange={({ target }) => {
                  setItemsPerPage(target.value);
                  setProductPerPage(target.value);
                }}
                style={{ maxWidth: '4.875rem' }}
              >
                <option value={2}>2</option>
                <option value={4}>4</option>
                <option value={6}>6</option>
                <option value={totalItems}>All</option>
              </Form.Select>
              <h6 className="mb-0 ms-2">
                Showing {from}-{to} of {totalItems} Products
              </h6>
            </Col>
            <Col sm="auto">
              <Row className="gx-2 align-items-center">
                <Col xs="auto">
                  <Form as={Row} className="gx-2">
                    <Col xs="auto">
                      <small>Sort by:</small>
                    </Col>
                    <Col xs="auto">
                      <InputGroup size="sm">
                        <Form.Select
                          className="pe-5"
                          defaultValue="price"
                          onChange={({ target }) => setSortBy(target.value)}
                        >
                          <option value="price">Price</option>
                          <option value="rating">Rating</option>
                          <option value="review">Review</option>
                        </Form.Select>
                        <InputGroup.Text
                          as={Button}
                          variant="link"
                          className="border border-300 text-700"
                          onClick={() => setIsAsc(!isAsc)}
                        >
                          <FontAwesomeIcon
                            icon={isAsc ? 'sort-amount-up' : 'sort-amount-down'}
                          />
                        </InputGroup.Text>
                      </InputGroup>
                    </Col>
                  </Form>
                </Col>
                <Col xs="auto" className="pe-0">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>Product {isList ? 'Grid' : 'List'}</Tooltip>
                    }
                  >
                    <Link
                      to={`/e-commerce/product/product-${
                        isList ? 'grid' : 'list'
                      }`}
                      className="text-600 px-1"
                    >
                      <FontAwesomeIcon
                        icon={classNames({ th: isList, 'list-ul': isGrid })}
                      />
                    </Link>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Body
          className={classNames({
            'p-0 overflow-hidden': isList,
            'pb-0': isGrid
          })}
        >
          <Row
            className={classNames({
              'g-0': isList
            })}
          >
            {paginatedProducts.map((product, index) =>
              layout === 'list' ? (
                <ProductList product={product} key={product.id} index={index} />
              ) : (
                <ProductGrid
                  product={product}
                  key={product.id}
                  md={6}
                  lg={4}
                  index={index}
                />
              )
            )}
          </Row>
        </Card.Body>
        <Card.Footer
          className={classNames('d-flex justify-content-center', {
            'bg-light mt-n1': isGrid,
            'border-top': isList
          })}
        >
          <div>
            <OverlayTrigger placement="top" overlay={<Tooltip>Prev</Tooltip>}>
              <Button
                variant="falcon-default"
                size="sm"
                disabled={!canPreviousPage}
                onClick={prevPage}
                className="me-2"
                trigger="focus"
              >
                <FontAwesomeIcon icon="chevron-left" />
              </Button>
            </OverlayTrigger>
          </div>

          <ul className="pagination mb-0">
            {paginationArray.map(page => (
              <li
                key={page}
                className={classNames({ active: currentPage === page })}
              >
                <Button
                  size="sm"
                  variant="falcon-default"
                  className="page me-2"
                  onClick={() => goToPage(page)}
                >
                  {page}
                </Button>
              </li>
            ))}
          </ul>
          <div>
            <OverlayTrigger
              trigger="click"
              placement="top"
              overlay={<Tooltip id="button-tooltip-2">Next</Tooltip>}
            >
              <Button
                variant="falcon-default"
                size="sm"
                disabled={!canNextPage}
                onClick={nextPage}
                trigger="focus"
              >
                <FontAwesomeIcon icon="chevron-right" />
              </Button>
            </OverlayTrigger>
          </div>
        </Card.Footer>
      </Card>
      <CartModal />
    </>
  );
};

export default Products;
