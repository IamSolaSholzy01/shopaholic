import React, { Fragment, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Routes from './routes';

function App() {
  const [ loggedIn, setLoggedIn ] = useState(0);
  return <Routes />;
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<MainLayout />}>
  //         <Route index element={<Home />} />
  //       </Route>
  //       <Route path="/auth/register" element="{<Register />}" />
  //     </Routes>
  //   </Router>
  // );
}

export default App;
