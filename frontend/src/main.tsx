import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './app/layout';
import AddList from './pages/addList';
import HomePage from './pages/homePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/user/id/lists" element={<AddList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
