import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography, Backdrop } from '@mui/material';
// layouts
import AuthLayout from '../../layouts/AuthLayout';
// components
import Page from '../../components/Page';
import { MHidden } from '../../components/@material-extend';
import { RegisterForm } from '../../components/authentication/register';
import AuthSocial from '../../components/authentication/AuthSocial';
import Panel from '../shared/Panel'
import { Close } from '@mui/icons-material';
import { SyntheticEvent, useState } from 'react';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }: { theme: any }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }: { theme: any }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
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
  const [visibility, setVisibility] = useState(false)
  const [open, setOpen] = useState(false)
  
  const handleClose = () => {
      setVisibility(!visibility ? true : false)
      setOpen(false)
  }
  const handleOpen = () => {
      setOpen(!open);
  }

  const click = (event: SyntheticEvent, visibility: boolean) => {
    event.preventDefault()
    visibility = !visibility ? true : false
    handleOpen()
    return visibility;
  }

  const navigate = useNavigate()

  return (
    <>
      <div>
          <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
              {/* Needed to close panel on click of the backdrop */}
              <div className={`opacity-0 w-screen h-screen fixed top-0 left-0`} onClick={handleClose}></div>
              <Panel visible={visibility} />
              <Close className={`absolute top-5 left-[285px] cursor-pointer text-black`} style={visibility ? {display: 'block'} : {display: 'none'}} onClick={handleClose} />
          </Backdrop>
          {/* <Panel visible={visibility} /> */}
      </div>

     <RootStyle title="Register | Shopaholic">
       <Container>
         <ContentStyle>
           <Box sx={{ mb: 5 }}>
             <Typography variant="h4" gutterBottom>
               Get started absolutely free.
             </Typography>
             <Typography sx={{ color: 'text.secondary' }}>
               Come on, We don't bite.
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
              <Link to="/login" component={RouterLink}>
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