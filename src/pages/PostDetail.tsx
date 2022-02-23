import { Container, Typography, TextField, Box, Button, Icon, useMediaQuery } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
interface propsType {
  name: string;
  title: string;
  desc: string;
  key: number;
}

const PostDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as propsType;
  const breakPoint = useMediaQuery('(max-width:400px)');
  // const state = location.state as { data: string };
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
              <Box sx={{ mt: 2 }}>
                <Button
                  component="button"
                  variant="contained"
                  color="inherit"
                  onClick={() => {
                    navigate('/edit', { state: {
                      name : state.name,
                      title: state.title,
                      desc: state.desc,
                      key: state.key,
                    }});

                  }}
                  sx={{ mt: '5px', mb: 3, mr: 1, bgcolor: "#fff" }}
                >
                  {breakPoint ? (
                    <EditIcon/>
                  ) : (
                    <Typography sx={{ color: '#666', fontWeight: '700' }}>Edit</Typography>
                  )}
                </Button>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Button
                  component="button"
                  variant="contained"
                  color="inherit"
                  onClick={() => {
                    // navigate(-1);
                    console.log('삭제 되었습니다.');
                  }}
                  sx={{ display: 'flex', margin: 'auto', mt: '5px', mb: 3, bgcolor: "#fff" }}
                >
                  {breakPoint ? (
                    <DeleteIcon/>
                  ) : (
                    <Typography sx={{ color: '#666', fontWeight: '700' }}>Delete</Typography>
                  )}
                  
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </>
  )
}

export default PostDetail;

