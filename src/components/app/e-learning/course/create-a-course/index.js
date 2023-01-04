import { courseResourcesData } from 'data/elearning/createCourse';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import CourseCoverPhoto from './CourseCoverPhoto';
import CourseGoals from './CourseGoals';
import CourseInformationForm from './CourseInformationForm';
import CoursePreviewVideo from './CoursePreviewVideo';
import CoursePricing from './CoursePricing';
import CourseRequirements from './CourseRequirements';
import CourseResources from './CourseResources';
import CreateCourseHeader from './CreateCourseHeader';
import PublishCourse from './PublishCourse';
import ScheduleDiscountModal from './ScheduleDiscountModal';

const CreateCourse = () => {
  const [isOpenScheduleModal, setIsOpenScheduleModal] = useState(false);
  const defaultValues = {
    timeZone: 'GMT-12:00/Etc/GMT-12'
  };
  const submittedValues = {};
  const { register, handleSubmit, setValue, control, reset } = useForm({
    defaultValues
  });

  const onSubmit = data => {
    console.log(data);
    // ------- Get all object keys form data and set empty values to reset ------------
    const keys = Object.keys(data);
    for (const key of keys) {
      submittedValues[key] = '';
    }
    const allValues = { ...submittedValues, ...defaultValues };
    reset({ ...allValues });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-lg-3 font-sans-serif">
          <Col lg={8}>
            <CreateCourseHeader />
            <CourseInformationForm
              register={register}
              setValue={setValue}
              control={control}
            />
            <CourseResources data={courseResourcesData} />
            <CourseRequirements />
            <CourseGoals control={control} />
          </Col>
          <Col lg={4}>
            <div className="sticky-sidebar top-navbar-height d-flex flex-column">
              <PublishCourse />
              <CourseCoverPhoto />
              <CoursePreviewVideo register={register} />
              <CoursePricing
                register={register}
                isOpenScheduleModal={isOpenScheduleModal}
                setIsOpenScheduleModal={setIsOpenScheduleModal}
              />
            </div>
          </Col>
        </Row>
      </Form>
      {/* Modal */}
      <ScheduleDiscountModal
        isOpenScheduleModal={isOpenScheduleModal}
        setIsOpenScheduleModal={setIsOpenScheduleModal}
      />
    </>
  );
};

export default CreateCourse;
