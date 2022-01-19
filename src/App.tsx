import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Register from './components/Register';
import AdminApp from './pages/AdminApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminApp />} />
        <Route path="/" element={<Layout />}>
          <Route index element="{<Home />}" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
