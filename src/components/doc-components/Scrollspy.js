import React, { useRef, useState } from 'react';
import { Col, Nav, Row, Button } from 'react-bootstrap';
import useScrollSpy from 'react-use-scrollspy';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';

const exampleCode = `function Scrollspy(){
  const [sections] = useState(['Home', 'Profile', 'Messages', 'Settings']);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -150
  });

  return (
        <Row>
          <Col sm="auto">
            <div className="sticky-top pt-sm-7 mb-3">
              <Nav className="flex-column" variant="pills">
                <Nav.Link href="#home" active={activeSection === 0}>
                  Home
                </Nav.Link>
                <Nav.Link href="#profile" active={activeSection === 1}>
                  Profile
                </Nav.Link>
                <Nav.Link href="#messages" active={activeSection === 2}>
                  Message
                </Nav.Link>
                <Nav.Link href="#settings" active={activeSection === 3}>
                  Settings
                </Nav.Link>
              </Nav>
            </div>
          </Col>

          <Col className="col-sm">
            {sections.map((section, index) => (
              <div
                key={section}
                ref={sectionRefs[index]}
                id={section.toLocaleLowerCase()}
              >
                <h3>{section}</h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  accusantium, alias autem beatae blanditiis corporis debitis
                  eligendi, enim error excepturi exercitationem odit porro quasi
                  reiciendis saepe sapiente veritatis? Aliquam assumenda beatae,
                  cumque delectus dolorem enim, eveniet facere fugit harum illum
                  iure magnam nemo neque nisi omnis, pariatur tenetur vel?
                  Accusantium aut cum deleniti dolor doloribus eum, molestiae
                  nulla officiis quasi. At cupiditate dolor explicabo id
                  nesciunt placeat unde voluptates. Asperiores cum doloremque
                  esse fugit labore quia reprehenderit similique. Architecto est
                  ipsum maiores odio perferendis quibusdam tempore velit?
                  Accusantium aliquid consequatur corporis dignissimos
                  distinctio eos eum fugiat impedit nam obcaecati officiis,
                  porro, quia quibusdam repellendus sapiente suscipit temporibus
                  ullam velit vitae voluptates? Aliquam consectetur consequatur
                  consequuntur deleniti dicta dolores ducimus, excepturi ipsam
                  iure molestias necessitatibus numquam optio quaerat quasi quo
                  repudiandae sed. Ad aliquam animi beatae culpa delectus esse
                  excepturi in incidunt ipsam iusto labore laboriosam minima,
                  nam, nemo nisi nobis, nulla praesentium provident quae quaerat
                  qui quia quibusdam quis quisquam quos repellendus sint
                  suscipit tempora vero vitae! Animi assumenda dolorum eaque,
                  explicabo laborum officia praesentium quia repudiandae.
                  Aliquam asperiores cupiditate deserunt nobis nostrum
                  reprehenderit voluptates? Dolorem doloremque ducimus magni,
                  maxime sint tenetur totam. Accusamus atque beatae consequatur
                  corporis, dignissimos dolore dolores dolorum earum error eum
                  eveniet, facere impedit incidunt minima molestias nemo non
                  nostrum placeat quasi qui ratione repudiandae suscipit tenetur
                  ullam vel velit voluptatibus. Accusantium alias assumenda
                  blanditiis consectetur cupiditate delectus dolor dolores
                  dolorum, ducimus eaque enim, error esse eum fugiat fugit id
                  ipsam ipsum laboriosam laudantium minus modi molestias
                  mollitia necessitatibus nihil odio officia praesentium quaerat
                  quis quisquam quos reiciendis tempora tempore ut velit vitae
                  voluptas voluptatem! Accusantium adipisci architecto assumenda
                  atque aut consectetur consequuntur cum, deserunt doloribus ea
                  excepturi exercitationem expedita explicabo facere fuga fugit
                  impedit iste iusto laboriosam molestiae nihil officiis
                  perferendis porro possimus provident quae quaerat qui
                  quibusdam quos reiciendis repellendus vel vero, voluptatem! Ab
                  amet aperiam assumenda aut error eveniet, id inventore
                  laudantium molestias mollitia natus neque nulla officiis,
                  porro quam quas quisquam repellendus repudiandae saepe
                  sapiente ut voluptas, voluptate. Ab ad alias, aliquam atque
                  consequatur culpa deserunt distinctio eius, enim est ex
                  exercitationem facere facilis itaque magni maiores modi nemo
                  neque perferendis placeat quam quas quia quis quod quos
                  reiciendis sequi sunt tempore vero vitae! Earum explicabo nam
                  quaerat quam quos sed voluptatem. Asperiores debitis dolorum,
                  eaque eligendi optio ullam velit? Aperiam beatae cumque earum
                  et explicabo maxime modi molestias odit, omnis placeat quasi
                  quibusdam, ratione sapiente vel voluptas? A, aliquid beatae
                  dolore eaque eos excepturi expedita facere facilis fugit ipsam
                  iure molestiae molestias natus necessitatibus, nesciunt nulla,
                  numquam obcaecati officia officiis pariatur quaerat quas
                  quisquam rerum sapiente veniam. A aperiam beatae distinctio et
                  illum laboriosam necessitatibus obcaecati porro sed vero.
                  Accusantium at aut consequatur corporis culpa cupiditate
                  delectus dolores eius eligendi, enim error esse est, et
                  excepturi fugit id ipsam ipsum itaque modi mollitia
                  necessitatibus neque non nulla obcaecati officia placeat qui
                  quia saepe sit temporibus totam ut voluptas voluptatibus? Ad
                  consectetur eos est illum laboriosam minus molestiae officia
                  placeat quas tenetur.
                </p>
              </div>
            ))}
          </Col>
        </Row>
  );
};`;

const Scrollspy = () => (
  <>
    <PageHeader
      title="Scrollspy"
      description="Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport."
      className="mb-3"
    >
      <Button
        href="https://github.com/Purii/react-use-scrollspy"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        React Scrollspy Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>
    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false} />
      <FalconComponentCard.Body
        code={exampleCode}
        scope={{ useScrollSpy }}
        language="jsx"
        hidePreview
      >
        <ScrollspyExample />
      </FalconComponentCard.Body>
    </FalconComponentCard>
  </>
);

export default Scrollspy;

function ScrollspyExample() {
  const [sections] = useState(['Home', 'Profile', 'Messages', 'Settings']);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -150
  });

  return (
    <Row>
      <Col sm="auto">
        <div className="sticky-top pt-sm-7 mb-3">
          <Nav className="flex-column" variant="pills">
            <Nav.Link href="#home" active={activeSection === 0}>
              Home
            </Nav.Link>
            <Nav.Link href="#profile" active={activeSection === 1}>
              Profile
            </Nav.Link>
            <Nav.Link href="#messages" active={activeSection === 2}>
              Message
            </Nav.Link>
            <Nav.Link href="#settings" active={activeSection === 3}>
              Settings
            </Nav.Link>
          </Nav>
        </div>
      </Col>

      <Col className="col-sm">
        {sections.map((section, index) => (
          <div
            key={section}
            ref={sectionRefs[index]}
            id={section.toLocaleLowerCase()}
          >
            <h3>{section}</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              accusantium, alias autem beatae blanditiis corporis debitis
              eligendi, enim error excepturi exercitationem odit porro quasi
              reiciendis saepe sapiente veritatis? Aliquam assumenda beatae,
              cumque delectus dolorem enim, eveniet facere fugit harum illum
              iure magnam nemo neque nisi omnis, pariatur tenetur vel?
              Accusantium aut cum deleniti dolor doloribus eum, molestiae nulla
              officiis quasi. At cupiditate dolor explicabo id nesciunt placeat
              unde voluptates. Asperiores cum doloremque esse fugit labore quia
              reprehenderit similique. Architecto est ipsum maiores odio
              perferendis quibusdam tempore velit? Accusantium aliquid
              consequatur corporis dignissimos distinctio eos eum fugiat impedit
              nam obcaecati officiis, porro, quia quibusdam repellendus sapiente
              suscipit temporibus ullam velit vitae voluptates? Aliquam
              consectetur consequatur consequuntur deleniti dicta dolores
              ducimus, excepturi ipsam iure molestias necessitatibus numquam
              optio quaerat quasi quo repudiandae sed. Ad aliquam animi beatae
              culpa delectus esse excepturi in incidunt ipsam iusto labore
              laboriosam minima, nam, nemo nisi nobis, nulla praesentium
              provident quae quaerat qui quia quibusdam quis quisquam quos
              repellendus sint suscipit tempora vero vitae! Animi assumenda
              dolorum eaque, explicabo laborum officia praesentium quia
              repudiandae. Aliquam asperiores cupiditate deserunt nobis nostrum
              reprehenderit voluptates? Dolorem doloremque ducimus magni, maxime
              sint tenetur totam. Accusamus atque beatae consequatur corporis,
              dignissimos dolore dolores dolorum earum error eum eveniet, facere
              impedit incidunt minima molestias nemo non nostrum placeat quasi
              qui ratione repudiandae suscipit tenetur ullam vel velit
              voluptatibus. Accusantium alias assumenda blanditiis consectetur
              cupiditate delectus dolor dolores dolorum, ducimus eaque enim,
              error esse eum fugiat fugit id ipsam ipsum laboriosam laudantium
              minus modi molestias mollitia necessitatibus nihil odio officia
              praesentium quaerat quis quisquam quos reiciendis tempora tempore
              ut velit vitae voluptas voluptatem! Accusantium adipisci
              architecto assumenda atque aut consectetur consequuntur cum,
              deserunt doloribus ea excepturi exercitationem expedita explicabo
              facere fuga fugit impedit iste iusto laboriosam molestiae nihil
              officiis perferendis porro possimus provident quae quaerat qui
              quibusdam quos reiciendis repellendus vel vero, voluptatem! Ab
              amet aperiam assumenda aut error eveniet, id inventore laudantium
              molestias mollitia natus neque nulla officiis, porro quam quas
              quisquam repellendus repudiandae saepe sapiente ut voluptas,
              voluptate. Ab ad alias, aliquam atque consequatur culpa deserunt
              distinctio eius, enim est ex exercitationem facere facilis itaque
              magni maiores modi nemo neque perferendis placeat quam quas quia
              quis quod quos reiciendis sequi sunt tempore vero vitae! Earum
              explicabo nam quaerat quam quos sed voluptatem. Asperiores debitis
              dolorum, eaque eligendi optio ullam velit? Aperiam beatae cumque
              earum et explicabo maxime modi molestias odit, omnis placeat quasi
              quibusdam, ratione sapiente vel voluptas? A, aliquid beatae dolore
              eaque eos excepturi expedita facere facilis fugit ipsam iure
              molestiae molestias natus necessitatibus, nesciunt nulla, numquam
              obcaecati officia officiis pariatur quaerat quas quisquam rerum
              sapiente veniam. A aperiam beatae distinctio et illum laboriosam
              necessitatibus obcaecati porro sed vero. Accusantium at aut
              consequatur corporis culpa cupiditate delectus dolores eius
              eligendi, enim error esse est, et excepturi fugit id ipsam ipsum
              itaque modi mollitia necessitatibus neque non nulla obcaecati
              officia placeat qui quia saepe sit temporibus totam ut voluptas
              voluptatibus? Ad consectetur eos est illum laboriosam minus
              molestiae officia placeat quas tenetur.
            </p>
          </div>
        ))}
      </Col>
    </Row>
  );
}
