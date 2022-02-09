// import { Outlet } from "react-router-dom";
// import { Header, Footer } from '../components/shared';

// const MainLayout = () => {
//   return (
//     <>
//       <Header />
//       <Outlet />
//       <Footer />
//     </>
//   )
// };

// export default MainLayout;

import { Link as RouterLink, Outlet, useNavigate } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Typography, Link, Button, Stack } from '@mui/material';
// components
import { MHidden } from '../components/@material-extend';
import Logo from '../components/Logo';
import { SyntheticEvent, useState } from 'react';
import { LoginTab } from '../components/LoginTab';

// // ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }: { theme: any }) => {

return ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(3, 5, 0, 7)
  }
})});

// ----------------------------------------------------------------------

export default function MainLayout() {
  const [visibility, setVisibility] = useState(false);
  const [open, setOpen] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
    
    const handleClose = () => {
        setVisibility(!visibility ? true : false)
        setOpen(false)
    }

    const navigate = useNavigate()

  const list: [
    {
      text: string,
      styleList: string,
      route: string,
      click: (event: SyntheticEvent) => void,
      variant: 'text' | 'contained' | 'outlined'
    },
    {
      text: string,
      styleList: string,
      route: string,
      click: (event: SyntheticEvent) => void,
      variant: 'text' | 'contained' | 'outlined'
    }
  ] = [
    {
      text: 'login',
      styleList: 'text-gray-500 hover:text-gray-900',
      route: '/login',
      click: (event: SyntheticEvent) => {
        event.preventDefault();
        setLoginVisible(true);
      },
      variant: 'text'
    },
    {
      text: 'register',
      route: '/register',
      styleList: 'ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700',
      click: (event: SyntheticEvent) => {
        event.preventDefault()
        navigate('/register')
      },
      variant: 'contained'
    }
  ]

  return (
    <LoginTab onClose={() => setLoginVisible(false)} visible={loginVisible}>
      <HeaderStyle>
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/">
          <Logo />
        </Link>
        <MHidden width="smDown">
        <Stack spacing={2} direction="row">
          {list.map((item, index) => (
            <Button key={index} variant={item.variant} onClick={(e) => {item.click(e)}}>{ item.text }</Button>
          ))}
        </Stack>
        </MHidden>
      </HeaderStyle>
      {/* <Outlet /> */}
    </LoginTab>
  );
}
