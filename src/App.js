import {Routes, Route} from 'react-router-dom';

import Layout from './components/Layout';
import Users from './pages/Users';
import Albums from './pages/Albums';
import Photos from './pages/Photos';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Users />} />
            <Route path='/:id' element={<Albums />} />
            <Route path='/albums/:id' element={<Photos />} />
            <Route path='*' element={<NotFoundPage />} />
        </Route>
    </Routes>
  );
}
export default App;
