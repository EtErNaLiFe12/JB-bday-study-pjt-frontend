import { Container, Typography, TextField, Box, Button } from '@mui/material';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { bdayApi } from 'src/api/api';
import { emailValidation } from 'src/components/emailValidation';

const Register = () => {
  const [open, setOpen] = useState(false);
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cfPassword, setCfPassword] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const emailAccept = emailValidation(email);

  const regiUser = async () => {
    if(!username || !email || !password || !cfPassword) { // 입력창에 미입력시
      return alert('Please enter a email or username or password(confirm password)');
    } else if (password !== cfPassword) { //입력 password와 confirm password값 비교
      return alert('Password and confirm password are not same!');
    } else if (!emailAccept) {
      alert('You have entered invalid email address.');
    } else {
      try {
        const response = await bdayApi.post('/user/signup', 
        {
          username: username,
          email: email,
          password: password,
        });
        console.log(response.status);
        if(response.status === 201) {
          setOpen(true);
        }
      } catch(e) {
        alert('Entered Username or Email address is already taken');
        console.log('error message', e);
      }
    }
  }

  const LinkStyle = styled(Link)(() => ({
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
    textAlign: 'center',
    transition: '.5s',
    '&:hover': {
      color: '#fff',
    },
  }));

  const ContainerStyle = styled(Container)(() => ({
    width: '80%',
    backgroundColor: '#fb5849',
    borderRadius: 5,
    marginTop: 20,
    transition: '.5s',
    '&:hover': {
      backgroundColor: '#333',
    },
  }));

  return (
    <>
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          width: '90%',
          bgcolor: 'rgba(255,255,255,.7)',
          borderRadius: 3,
        }}>
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Box sx={{ mt: 2, color: '#fff' }}>
            <AccessibilityNewRoundedIcon
              sx={{
                width: 65,
                height: 65,
                mt: '5px',
              }}
            />
          </Box>

          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => {setUserName(e.target.value)}}
              defaultValue=""
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => {setEmail(e.target.value)}}
              defaultValue=""
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {setPassword(e.target.value)}}
              defaultValue=""
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm_password"
              label="confirm_password"
              type="password"
              id="confirm_password"
              autoComplete="current-password"
              onChange={(e) => {setCfPassword(e.target.value)}}
              defaultValue=""
            />
            <Button
              component="button"
              fullWidth
              variant="contained"
              color="inherit"
              onClick={regiUser}
              sx={{ mt: '5px', mb: 3, bgcolor: '#fff' }}
            >
              <Typography sx={{ color: '#777', fontWeight: '700' }}>Sign Up</Typography>
            </Button>

            {/* 모달창 */}
            <Modal 
              disableEscapeKeyDown 
              hideBackdrop
              open={open} 
              onClose={handleClose}>
              <Container
                sx={{
                  width: '50%',
                  height: 'auto',
                  bgcolor: '#fff',
                  mt: 30,
                  borderRadius: 3,
                  padding: 2,
                }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <CheckCircleOutlineIcon sx={{ width: 40, height: 40, color: '#ff7979' }} />
                </Box>

                <Typography
                  align="center"
                  sx={{
                    fontSize: 20,
                    color: '#ff7979',
                    fontWeight: '700',
                    mt: 2,
                  }}>
                  Your Registration has been successful!
                </Typography>

                <ContainerStyle>
                  <LinkStyle to="/login">
                    <Typography variant="h6">Start to login</Typography>
                  </LinkStyle>
                </ContainerStyle>
              </Container>
            </Modal>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Register;