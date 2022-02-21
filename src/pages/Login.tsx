import { Container, Typography, TextField, Box, Button, Icon } from '@mui/material';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
      <>
       <Container 
        component="main" 
        maxWidth="xs" 
        sx={{ 
          bgcolor: 'rgba(255,255,255,.7)', 
          borderRadius: 3
       }}>
          <Box
            sx={{
              marginTop: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ mt: 2, color: '#fff', fontWeight: '700'}} component="h1" variant="h5">
             <Icon 
              sx={{ 
                width: 45, 
                height: 45, 
                mt: '5px' 
              }} 
              component={AccessibilityNewRoundedIcon} 
              />
            </Typography>
          
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password" 
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                component="button"
                fullWidth
                variant="contained"
                color="inherit"
                sx={{ mt: 5, mb: 1, bgcolor: "#fff" }}
              >
                <Typography sx={{ color: '#777', fontWeight: '700' }}>Sign In</Typography>
              </Button>
              <Button
                component="button"
                fullWidth
                variant="contained"
                color="inherit"
                onClick={() => {
                  navigate('/register', {state:{id: '1', name:'junbeom'}});
                }}
                sx={{ mt: '5px', mb: 3, bgcolor: "#fff" }}
              >
                <Typography sx={{ color: '#777', fontWeight: '700' }}>Sign Up</Typography>
              </Button>
            </Box>
          </Box>
        </Container>
      </>
  )
}

export default Login;