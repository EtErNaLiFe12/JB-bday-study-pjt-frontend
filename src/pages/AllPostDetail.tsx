import { Container, Typography, Box, Button, useMediaQuery } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
interface propsType {
  id: number;
  name: string;
  title: string;
  content: string;
  mng_no: number;
  nickname: string;
}

const AllPostDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as propsType;
  const breakPoint = useMediaQuery('(max-width:400px)');
  
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
              <Typography variant='h6' align='center' sx={{ mt: 2, mb: 2, fontWeight: '700', color: '#333' }}>#{state.mng_no}-{state.title}</Typography>
              <Typography align='center' sx={{ mb: 15, color: '#333' }}>{state.content}</Typography>
              <Typography align='center' sx={{ mt: 5, mb: 2, fontWeight: '700' }}>Created by {state.nickname}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
              <Box sx={{ mt: 2 }}>
                <Button
                  component="button"
                  variant="contained"
                  color="inherit"
                  onClick={() => {
                    navigate(-1);
                  }}
                  sx={{ mt: '5px', mb: 3, mr: 1, bgcolor: "#fff" }}
                >
                  {breakPoint ? (
                    <ArrowBackIcon/>
                  ) : ( 
                    <Typography sx={{ color: '#666', fontWeight: '700' }}>Go Back</Typography>
                  )}
                  
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </>
  )
}

export default AllPostDetail;

