import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';

const socials = [
  {
    title: 'Website',
    icon: 'globe',
    url: '#!'
  },
  {
    title: 'LinkedIn',
    icon: ['fab', 'linkedin'],
    url: '#!'
  },
  {
    title: 'Facebook',
    icon: ['fab', 'facebook'],
    url: '#!'
  },
  {
    title: 'Instagram',
    icon: ['fab', 'instagram'],
    url: '#!'
  },
  {
    title: 'Pinterest',
    icon: ['fab', 'pinterest'],
    url: '#!'
  }
];

const TrainerIntro = () => {
  return (
    <Card className="mb-3">
      <Card.Header className="bg-light">
        <h6 className="mb-0">Introduction</h6>
      </Card.Header>
      <Card.Body>
        <Row className="flex-between-center">
          <Col xxl={9} className="text-1000">
            <p>
              Milton Finger (born February 8, 1914), better known as Bill
              Finger, was an American comic strip, comic book, film, and
              television writer who co-created the DC Comics superhero character
              Batman (along with Bob Kane).
            </p>
            <p>
              A young, promising writer and part-time shoe dealer Finger, joined
              Kane's fledgling studio in 1938. Despite his significant (and
              often iconic) contributions as an imaginative writer, visionary
              mythos/world builder, and illustration creator, Finger was
              frequently reduced to ghostwriter status on a number of comics,
              including Batman and Green Lantern (Original Version).
            </p>
            <p>
              In 1994, Finger was welcomed into the Jack Kirby Hall of Fame, and
              in 1999, he was inducted into the Will Eisner Award Hall of Fame.
              In 1985, the company recognised Finger as one of the awardees in
              their 50th anniversary edition of Fifty Who Made DC Great. In
              2014, Finger was posthumously awarded The Inkpot Award.
            </p>
          </Col>
          <Col xxl={3}>
            <Flex justifyContent="center" className="mt-4 mt-xxl-0">
              <ul className="list-unstyled mb-0 d-flex flex-wrap flex-xxl-column gap-3 justify-content-center">
                {socials.map(({ url, icon, title }) => (
                  <li key={title}>
                    <Button
                      className="text-800 hover-primary fw-semi-bold font-base"
                      variant="link"
                      size="sm"
                      as={Link}
                      to={url}
                    >
                      <FontAwesomeIcon icon={icon} className="me-2" />
                      {title}
                    </Button>
                  </li>
                ))}
              </ul>
            </Flex>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TrainerIntro;
