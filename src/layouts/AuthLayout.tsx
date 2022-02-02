import PropTypes from 'prop-types';
import { useImage } from 'react-image';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
// components
import pic from '../components/Images/logo.webp';
//
import { MHidden } from '../components/@material-extend';
import { Suspense } from 'react';

// // ----------------------------------------------------------------------

const MyLogoComponent = () => {
  const { src } = useImage({
      srcList: pic,
  })
  const classList = 'w-1/3 md:w-32 lg:w-48'

  return <img src={src} alt="logo" className={classList} />
}

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

export default function AuthLayout({ children }: {children: any}) {
  return (
    <HeaderStyle className="flex flex-row relative">
      <RouterLink to="/">
        <Suspense fallback="Logo">
            <MyLogoComponent />
        </Suspense>
      </RouterLink>
      <div className="absolute top-1/2 -translate-y-1/2 right-2">
        <Typography
          variant="body2"
          sx={{
            //mt: { md: -2 }
          }}
        >
          {children}
        </Typography>
      </div>
    </HeaderStyle>
  );
}
