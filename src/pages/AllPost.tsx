import { useState } from 'react';
import PostIt from 'src/components/PostIt';

import { Container, Typography, Box, Button } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import useMediaQuery from '@mui/material/useMediaQuery';

const AllPost = () => {
  const breakPoint2 = useMediaQuery('(max-width:550px)');
  const breakPoint3 = useMediaQuery('(max-width:900px)');
  const [viewChange, setViewChange] = useState(false);
 
  return (
    <> 
      <Container >
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
              width: breakPoint2 ? 200 : 250, 
              height: 50, 
              bgcolor: 'rgba(0,0,0,.6)', 
              top: 20, 
              left: '50%', 
              borderRadius: '25px',
              transform: 'translateX(-50%)',
            }}>
            <Typography 
              variant= { breakPoint2 ? 'h6' : 'h5' }
              align='center'
              sx={{ 
                fontWeight: '800', 
                color: 'rgba(255, 234, 167,1)',
                lineHeight: '50px'
              }}>
              All Sticky Posts
            </Typography>
          </Box>
    
            {!breakPoint3 && 
              (<Box sx={{ position: 'absolute', top: 20, left: 20}}>
                <Button
                  size='medium'
                  sx={{color: 'rgba(255, 234, 167,1)', bgcolor: '#666', mr: 1, padding: 1, minWidth: 0}} 
                  onClick={() => {
                    setViewChange(false);
                }}>
                  <ViewComfyIcon/>
                </Button>
                <Button 
                  size='medium'
                  sx={{color: 'rgba(255, 234, 167,1)', bgcolor: '#666', padding: 1, minWidth: 0}} 
                  onClick={() => {
                    setViewChange(true);
                }}>
                  <ViewListIcon/>
                </Button>
              </Box>)
            }

          {/* Post it */}
            <PostIt viewChg={viewChange}/>
          </Box>
        </Container>
      </>
  )
}

export default AllPost;