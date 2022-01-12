import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import authService from '../utils/services/auth.service';
import Login from './login';
import Sidebar from '../components/sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

  let [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    user = authService.getCurrentUser();
    if (!user) {
      setUser(false);
      router.push('login');
    } else {
      setUser(true);
    }
  }, []);

  const ComponentLogged = () => {
    return (
      <ChakraProvider>
        <Sidebar setUser={setUser}>
          <Component {...pageProps} />
        </Sidebar>
      </ChakraProvider>
    )
  }

  const NoLogged = () => {
    return (
      <ChakraProvider>
        <Login setUser={setUser} />
      </ChakraProvider>
    )
  }

  return (
    <>
      {user
        ? <ComponentLogged />
        : <NoLogged />
      }
    </>
  )
}

export default MyApp