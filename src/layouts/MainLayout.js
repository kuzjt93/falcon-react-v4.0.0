import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AppContext from 'context/Context';
import classNames from 'classnames';
import NavbarTop from 'components/navbar/top/NavbarTop';
import NavbarVertical from 'components/navbar/vertical/NavbarVertical';
import Footer from 'components/footer/Footer';
import ProductProvider from 'components/app/e-commerce/ProductProvider';
import CourseProvider from 'components/app/e-learning/CourseProvider';

const MainLayout = () => {
  const { hash, pathname } = useLocation();
  const isKanban = pathname.includes('kanban');
  // const isChat = pathname.includes('chat');

  const {
    config: { isFluid, navbarPosition }
  } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    }, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={isFluid ? 'container-fluid' : 'container'}>
      {(navbarPosition === 'vertical' || navbarPosition === 'combo') && (
        <NavbarVertical />
      )}
      <ProductProvider>
        <CourseProvider>
          <div className={classNames('content', { 'pb-0': isKanban })}>
            <NavbarTop />
            {/*------ Main Routes ------*/}
            <Outlet />
            {!isKanban && <Footer />}
          </div>
        </CourseProvider>
      </ProductProvider>
    </div>
  );
};

export default MainLayout;
