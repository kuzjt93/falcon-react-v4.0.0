import Flex from 'components/common/Flex';
import MultiSelect from 'components/common/MultiSelect';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';

const EventOtherInfo = ({ register, control }) => {
  const organizerOptions = [
    { value: '1', label: ' Massachusetts Institute of Technology' },
    { value: '2', label: 'University of Chicago' },
    { value: '3', label: 'GSAS Open Labs At Harvard' },
    { value: '4', label: 'California Institute of Technology' }
  ];
  const sponsorsOptions = [
    { value: '1', label: 'Microsoft Corporation' },
    { value: '2', label: 'Technext Limited' },
    { value: '3', label: ' Hewlett-Packard' }
  ];
  const tagOptions = [
    { value: '1', label: 'Concert' },
    { value: '2', label: 'New Year' },
    { value: '3', label: 'Party' }
  ];
  return (
    <Card>
      <Card.Header as="h5">Other Info</Card.Header>
      <Card.Body className="bg-light">
        <Form.Group className="mb-3">
          <Flex className="flex-between-center">
            <Form.Label>Organizer</Form.Label>
            <Button size="sm" variant="link" className="p-0">
              Add new
            </Button>
          </Flex>
          <Controller
            name="organizer"
            render={({ ref, field }) => (
              <MultiSelect
                {...field}
                ref={ref}
                closeMenuOnSelect={false}
                isMulti
                options={organizerOptions}
                placeholder="Select Organizer..."
              />
            )}
            control={control}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Flex className="flex-between-center">
            <Form.Label>Sponsors</Form.Label>
            <Button size="sm" className="p-0" variant="link">
              Add new
            </Button>
          </Flex>
          <Controller
            name="sponsors"
            render={({ ref, field }) => (
              <MultiSelect
                ref={ref}
                {...field}
                closeMenuOnSelect={false}
                isMulti
                options={sponsorsOptions}
                placeholder="Select sponsors..."
              />
            )}
            control={control}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Type</Form.Label>
          <Form.Select {...register(`selectType`)}>
            <option value="1">Select event type...</option>
            <option value="2">Class, Training, or Workshop</option>
            <option value="3">Concert or Performance</option>
            <option value="4">Conference</option>
            <option value="5">Convention</option>
            <option value="6">Dinner or Gala</option>
            <option value="7">Festival or Fair</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Topic</Form.Label>
          <Form.Select {...register(`selectTopic`)}>
            <option value="1">Select a topic</option>
            <option>Auto, Boat &amp; Air</option>
            <option>Business &amp; Professional</option>
            <option>Charity &amp; Causes</option>
            <option>Community &amp; Culture</option>
            <option>Family &amp; Education</option>
            <option>Fashion &amp; Beauty</option>
            <option>Film, Media &amp; Entertainment</option>
            <option>Food &amp; Drink</option>
            <option>Government &amp; Politics</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Flex alignItems="center" justifyContent="between">
            <Form.Label>Tags</Form.Label>
            <Button size="sm" variant="link" className="p-0">
              Add new
            </Button>
          </Flex>
          <Controller
            name="tags"
            render={({ field, ref }) => (
              <MultiSelect
                {...field}
                ref={ref}
                closeMenuOnSelect={false}
                isMulti
                options={tagOptions}
                placeholder="Select tags..."
              />
            )}
            control={control}
          />
        </Form.Group>

        <div className="border-dashed border-bottom my-3"></div>
        <h6>Listing Privacy </h6>

        <Form.Check className="mb-3" id="publicPage">
          <Form.Check.Input
            type="radio"
            value="publicPage"
            defaultChecked
            {...register(`privacy`)}
          />
          <Form.Check.Label className="mb-0 form-label fw-semi-bold">
            Public page:
          </Form.Check.Label>
          <div className="form-text mt-0">
            Discoverable by anyone on Falcon, our distribution partners, and
            search engines.
          </div>
        </Form.Check>
        <Form.Check className="mb-3" id="privatePage">
          <Form.Check.Input
            type="radio"
            value="privatePage"
            {...register(`privacy`)}
          />
          <Form.Check.Label className="mb-0 form-label fw-semi-bold">
            Private page:
          </Form.Check.Label>
          <div className="form-text mt-0">
            Accessible only by people you specify.
          </div>
        </Form.Check>
        <div className="border-dashed border-bottom my-3"></div>

        <h6>Remaining Tickets</h6>
        <Form.Check
          id="remainingTickets"
          type="checkbox"
          label="Show the number of remaining tickets."
          {...register(`remainingTickets`)}
        />
      </Card.Body>
    </Card>
  );
};
EventOtherInfo.propTypes = {
  register: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired
};

export default EventOtherInfo;
