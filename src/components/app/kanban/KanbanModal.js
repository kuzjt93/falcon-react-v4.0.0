import React, { useContext } from 'react';
import { CloseButton, Col, Modal, Row, Dropdown } from 'react-bootstrap';
import Background from 'components/common/Background';
import { Link } from 'react-router-dom';
import ModalMediaContent from './ModalMediaContent';
import GroupMember from './GroupMember';
import { members } from 'data/kanban';
import ModalLabelContent from './ModalLabelContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalAttachmentContent from './ModalAttachmentContent';
import ModalCommentContent from './ModalCommentContent';
import ModalActivityContent from './ModalActivityContent';
import AppContext, { KanbanContext } from 'context/Context';
import ModalSidebar from './ModalSidebar';

const KanbanModal = () => {
  const {
    kanbanState: { kanbanModal },
    kanbanDispatch
  } = useContext(KanbanContext);
  const {
    config: { isRTL }
  } = useContext(AppContext);

  const handleClose = () => {
    kanbanDispatch({ type: 'TOGGLE_KANBAN_MODAL' });
  };

  return (
    <Modal
      show={kanbanModal.show}
      size="lg"
      onHide={handleClose}
      contentClassName="border-0"
      dialogClassName="mt-6"
    >
      {kanbanModal.modalContent.image && (
        <div className="position-relative overflow-hidden py-8">
          <Background
            image={kanbanModal.modalContent.image.url}
            className="rounded-top-lg"
          />
        </div>
      )}
      <div className="position-absolute top-0 end-0 mt-3 me-3 z-index-1">
        <CloseButton
          onClick={handleClose}
          className="btn btn-sm btn-circle d-flex flex-center transition-base"
        />
      </div>
      <Modal.Body className="p-0">
        <div className="bg-light rounded-top-lg px-4 py-3">
          <h4 className="mb-1">Add a new illustration to the landing page</h4>
          <p className="fs--2 mb-0">
            Added by{' '}
            <Link to="#!" className="text-600 fw-semi-bold">
              Antony
            </Link>
          </p>
        </div>
        <div className="p-4">
          <Row>
            <Col lg={9}>
              <ModalMediaContent title="Reviewers" icon="user">
                <GroupMember
                  users={members}
                  addMember
                  showMember={6}
                  avatarSize="xl"
                />
              </ModalMediaContent>

              <ModalMediaContent title="Labels" icon="tag">
                <ModalLabelContent />
              </ModalMediaContent>

              <ModalMediaContent title="Description" icon="align-left">
                <p className="text-word-break fs--1">
                  The illustration must match to the contrast of the theme. The
                  illustraion must described the concept of the design. To know
                  more about the theme visit the page.{' '}
                  <Link to="/" target="_blank" rel="noopener noreferrer">
                    https://falconreact.prium.me/
                  </Link>
                </p>
              </ModalMediaContent>

              <ModalMediaContent
                title="Attachments"
                icon="paperclip"
                headingClass="d-flex justify-content-between"
                headingContent={
                  <Dropdown drop={isRTL ? 'start' : 'end'}>
                    <Dropdown.Toggle
                      variant="falcon-default"
                      size="sm"
                      className="dropdown-caret-none fs--2"
                    >
                      <FontAwesomeIcon icon="plus" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Computer</Dropdown.Item>
                      <Dropdown.Item>Google Drive</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>Attach Link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                }
              >
                <ModalAttachmentContent />
              </ModalMediaContent>

              <ModalMediaContent
                title="Comments"
                icon={['far', 'comment']}
                headingClass="mb-3"
              >
                <ModalCommentContent />
              </ModalMediaContent>

              <ModalMediaContent
                title="Activity"
                icon="list-ul"
                headingClass="mb-3"
                isHr={false}
              >
                <ModalActivityContent />
              </ModalMediaContent>
            </Col>
            <Col lg={3}>
              <ModalSidebar />
            </Col>
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default KanbanModal;
