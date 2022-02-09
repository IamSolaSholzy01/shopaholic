// material
import { Stack, Button, Divider, Typography } from '@mui/material';
import { Google, Twitter } from '@mui/icons-material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

// ----------------------------------------------------------------------

export default function AuthSocial() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Google sx={{color: '#DB4437'}} />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <FacebookOutlinedIcon sx={{color: '#3B5998'}} />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Twitter sx={{color: '#00ACEE'}} />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}
