import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import WizardInput from './WizardInput';
import FalconDropzone from 'components/common/FalconDropzone';
import avatarImg from 'assets/img/team/avatar.png';
import { isIterableArray } from 'helpers/utils';
import Avatar from 'components/common/Avatar';
import cloudUpload from 'assets/img/icons/cloud-upload.svg';
import { AuthWizardContext } from 'context/Context';
import Flex from 'components/common/Flex';
import { Col, Row } from 'react-bootstrap';

const PersonalForm = ({ register, errors, setValue }) => {
  const { user } = useContext(AuthWizardContext);
  const [avatar, setAvatar] = useState([
    ...(user.avater ? user.avater : []),
    { src: avatarImg }
  ]);

  return (
    <>
      <Row className="mb-3">
        <Col md="auto">
          <Avatar
            size="4xl"
            src={
              isIterableArray(avatar) ? avatar[0]?.base64 || avatar[0]?.src : ''
            }
          />
        </Col>
        <Col md>
          <FalconDropzone
            files={avatar}
            onChange={files => {
              setAvatar(files);
              setValue('avatar', files);
            }}
            multiple={false}
            accept="image/*"
            placeholder={
              <>
                <Flex justifyContent="center">
                  <img src={cloudUpload} alt="" width={25} className="me-2" />
                  <p className="fs-0 mb-0 text-700">
                    Upload your profile picture
                  </p>
                </Flex>
                <p className="mb-0 w-75 mx-auto text-400">
                  Upload a 300x300 jpg image with a maximum size of 400KB
                </p>
              </>
            }
          />
        </Col>
      </Row>

      <WizardInput
        type="select"
        label="Gender"
        name="gender"
        placeholder="Select your gender..."
        errors={errors}
        options={['Male', 'Female', 'Other']}
        formGroupProps={{
          className: 'mb-3'
        }}
        formControlProps={{
          ...register('gender')
        }}
      />

      <WizardInput
        type="number"
        label="Phone"
        name="phone"
        errors={errors}
        formGroupProps={{
          className: 'mb-3'
        }}
        formControlProps={{
          className: 'input-spin-none',
          ...register('phone')
        }}
      />

      <WizardInput
        type="date"
        label="Date of Birth"
        name="birthDate"
        errors={errors}
        setValue={setValue}
        formGroupProps={{
          className: 'mb-3'
        }}
        formControlProps={{
          placeholder: 'Date of Birth',
          ...register('birthDate')
        }}
      />

      <WizardInput
        type="textarea"
        label="Address"
        name="address"
        errors={errors}
        formGroupProps={{
          className: 'mb-3'
        }}
        formControlProps={{
          ...register('address')
        }}
      />
    </>
  );
};

PersonalForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  setValue: PropTypes.func.isRequired
};

export default PersonalForm;
