import { useEffect, useState } from 'react';

import getUser from '../../api/user/getUser.js';
import useToast from '../../context/ToastContext/useToast.js';

const Home = () => {
  const { showError } = useToast();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then(({ data }) => setUser(data))
      .catch((error) => showError(error.message));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Hello {user?.name}</h2>
    </div>
  );
};

export default Home;
