import FalconCardHeader from 'components/common/FalconCardHeader';
import TooltipBadge from 'components/common/TooltipBadge';
import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    viewProfile: 'my-followers',
    tagSettings: 'group-members',
    showFollowers: true,
    showEmail: true,
    showExperience: false,
    numberVisibility: true,
    allowFollow: false
  });

  const handleChange = e => {
    if (e.target.type === 'checkbox') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Account Settings" />
      <Card.Body className="bg-light">
        <div>
          <h6 className="fw-bold">
            Who can see your profile ?
            <TooltipBadge
              tooltip="Only The group of selected people can see your profile"
              icon="question-circle"
            />
          </h6>
          <div className="ps-2 mb-2">
            <Form.Check
              type="radio"
              id="profile-everyone"
              label="Everyone"
              className="form-label-nogutter"
              value="everyone"
              name="viewProfile"
              onChange={handleChange}
              checked={formData.viewProfile === 'everyone'}
            />
            <Form.Check
              type="radio"
              id="profile-followers"
              label="My Followers"
              className="form-label-nogutter"
              value="my-followers"
              name="viewProfile"
              onChange={handleChange}
              checked={formData.viewProfile === 'my-followers'}
            />
            <Form.Check
              type="radio"
              id="profile-members"
              label="Only Me"
              className="form-label-nogutter"
              value="only-me"
              name="viewProfile"
              onChange={handleChange}
              checked={formData.viewProfile === 'only-me'}
            />
          </div>
        </div>

        <div>
          <h6 className="fw-bold">
            Who can tag you ?
            <TooltipBadge
              tooltip="Only The group of selected people can tag your"
              icon="question-circle"
            />
          </h6>
          <div className="ps-2">
            <Form.Check
              type="radio"
              id="tag-everyone"
              label="Everyone"
              className="form-label-nogutter"
              value="everyone"
              name="tagSettings"
              onChange={handleChange}
              checked={formData.tagSettings === 'everyone'}
            />
            <Form.Check
              type="radio"
              id="tag-members"
              label="Group Members"
              className="form-label-nogutter"
              value="group-members"
              name="tagSettings"
              onChange={handleChange}
              checked={formData.tagSettings === 'group-members'}
            />
          </div>
        </div>

        <div className="border-dashed border-bottom my-3" />

        <div className="ps-2">
          <Form.Check
            type="checkbox"
            id="show-followers"
            label="Allow users to show your followers"
            className="form-label-nogutter"
            name="showFollowers"
            onChange={handleChange}
            checked={formData.showFollowers}
          />
          <Form.Check
            type="checkbox"
            id="show-email"
            label="Allow users to show your email"
            className="form-label-nogutter"
            name="showEmail"
            onChange={handleChange}
            checked={formData.showEmail}
          />
          <Form.Check
            type="checkbox"
            id="show-experience"
            label="Allow users to show your experiences"
            className="form-label-nogutter"
            name="showExperience"
            onChange={handleChange}
            checked={formData.showExperience}
          />
        </div>

        <div className="border-dashed border-bottom my-3" />

        <div className="ps-2">
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Make your phone number visible"
            className="form-label-nogutter"
            name="numberVisibility"
            onChange={handleChange}
            checked={formData.numberVisibility}
          />
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Allow user to follow you"
            className="form-label-nogutter"
            name="allowFollow"
            onChange={handleChange}
            checked={formData.allowFollow}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default AccountSettings;
