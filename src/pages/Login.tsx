import { Container, Typography, TextField, Box, Button, Icon } from '@mui/material';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import { useNavigate } from "react-router-dom";
import { bdayApi } from 'src/api/api';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from 'src/context/provider/AuthProvider';
import { emailValidation } from 'src/components/emailValidation';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { logIn } = useContext(AuthContext);

  const emailAccept = emailValidation(email);

  const login = async () => {
    if(!email || !password) { // email 또는 password 미입력시
      alert('Please enter your email or password!');
    } else if (!emailAccept) { // email 형식이 안맞을시
      alert('You have entered invalid email address.');
    } else { // 통과시
        try {
          const resp = await bdayApi.post(`/auth/login`, 
          {
            email: email,
            password: password,
          });
          if(resp.status === 201) {
            logIn(resp.data.accessToken, resp.data.userId)
            navigate('/home');
          }
        } catch(e) {
          console.log('error message',e);
        }
    }
  }
  return (
      <>
       <Container 
        component="main" 
        maxWidth="xs" 
        sx={{ 
          width: '90%',
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
                onChange={(e) => {setEmail(e.target.value)}}
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
                onChange={(e) => {setPassword(e.target.value)}}
              />
              <Button
                component="button"
                fullWidth
                variant="contained"
                color="inherit"
                sx={{ mt: 5, mb: 1, bgcolor: "#fff" }}
                onClick={login}
              >
                <Typography sx={{ color: '#777', fontWeight: '700' }}>Sign In</Typography>
              </Button>
              <Button
                component="button"
                fullWidth
                variant="contained"
                color="inherit"
                onClick={() => {
                  navigate('/register');
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