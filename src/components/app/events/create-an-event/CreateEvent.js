import React from 'react';
import EventDetails from './EventDetails';
import EventTicket from './EventTicket';
import EventSchedule from './EventSchedule';
import EventHeader from './EventHeader';
import EventUpload from './EventUpload';
import EventFooter from './EventFooter';
import { Col, Form, Row } from 'react-bootstrap';
import EventOtherInfo from './EventOtherInfo';
import EventBanner from './EventBanner';
import { useForm } from 'react-hook-form';
import EventCustomField from './EventCustomField';

const CreateEvent = () => {
  const defaultValues = {
    timeZone: 'GMT-12:00/Etc/GMT-12',
    selectType: '1',
    selectTopic: '1'
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="g-3">
        <Col xs={12}>
          <EventHeader />
        </Col>
        <Col xs={12}>
          <EventBanner />
        </Col>
        <Col lg={8}>
          <EventDetails register={register} setValue={setValue} />
          <EventTicket
            register={register}
            control={control}
            setValue={setValue}
          />
          <EventSchedule register={register} setValue={setValue} />
          <EventUpload register={register} setValue={setValue} />
          <EventCustomField
            register={register}
            control={control}
            setValue={setValue}
          />
        </Col>
        <Col lg={4}>
          <div className="sticky-sidebar">
            <EventOtherInfo register={register} control={control} />
          </div>
        </Col>
        <Col>
          <EventFooter />
        </Col>
      </Row>
    </Form>
  );
};

export default CreateEvent;
