import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const { logout } = useAuth();
  const navigation = useNavigate();
  return (
    <div>
      HOME
      <button
        onClick={() => {
          logout(() => {
            navigation('/login');
          });
        }}
      >
        Cerrar sessión
      </button>
    </div>
  );
};

export default Home;
