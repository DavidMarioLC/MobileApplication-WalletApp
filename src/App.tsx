import { AuthProvider } from './context/AuthProvider';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/home'
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
