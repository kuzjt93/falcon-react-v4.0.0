import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import SimpleBarReact from 'simplebar-react';

const exampleCode = `<Card>
  <SimpleBarReact style={{ maxHeight: '10rem' }}>
    <Card.Body>
      <h3>Scroll me!</h3>
      <p className="mb-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Assumenda beatae totam nihil quidem optio odio dolorum
        necessitatibus animi, incidunt consectetur voluptas impedit
        nesciunt alias delectus ex eius repellat ipsam aperiam
        laboriosam enim provident nisi molestias quibusdam. Ipsam ab,
        illo illum assumenda ex voluptas sit odit doloremque
        reprehenderit consequuntur facilis ipsa atque quo eius unde
        dicta! Laboriosam, suscipit, ex, expedita vitae ea maxime
        tenetur ut ipsum inventore dignissimos fugit quae. Odio fuga
        corporis maiores suscipit eos, hic numquam vero illum amet
        delectus eum minima optio id, tempore vitae dolores. Alias
        quibusdam aspernatur possimus? Eos cumque voluptatibus dolores
        aperiam veritatis voluptates consectetur quae quo nihil ratione
        laboriosam ut totam ab, recusandae, numquam impedit vel minus
        aliquam dignissimos fugiat ad incidunt iste expedita ea! Iusto,
        enim! Eos dolore ipsam recusandae ullam rem minima facilis,
        eligendi eaque? Reprehenderit, nostrum amet repudiandae,
        explicabo maxime modi magni illo, consequatur placeat natus ab
        at a enim fugiat!
      </p>
    </Card.Body>
  </SimpleBarReact>
  </Card>
`;

const Scrollbar = () => (
  <>
    <PageHeader
      title="Simplebar-React"
      description="Simplebar-React replace the browser's default scrollbar with a custom CSS-styled one without losing performances."
      className="mb-3"
    >
      <Button
        href="https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-react"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Simplebar-React Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false} />
      <FalconComponentCard.Body
        code={exampleCode}
        scope={{ SimpleBarReact }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default Scrollbar;
