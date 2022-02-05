import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography } from '@mui/material';
// components
import Page from '../Page';
import { MHidden } from '../@material-extend';
import { RegisterForm } from '../authentication/register';
import AuthSocial from '../authentication/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }: { theme: any }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const ContentStyle = styled('div')(({ theme }: { theme: any }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Register() {

  // const navigate = useNavigate()

  return (
    <>
     <RootStyle title="Register | Shopaholic">
       <Container>
         <ContentStyle>
           <Box sx={{ mb: 5 }}>
             <Typography variant="h4" gutterBottom>
               Get started absolutely free.
             </Typography>
             <Typography sx={{ color: 'text.secondary' }}>
               Don't worry, We don't bite.
             </Typography>
           </Box>

           <AuthSocial />

           <RegisterForm />

           <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
             By registering, I agree to Shopaholic&nbsp;
             <Link underline="always" sx={{ color: 'text.primary' }}>
               Terms of Service
             </Link>
             &nbsp;and&nbsp;
             <Link underline="always" sx={{ color: 'text.primary' }}>
               Privacy Policy
             </Link>
             .
           </Typography>

           <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?&nbsp;
              <Link to="/login" component={RouterLink}
                onClick={(e) => {console.log('link')}}
              >
                Login
              </Link>
            </Typography>
          </MHidden>
         </ContentStyle>
       </Container>
     </RootStyle>
    </>
  )
}