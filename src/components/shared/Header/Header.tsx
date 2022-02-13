import { Link as RouterLink, useNavigate } from "react-router-dom";
import { styled, Link, Stack, Button } from "@mui/material";
import { MHidden } from "../../@material-extend";
import Logo from "../../Logo";
import { buttonStyle } from '../../styles';
import React, { SyntheticEvent } from "react";
import PersonIcon from "@mui/icons-material/Person";

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
  })
});

const Header = ({data}: {data: {
  setLoginVisible: React.Dispatch<React.SetStateAction<boolean>>,
  loginVisible: boolean,
  isLoggedIn: boolean,
  loginLogout: (event: SyntheticEvent) => void,
  openLoginPanel: (event: SyntheticEvent) => void,
  registerAuthModal: (event: SyntheticEvent) => void
}}) => {
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
          data.openLoginPanel(event);
        },
        variant: 'text'
    },
    {
        text: 'register',
        route: '/register',
        styleList: 'ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700',
        click: (event: SyntheticEvent) => {
          event.preventDefault();
          navigate('/register');
        },
        variant: 'contained'
    }
  ]

  const loginList: [
    {
        text: string,
        styleList: string,
        route: string,
        click: (event: SyntheticEvent) => void,
        variant: 'text' | 'contained' | 'outlined'
    },
    {
        text: any,
        styleList: string,
        route: string,
        click: (event: SyntheticEvent) => void,
        variant: 'text' | 'contained' | 'outlined'
    }
  ] = [
    {
        text: 'logout',
        styleList: 'text-white rounded-full',
        route: '/logout',
        click: (event: SyntheticEvent) => {
          event.preventDefault();
          data.loginLogout(event);
        },
        variant: 'contained'
    },
    {
        text: <PersonIcon />,
        route: '/profile',
        styleList: 'ml-8 inline-flex items-center justify-center px-1 py-2 border border-transparent rounded-full shadow-sm text-white',
        click: (event: SyntheticEvent) => {
          event.preventDefault();
          data.registerAuthModal(event);
        },
        variant: 'contained'
    }
  ]

  return (
    <HeaderStyle>
      <Link underline="none" variant="subtitle2" component={RouterLink} to="/">
        <Logo />
      </Link>
      <MHidden width="xsDown">
        <Stack direction="row" spacing={2}>
          {(data.isLoggedIn ? loginList : list).map((item, index) => (
            <Button key={index} color='secondary' variant={item.variant} onClick={(e) => {item.click(e)}} sx={buttonStyle} className={item.styleList}>
              {item.text}
            </Button>
          ))}
        </Stack>
      </MHidden>
    </HeaderStyle>
  )
};

export default Header;
