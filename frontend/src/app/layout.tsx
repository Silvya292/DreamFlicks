import NavBar from '../components/navBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: '3.4em' }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
