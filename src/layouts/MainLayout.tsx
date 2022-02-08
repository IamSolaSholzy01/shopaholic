import { Link as RouterLink, Outlet, useNavigate } from "react-router-dom";
import { styled, Link, Stack, Button } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { MHidden } from "../components/@material-extend";
import { LoginTab } from "../components/LoginTab";
import Logo from "../components/Logo";
import { buttonStyle } from '../components/styles';
// import { Header, Footer } from '../components/shared';

const HeaderStyle = styled('header')(({ theme }: { theme: any }) => {
  return ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(1),
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      padding: theme.spacing(3, 5, 0, 7)
    }
  })});

const MainLayout = () => {
  const [loginVisible, setLoginVisible] = useState(false);
  const navigate = useNavigate();

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
          <Stack direction="row" spacing="1">
            {list.map((item, index) => (
              <Button key={index} color='primary' variant={item.variant} onClick={(e) => {item.click(e)}} sx={buttonStyle}>
                {item.text}
              </Button>
            ))}
          </Stack>
        </MHidden>
      </HeaderStyle>
      <Outlet />
    </LoginTab>
  )
};

export default MainLayout;