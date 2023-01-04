import React from 'react';
import DistributionOfPerformance from './distribution-of-performance/DistributionOfPerformance';
import Greetings from './greetings/Greetings';
import IndepthHelpDesk from './IndepthHelpDesk';
import ReceivedTickets from './received-tickets/ReceivedTickets';
import SatisfactionSurvey from './satisfaction-survey/SatisfactionSurvey';
import SurveyResult from './SurveyResult';
import TicketVolume from './ticket-volume/TicketVolume';
import TopCustomers from './top-customers/TopCustomers';

const Reports = () => {
  return (
    <>
      <Greetings />
      <IndepthHelpDesk />
      <DistributionOfPerformance />
      <SurveyResult />
      <SatisfactionSurvey />
      <TopCustomers />
      <ReceivedTickets />
      <TicketVolume />
    </>
  );
};

export default Reports;
