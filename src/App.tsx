import React, { Fragment, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';

import Routes from './routes';
import ThemeConfig from './theme';

function App() {
  return (
    <ThemeConfig>
      <Routes />
    </ThemeConfig>
  );
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<Home />} />
  //       </Route>
  //       <Route path="/register" element={<Register />} />
  //     </Routes>
  //   </Router>
  // );
}

export default App;
