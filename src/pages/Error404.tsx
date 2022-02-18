import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';


const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));


const Error404 = () => {
  
  return (
      <RootStyle>
        <Container>
          <Box sx={{ maxWidth: 500, margin: 'auto', textAlign: 'center' }}>
            <Typography color="#fb5849" variant="h3" paragraph>
              PAGE NOT FOUND!
            </Typography>
            <Typography sx={{ color: '#fff' }}>
              The page you were looking for could not be found. It might have
              been romoved, renamed, or did not exist.
            </Typography>
            <Typography sx={{ color: '#fff', mt: 1 }}>
              Please go back to home and try again.
            </Typography>
            <Button 
              sx={{ 
                mt: 2, 
                bgcolor: 'text.primary'
              }} 
              to="/" size="medium" 
              variant="contained" 
              component={RouterLink}
            >
              Go Back
            </Button>
          </Box>
        </Container>
      </RootStyle>
  );
}

export default Error404;
