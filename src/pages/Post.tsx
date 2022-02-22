import { Container, Typography, TextField, Box, Button, Icon } from '@mui/material';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

const Post = () => {
  
  return (
    <Container 
      component="main" 
      maxWidth="xs" 
      sx={{ 
        bgcolor: 'rgba(255, 234, 167,1.0)', 
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
          component={AutoAwesomeMotionIcon} 
          />
        </Typography>
      
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Box>
            <TextField
              id="content"
              required
              label="Name"
              // value={value}
              autoFocus
              defaultValue=""
              sx={{
                mr: '5px',
                mb: '5px',
              }}
            />
             <TextField
              id="content"
              required
              label="Title"
              autoFocus
              defaultValue=""
            />
          </Box>
          <TextField
            id="outlined-multiline-static"
            required
            label="Content"
            multiline
            fullWidth
            rows={6}
            defaultValue=""
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
            <Typography sx={{ color: '#777', fontWeight: '700' }}>Submit</Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Post;



