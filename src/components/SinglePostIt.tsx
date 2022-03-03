import { Box, Typography, Container, Button, styled } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { bdayApi, allPostApi } from 'src/api/api';
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
interface propsType {
  viewChg: boolean;
}
interface singleDataType {
  id: string;
  username: string;
  email: string;
  reg_dt: string;
  posts: [
    {
      id: string;
      title: string;
      content: string;
      crt_dt: Date;
      mod_dt: Date;
      mng_no: number;
      postId: string;
      nickname: string;
    } 
  ];
}

const GridBtnStyle = styled(Button)(() => ({
  width: 200,
  height: 170,
  transition: '.5s',

  "&:hover": {
    width: 205,
    height: 175,
    backgroundColor: '#ffcccc',
  },
}))

const ListBtnStyle = styled(Button)(() => ({
  transition: '.5s',
  
  "&:hover": { 
    backgroundColor: '#ffcccc',
  },
}))

const SinglePostIt = (props:propsType) => {

  const { viewChg } = props;
  const [singleData, setSingleData] = useState<singleDataType>();
  const breakPoint = useMediaQuery('(max-width:679px)');
  const breakPoint2 = useMediaQuery('(max-width:550px)');
  const token = localStorage.getItem('token');
  const postId = localStorage.getItem('id');
  const navigate = useNavigate();

  const singleUser = async () => {
    try {
      const sUser = await bdayApi.get(`/post/posts/${Number(postId)}`, 
        {
          headers: { Authorization: 'Bearer ' + token }
        });
      setSingleData(sUser.data);
    } catch(e) {
      console.log('error message', e);
    }
  }

  useEffect(() => {
    singleUser();
	}, []);

  const singlePosts = singleData?.posts;
  console.log('test',singlePosts);
  
  return (
      <>
        <Container 
          sx={{ 
            width: '90%',
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
              {singlePosts?.map((sp, idx) => (
                <>
                <ListBtnStyle
                  key={sp.id}
                  onClick={() => {
                    navigate('/postdetail', 
                      {state: 
                        { 
                          nickname : sp.nickname,
                          mng_no: sp.mng_no,
                          title: sp.title, 
                          content: sp.content,
                          id: sp.id,
                          mod_dt: sp.mod_dt,
                        }
                      });
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
                      {sp.title}
                  </Typography>
                </ListBtnStyle>
                </>
               ))}
              </Container>
            </>
           
          ) : (
            // grid
              <Container 
                maxWidth="md" 
                sx={{ 
                  width: '100%', 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  justifyContent: breakPoint ? 'center' : 'left'
                }}>
                  {singlePosts?.map((sp, idx) => (
                    <>
                      <GridBtnStyle
                        key={idx}
                        onClick={() => {
                          navigate('/postdetail',
                            {state:
                              {
                                nickname : sp.nickname,
                                mng_no: sp.mng_no,
                                title: sp.title,
                                content: sp.content,
                                id: sp.id,
                              }
                            });
                        }}
                        sx={{
                          mt: 1,
                          bgcolor:'rgba(255, 234, 167,1)',
                          ml: breakPoint2 ? 0 : '10px',
                        }}>
                        <Box>
                          <Typography align="center" variant="button" sx={{color: '#555', fontSize: 16, fontWeight: '700'}}>{sp.title}</Typography>
                          <Box sx={{ position: 'absolute', right: 10, bottom: 0}}>
                            <Typography sx={{color: '#555', fontSize: 12, fontWeight: '700'}}>Manage.#{sp.mng_no}</Typography>
                          </Box>
                        </Box>
                      </GridBtnStyle>
                      
                    </>
                  ))}
                 
              </Container>
          )}
          
        </Container>
      </>
  )
}
export default SinglePostIt;

