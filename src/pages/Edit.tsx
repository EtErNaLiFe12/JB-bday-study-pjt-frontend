import { Container, Typography, TextField, Box, Button, Icon, useMediaQuery } from '@mui/material';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import { useLocation } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';


interface inputType {
  name: string;
  title: string;
  desc: string;
  key: number;
}

const EditPage = () => {

  const breakPoint = useMediaQuery('(max-width:550px)');

  const location = useLocation();

  const state = location.state as inputType;

  return (
    <Container 
      component="main" 
      maxWidth="xs" 
      sx={{ 
        bgcolor: 'rgba(255, 234, 167,1)', 
        borderRadius: 3,
        width: '90%',
        paddingLeft: 3,
        paddingRight: 3,
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
          <EditIcon sx={{ width: 45, height: 45, mt: '5px'}}/>
        </Typography>
      
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Box>
            <TextField
              id="content"
              fullWidth= { breakPoint ? true : false }
              required
              label="Name"
              value={state.name}
              autoFocus
              sx={{
                mr: '5px',
                mb: '15px',
              }}
            />
             <TextField
              id="content"
              required
              fullWidth= { breakPoint ? true : false }
              label="Title"
              value={state.title}
              sx={{
                mb: '15px',
              }}
            />
          </Box>
          <TextField
            id="outlined-multiline-static"
            required
            label="Content"
            multiline
            fullWidth
            rows={6}
            value={state.desc}
          />
          <Button
            component="button"
            fullWidth
            variant="contained"
            color="inherit"
            sx={{ 
              mt: 3, 
              mb: 3, 
              bgcolor: "#fff" 
            }}>
            <Typography sx={{ color: '#777', fontWeight: '700' }}>Edit</Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default EditPage;


