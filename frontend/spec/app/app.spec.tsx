import { render } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/jest-globals'

import App from '../../src/app/app';

describe('App Page', () => {
  it('should render app and show a button', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(document.querySelector('button')).toBeInTheDocument();
  });
});
