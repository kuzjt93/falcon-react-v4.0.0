import React from 'react';
import ECommerceWidgets from './ECommerceWidgets';
import ErrorsWidgets from './Errors';
import Forms from './Forms';
import NumberStatsAndChart from './NumberStatsAndChart';
import OthersWidgets from './OthersWidgets';
import TableWidgets from './TableWidgets';
import UsersWidgets from './UsersWidgets';

const Widgets = () => {
  return (
    <>
      <NumberStatsAndChart />
      <TableWidgets />
      <ECommerceWidgets />
      <UsersWidgets />
      <ErrorsWidgets />
      <Forms />
      <OthersWidgets />
    </>
  );
};

export default Widgets;
