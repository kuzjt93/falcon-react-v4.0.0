import React from 'react';
import PropTypes from 'prop-types';
import WizardLayout from './WizardLayout';
import AuthWizardProvider from './AuthWizardProvider';

const Wizard = ({ variant, validation, progressBar }) => {
  return (
    <AuthWizardProvider>
      <WizardLayout
        variant={variant}
        validation={validation}
        progressBar={progressBar}
      />
    </AuthWizardProvider>
  );
};

Wizard.propTypes = {
  variant: PropTypes.oneOf(['pills']),
  validation: PropTypes.bool,
  progressBar: PropTypes.bool
};

export default Wizard;
