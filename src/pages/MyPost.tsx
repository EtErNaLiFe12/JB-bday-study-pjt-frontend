import { Container, Box, Typography, Icon, Button } from '@mui/material';
import PostIt from 'src/components/PostIt';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const MyPost = () => {
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
	}));

  return (
    <> 
      <Container>
        {/* board */}
        <Box 
          sx={{
            position: 'relative',
            height: 600,
            bgcolor: 'rgba(255,255,255,.9)',
            border: 20,
            boxSizing: 'border-box',
            borderColor: 'rgba(0,0,0,.3)',
            borderStyle: 'solid',
            mt: {xs: '70px', sm: '20px', md:'20px'},
            borderRadius: '40px'
        }}>

        {/* board title */}
          <Box 
            sx={{ 
              position: 'absolute', 
              width: 250, 
              height: 50, 
              bgcolor: 'rgba(0,0,0,.6)', 
              top: 20, 
              left: {xs: 15, sm: 15, md: '50%'}, 
              borderRadius: '25px',
              transform: {sm: 'translateX(0)', md:'translateX(-50%)'},
            }}>
            <Typography 
              variant='h5' 
              align='center'
              sx={{ 
                fontWeight: '800', 
                color: 'rgba(255, 234, 167,1)',
                lineHeight: '50px'
              }}>
              My sticky Posts
            </Typography>
          </Box>

        {/* Add post */}
          <Box 
            sx={{ 
              position: 'absolute', 
              width: 140, 
              height: 40, 
              bgcolor: 'rgba(0,0,0,.6)', 
              top: 20, 
              right: 30, 
              borderRadius: '20px',
          }}>
            <Button onClick={handleOpen} sx={{ display: 'flex', margin: 'auto' }}>
              <Icon sx={{color: 'rgba(255, 234, 167,1)'}} component={AddIcon}/>
              <Typography 
                variant='h6' 
                sx={{ 
                  fontSize: 18,
                  fontWeight: '700', 
                  color: 'rgba(255, 234, 167,1)',
                }}>
                  Add Post
                </Typography>
              </Button>
            </Box>

          {/* Post it */}
            <PostIt/>

          </Box>
        </Container>

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
      </>
  )
}

export default MyPost;