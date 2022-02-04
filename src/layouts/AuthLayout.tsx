// import PropTypes from 'prop-types';
import { useImage } from 'react-image';
import { Link as RouterLink, Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Typography, Link } from '@mui/material';
// components
import { MHidden } from '../components/@material-extend';
import Logo from '../components/Logo';
import { Suspense } from 'react';

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
    //padding: theme.spacing(7, 5, 0, 7)
  }
})});

// // ----------------------------------------------------------------------

// AuthLayout.propTypes = {
//   children: PropTypes.node
// };

export default function AuthLayout() {
  // return (
  //   <HeaderStyle className="flex flex-row relative">
  //     <Link to="/">
  //       <Suspense fallback="Logo">
  //           <MyLogoComponent />
  //       </Suspense>
  //     </Link>
  //     <div className="absolute top-1/2 -translate-y-1/2 right-2">
  //       <Typography
  //         variant="body2"
  //         sx={{
  //           //mt: { md: -2 }
  //         }}
  //       >
  //         Hmm
  //       </Typography>
  //       <Outlet />
  //     </div>
  //   </HeaderStyle>
  // );
  return (
    <>
      <HeaderStyle>
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/">
          <Logo />
        </Link>

        <MHidden width="smDown">
          <Typography
            variant="body2"
            sx={{
              mt: { md: -2 }
            }}
          >
            Already have an account? &nbsp;
            <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
              Login
            </Link>
          </Typography>
        </MHidden>
      </HeaderStyle>
      <Outlet />
    </>
  );
}
