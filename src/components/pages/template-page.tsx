import { Outlet } from 'react-router-dom';
import Header from '../header/header';

const TemplatePage = (): JSX.Element => {
  const authorizationStatus = true;
  return (
    <div className="wrapper">
      <Header authorizationStatus={authorizationStatus} />
      <Outlet />
    </div>
  );
};

export default TemplatePage;
