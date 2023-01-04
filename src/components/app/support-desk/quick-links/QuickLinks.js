import React from 'react';
import Reports from './Reports';
import { Account, Team } from './Admin';

const QuickLinks = () => {
  return (
    <>
      <Reports />
      <Team />
      <Account />
    </>
  );
};

export default QuickLinks;
