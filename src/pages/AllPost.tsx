import { useEffect, useState } from 'react';
import PostIt from 'src/components/PostIt';

import { Container, Typography, TextField, Box, Button, Icon } from '@mui/material';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';

import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import useMediaQuery from '@mui/material/useMediaQuery';
import { allPostApi, allUserApi, bdayApi, CreatePostApi } from 'src/api/api';
import { useNavigate } from 'react-router-dom';

interface postDataType {
	id: string;
	title: string;
	content: string;
	crt_dt: Date;
  mod_dt: Date;
  mng_no: string;
  nickname: string;
}
interface userDataType {
	id: string;
	username: string;
	email: string;
	password: string;
	reg_dt: string;
}

const AllPost = () => {
  const navigate = useNavigate();
  const breakPoint = useMediaQuery('(max-width:679px)');
  const breakPoint2 = useMediaQuery('(max-width:550px)');
  const breakPoint3 = useMediaQuery('(max-width:900px)');

  const [open, setOpen] = useState(false);
  const [postData, setPostData] = useState<postDataType[]>([]);
  const [userData, setUserData] = useState<userDataType[]>([]);
  const [crTitle, setCrTitle] = useState('');
  const [crContent, setCrContent] = useState('');
  const [crManage, setCrManage] = useState('');
  const [crNickName, setCrNickName] = useState('');
  const [viewChange, setViewChange] = useState(false);
  const token = localStorage.getItem('token');
  const postId = localStorage.getItem('id');

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const postList = async () => {
    try {
      const allPosts = await allPostApi.get('');
      setPostData(allPosts.data);
      // console.log('post--data',postData);
    } catch(e) {
      console.log('error message',e);
    }
  }

  const userList = async () => {
    try {
      const allUsers = await allUserApi.get('');
      setUserData(allUsers.data);
      // console.log('user--data', userData);
    } catch(e) {
      console.log('error message', e);
    }
  }
  

  useEffect(() => {
    postList();
    userList();
	}, []);

 
  const createPost = async () => {
    setOpen(false);
    console.log(typeof(postId));
    try {
      const response = await CreatePostApi.post('', 
      {
        nickname: crNickName,
        mng_no: crManage,
        title: crTitle,
        content: crContent,
        postId: Number(postId),
      },
      {
        headers: { Authorization: 'Bearer ' + token }
      });
      console.log(response.status);
      if(response.status === 201) {
        navigate(-1);
      }
    } catch(e) {
      console.log('error message',e);
    }
  }

 

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

        {/* Add post */}
        {breakPoint2 ?
        (
          <Box 
            sx={{ 
              position: 'absolute', 
              width: 120,
              height: 30,
              bgcolor: 'rgba(0,0,0,.6)', 
              top: 75,
              left: '50%', 
              borderRadius: '25px',
              transform: 'translateX(-50%)'
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3}}>
              <Button onClick={handleOpen} sx={{ padding: 0 }}>
                <AddIcon sx={{ height: 30, color: 'rgba(255, 234, 167,1)'}} />
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: 14,
                    fontWeight: '700',
                    color: 'rgba(255, 234, 167,1)',
                  }}>
                    Add Post
                </Typography>
              </Button>
            </Box>
          </Box>
        ) : (
          <Box 
            sx={{ 
              position: 'absolute', 
              width: breakPoint ? breakPoint2 ? 25 : 40 : 140, 
              height: breakPoint2 ? 25 : 40, 
              bgcolor: 'rgba(0,0,0,.6)', 
              top: breakPoint2 ? 75 : 20, 
              right: 20, 
              borderRadius: '25px',
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Button onClick={handleOpen} sx={{ padding: 0 }}>
                <AddIcon sx={{ height: breakPoint2 ? 25 : 40, color: 'rgba(255, 234, 167,1)'}} />
                {!breakPoint &&
                  <Typography
                    variant='h6'
                    sx={{
                      fontSize: 18,
                      fontWeight: '700',
                      color: 'rgba(255, 234, 167,1)',
                    }}>
                      Add Post
                  </Typography>
                }
              </Button>
            </Box>
          </Box>
        )}
          
            
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

        {/* 모달창 */}
          <Modal open={open} onClose={handleClose}>
            <Container 
              component="main" 
              maxWidth="xs" 
              sx={{ 
                width: '90%',
                bgcolor: 'rgba(255, 234, 167,1)', 
                borderRadius: 3,
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
                <Typography sx={{ mt: 2, color: '#fff', fontWeight: '700'}} variant="h5">
                  <AutoAwesomeMotionIcon sx={{ width: 45, height: 45, mt: '5px'}}/>
                </Typography>
              
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <Box>
                    <TextField
                      id="content"
                      required
                      label="Title"
                      onChange={(e) => {setCrTitle(e.target.value)}}
                      fullWidth
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
                      label="manage_no"
                      onChange={(e) => {setCrManage(e.target.value)}}
                      fullWidth= { breakPoint2 ? true : false }
                      defaultValue=""
                      sx={{
                        mr: '5px',
                        mb: '5px',
                      }}
                    />
                    <TextField
                      id="content"
                      required
                      label="Nickname"
                      onChange={(e) => {setCrNickName(e.target.value)}}
                      fullWidth= { breakPoint2 ? true : false }
                      defaultValue=""
                      sx={{ 
                        mb: '5px'
                      }}
                    />
                  </Box>
                  <TextField
                    id="outlined-multiline-static"
                    required
                    label="Content"
                    onChange={(e) => {setCrContent(e.target.value)}}
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
                    }}
                    onClick={createPost}
                    >
                    <Typography sx={{ color: '#777', fontWeight: '700' }}>Submit</Typography>
                  </Button>
                </Box>
              </Box>
            </Container>
          </Modal>
      </>
  )
}

export default AllPost;