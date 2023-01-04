import React from 'react';
import PageHeader from 'components/common/PageHeader';
import FalconComponentCard from 'components/common/FalconComponentCard';
import Background from 'components/common/Background';
import gallery2 from 'assets/img/gallery/2.jpg';
import beachMp4 from 'assets/video/beach.mp4';
import beachWebm from 'assets/video/beach.webm';
import beachImage from 'assets/video/beach.jpg';

const imageCode = `<div className="position-relative py-6 py-lg-8 light">
  <Background image={gallery2} overlay="1" className="rounded-soft" />
  <div className="position-relative text-center">
    <h4 className="text-white">Image Background</h4>
  </div>
</div>`;

const videoCode = `<div className="position-relative light">
  <Background video={[ beachMp4, beachWebm]} image={ beachImage } overlay="2" className="rounded-soft" />
  <div className="position-relative vh-75 d-flex flex-center">
    <h4 className="text-white">Video Background</h4>
  </div>
</div>`;

const Backgrounds = () => (
  <>
    <PageHeader
      title="Background"
      description="These modular elements can be readily used and customized in every layout across pages."
      className="mb-3"
    />

    <FalconComponentCard>
      <FalconComponentCard.Header title="Image Background" />
      <FalconComponentCard.Body
        code={imageCode}
        scope={{ Background, gallery2 }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Video Background" />
      <FalconComponentCard.Body
        code={videoCode}
        scope={{ Background, beachMp4, beachWebm, beachImage }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default Backgrounds;
