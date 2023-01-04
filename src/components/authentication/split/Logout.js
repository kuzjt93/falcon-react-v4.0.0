import React from 'react';
import LogoutContent from 'components/authentication/LogoutContent';
import bgImg from 'assets/img/generic/19.jpg';
import AuthSplitLayout from 'layouts/AuthSplitLayout';

const Logout = () => {
  return (
    <AuthSplitLayout bgProps={{ image: bgImg }}>
      <div className="text-center">
        <LogoutContent layout="split" titleTag="h3" />
      </div>
    </AuthSplitLayout>
  );
};

export default Logout;
