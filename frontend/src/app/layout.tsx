import NavBar from '../components/navBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div style={{ marginTop: '6vh' }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
