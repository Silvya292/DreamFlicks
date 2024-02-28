import NavBar from '../components/navBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: '4.5em' }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
