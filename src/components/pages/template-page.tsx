import { Outlet } from 'react-router-dom';
import Header from '../header/header';

const TemplatePage = (): JSX.Element => {
  const authorizationStatus = true;
  return (
    <>
      <Header authorizationStatus={authorizationStatus} />
      <Outlet />
    </>
  );
};

export default TemplatePage;
