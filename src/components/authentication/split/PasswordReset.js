import React from 'react';
import PasswordResetForm from 'components/authentication/PasswordResetForm';
import bgImg from 'assets/img/generic/20.jpg';
import AuthSplitLayout from 'layouts/AuthSplitLayout';

const PasswordReset = () => {
  return (
    <AuthSplitLayout bgProps={{ image: bgImg }}>
      <div className="text-center">
        <h3>Reset password</h3>
      </div>
      <PasswordResetForm layout="split" hasLabel />
    </AuthSplitLayout>
  );
};

export default PasswordReset;
