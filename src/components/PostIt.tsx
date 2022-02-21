import { Box, Typography, Container } from "@mui/material";
import { MOCKDATA } from "src/common/MockData";
import useMediaQuery from '@mui/material/useMediaQuery';

const PostIt = () => {

  const breakpoint = useMediaQuery('(max-width:679px)');

  return (
      <>
        <Container 
          sx={{ 
            width: '100%',
            height: 430, 
            overflowY:'scroll', 
            overflowX: 'hidden', 
            mt: 10
          }}>
          <Container sx={{ width: '90%', display: 'flex', flexWrap: 'wrap', justifyContent: breakpoint ? 'center' : 'left'}}>
            {MOCKDATA.map((md, idx) => (
              <Box 
                key={idx} 
                sx={{ 
                  width: 200, 
                  height: 200, 
                  bgcolor:'rgba(255, 234, 167,1.0)', 
                  mt: 2, 
                  ml: '10px',  
                  zIndex: '999', 
                  padding: '5px' 
                }}>
                <Typography variant="h6" sx={{color: '#fb5849'}}>#{idx+1}-{md.title}</Typography>
                <Typography sx={{ width: '100%', height: 140}}>{md.description}</Typography>
                <Typography>Made by {md.name}</Typography>
              </Box>
            ))}
          </Container>
        </Container>
      </>
  )
}
export default PostIt;

