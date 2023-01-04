import React from 'react';
import ForgetPasswordForm from 'components/authentication/ForgetPasswordForm';
import bgImg from 'assets/img/generic/17.jpg';
import AuthSplitLayout from 'layouts/AuthSplitLayout';

const ForgetPassword = () => {
  return (
    <AuthSplitLayout
      bgProps={{ image: bgImg, position: '50% 76%', overlay: true }}
    >
      <div className="text-center">
        <h4 className="mb-0"> Forgot your password?</h4>
        <small>Enter your email and we'll send you a reset link.</small>
        <ForgetPasswordForm layout="split" />
      </div>
    </AuthSplitLayout>
  );
};

export default ForgetPassword;
