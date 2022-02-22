import { Box, Typography, Container, Button } from "@mui/material";
import { MOCKDATA } from "src/common/MockData";
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
interface propsType {
  viewChg: boolean;
}

const PostIt = (props:propsType) => {
  const { viewChg } = props;
  const breakPoint = useMediaQuery('(max-width:679px)');
  const breakPoint2 = useMediaQuery('(max-width:550px)');
  const navigate = useNavigate();

  return (
      <>
        <Container 
          sx={{ 
            width: '100%',
            height: 430, 
            overflowY:'scroll', 
            overflowX: 'hidden', 
            mt: breakPoint2 ? 14 : 10,
          }}>
          {viewChg ? 
          (
            // list
            <>
             <Container maxWidth="md" >
              {MOCKDATA.map((md, idx) => (
                <Button
                  key={idx}
                  onClick={() => {
                    navigate('/postdetail', 
                      {state: 
                        { 
                          name : md.name, 
                          title: md.title, 
                          desc: md.description,
                        }});
                    // navigate('/postdetail', {state: { data: MOCKDATA }});
                  }}
                  sx={{
                    display: 'flex',
                    width: '100%',
                    height: 60,
                    bgcolor:'rgba(255, 234, 167,1)',
                    mt: '10px',
                    borderRadius: '10px'
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{                       
                      position: 'absolute',
                      left: 20,   
                      color: '#666', 
                      lineHeight: '50px',
                      fontWeight: '700',
                      textTransform: 'uppercase'
                    }}>
                      #{idx+1} {md.title}
                  </Typography>
                </Button>
               ))}
              </Container>
            </>
           
          ) : (
            // grid
              <Container maxWidth="md" sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: breakPoint ? 'center' : 'left'}}>
                  {MOCKDATA.map((md, idx) => (
                    <Button
                      key={idx}
                      onClick={() => {
                        navigate('/postdetail', 
                          {state: 
                            { 
                              name : md.name, 
                              title: md.title, 
                              desc: md.description,
                            }});
                        // navigate('/postdetail', {state: { data: MOCKDATA }});
                      }}
                      sx={{
                        width: 200,
                        height: 170,
                        bgcolor:'rgba(255, 234, 167,1.0)',
                        mt: 1,
                        ml: breakPoint2 ? 0 : '10px',
                      }}>
                      <Box>
                        <Typography align="center" variant="button" sx={{color: '#555', fontSize: 18, fontWeight: '700'}}>#{idx+1}-{md.title}</Typography>
                        {/* <Typography align="center" sx={{ width: '100%', height: 140}}>{md.description}</Typography> */}
                        <Typography  sx={{ mt: 12, fontSize: 14, color: '#555' }}>Made by {md.name}</Typography>
                      </Box>
                    </Button>
                  ))}
              </Container>
          )}
          
        </Container>
      </>
  )
}
export default PostIt;

