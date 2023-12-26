import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {QueryClient, QueryClientProvider} from "react-query";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();
export const api = "http://localhost:5000"
root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
    <App />
          <ToastContainer />
      </QueryClientProvider>
  </React.StrictMode>
);