import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './app/layout';
import AddList from './pages/addList';
import HomePage from './pages/homePage';
import FilmInfo from './pages/filmInfo';
import SerieInfo from './pages/serieInfo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movie/:id" element={<FilmInfo />} />
          <Route path="/tv/:id" element={<SerieInfo />} />
          <Route path="/user/id/lists" element={<AddList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
