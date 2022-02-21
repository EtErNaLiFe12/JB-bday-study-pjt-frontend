import { Container, Typography, TextField, Box, Button, Icon } from '@mui/material';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import { useState } from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

const Register = (props: any) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const LinkStyle = styled(Link)(() => ({
		textDecoration: 'none',
		color: '#fff',
		fontSize: '16px',
		textAlign: 'center',
		transition: ".5s",
		"&:hover": {
				color: "#fff",
		},
	}));

  const ContainerStyle = styled(Container)(() => ({
		width: '80%', 
    backgroundColor: '#fb5849', 
    borderRadius: 5, 
    marginTop: 20,
    transition: ".5s",
		"&:hover": {
        backgroundColor: '#333',
		},
	}))

    return (
        <>
           <Container 
            component="main" 
            maxWidth="sm" 
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
                width: 65, 
                height: 65, 
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
                label="Username"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
              />
							<TextField
                margin="normal"
                required
                fullWidth
                name="password" 
                label="confirm password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                component="button"
                fullWidth
                variant="contained"
                color="inherit"
								onClick={handleOpen}
                sx={{ mt: '5px', mb: 3, bgcolor: "#fff" }}
              >
                <Typography sx={{ color: '#777', fontWeight: '700' }}>Sign Up</Typography>
              </Button>

            {/* 모달창 */}
							<Modal open={open} onClose={handleClose}>
								<Container 
                  sx={{ 
                    width: '50%', 
                    height: 'auto', 
                    bgcolor: '#fff', 
                    mt: 30, 
                    borderRadius: 3, 
                    padding: 2 
                  }}>

                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Icon 
                      sx={{ width: 40, height: 40, color: '#ff7979'}} 
                      component={CheckCircleOutlineIcon}
                    />
                  </Box>

                  <Typography 
                    align="center" 
                    sx={{ 
                      fontSize: 20, 
                      color: '#ff7979', 
                      fontWeight: '700', 
                      mt: 2
                    }}>
                      Your Registration has been successful!
                  </Typography>

									<ContainerStyle>
										<LinkStyle to="/home">
											<Typography variant="h6">Start to Post</Typography>
										</LinkStyle>
									</ContainerStyle>

								</Container>
							</Modal>
            </Box>
          </Box>
        </Container>
        </>
    )
}

export default Register;