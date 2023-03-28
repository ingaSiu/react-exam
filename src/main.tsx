import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from './context/UserContext';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>

        <Toaster position="bottom-left" />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);

