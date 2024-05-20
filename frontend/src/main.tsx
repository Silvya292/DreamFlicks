import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './app/layout';
import AddList from './pages/showLists';
import HomePage from './pages/homePage';
import FilmInfo from './pages/filmInfo';
import SerieInfo from './pages/serieInfo';
import ListInfo from './pages/listInfo';
import SearchPage from './pages/search';
import { GoogleOAuthProvider } from '@react-oauth/google';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId={googleClientId}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="film/:id" element={<FilmInfo />} />
            <Route path="tv/:id" element={<SerieInfo />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="/list/:listId">
              <Route path="film/:id" element={<FilmInfo />} />
              <Route path="tv/:id" element={<SerieInfo />} />
            </Route>
            <Route path="/user/id/list" element={<AddList />} />
            <Route path="/user/id/list/:listId" element={<ListInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </GoogleOAuthProvider>
);
