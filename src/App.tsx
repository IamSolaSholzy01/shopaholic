import React, { Fragment, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
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
=======
import Layout from './Layout';
import Register from './components/Register';
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
>>>>>>> 8efecb1b98389318ae587fa062152799350a3088
}

export default App;
