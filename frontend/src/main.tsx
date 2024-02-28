import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddList from './pages/addList';
import Layout from './app/layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddList />} />
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
