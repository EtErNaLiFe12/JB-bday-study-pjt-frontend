import { Container, Typography, TextField, Box, Button, Icon } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';

interface propsType {
  name: string;
  title: string;
  desc: string;
}

const PostDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as propsType;
  // const state = location.state as { data: string };
  console.log('datacheck',state.name);
  // const ls:LocationType  = state;
  
  return (
      <>
       <Container 
            component="main" 
            maxWidth="sm" 
            sx={{ 
            width: '90%',
            height: 450,
            bgcolor: 'rgba(255, 234, 167,1)', 
            borderRadius: 3,
        }}>
          <Box
            sx={{
              marginTop: 10,
            }}
          >
            <Box sx={{ color: '#fff' }}>
              <AccessibilityNewRoundedIcon 
                sx={{ 
                  width: 65, 
                  height: 65, 
                  display: 'flex',
                  margin: "auto",
                  pt: 2
                  
                }}/>
            </Box>
            <Box>
              <Typography variant='h5' align='center' sx={{ mt: 2, mb: 2, fontWeight: '700' }}>{state.title}</Typography>
              <Typography align='center' sx={{ mb: 15 }}>{state.desc}</Typography>
              <Typography align='center' sx={{ mt: 5, mb: 2, fontWeight: '700' }}>Made by {state.name}</Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Button
                component="button"
                variant="contained"
                color="inherit"
                onClick={() => {
                  navigate(-1);
                }}
                sx={{ display: 'flex', margin: 'auto', mt: '5px', mb: 3, bgcolor: "#fff" }}
              >
                <Typography sx={{ color: '#000', fontWeight: '700' }}>Go Back</Typography>
              </Button>
            </Box>
          </Box>
        </Container>
      </>
  )
}

export default PostDetail;

