import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from './Home';
import { AddEditLogEntry } from './AddEditLogEntry';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    // element: Math.floor(Math.random() * 10) > 4 ? <Home /> : <AddEditLogEntry />,
  },
  {
    path: "/logentry",
    element: <AddEditLogEntry />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
