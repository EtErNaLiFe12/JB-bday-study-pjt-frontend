import { Container, Typography, TextField, Box, Button, useMediaQuery } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { bdayApi } from 'src/api/api';
import { useState } from 'react';

interface inputType {
  nickname: string;
  mng_no: string;
  name: string;
  title: string;
  content: string;
  id: number;
}

const EditPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [manageNo, setManageNo] = useState('');
  const [nickName, setNickName] = useState('');

  const breakPoint = useMediaQuery('(max-width:550px)');

  const location = useLocation();

  const state = location.state as inputType;
  const token = localStorage.getItem('token');
  const editPost = async () => {
    try {
      const response = await bdayApi.patch(`/post/${state.id}`, 
      { 
        nickname: nickName || state.nickname,
        mng_no: manageNo || state.mng_no,
        title: title || state.title,
        content: content || state.content,
      },
      {
        headers: { Authorization: 'Bearer ' + token }
      }
      );
      if(response.status === 200) {
        navigate('/mypost');
      }
    } catch(e) {
      console.log('error message',e);
    }
  }
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
              fullWidth
              required
              label="Title"
              onChange = {(e) => {setTitle(e.target.value)}}
              defaultValue={state.title}
              autoFocus
              sx={{
                mr: '5px',
                mb: '15px',
              }}
            />
            <TextField
              id="content"
              fullWidth= { breakPoint ? true : false }
              required
              label="manage_no"
              onChange = {(e) => {setManageNo(e.target.value)}}
              defaultValue={state.mng_no}
              autoFocus
              sx={{
                mr: '5px',
                mb: '15px',
              }}
            />
             <TextField
              id="content"
              required
              label="Nickname"
              fullWidth= { breakPoint ? true : false }
              // value={state.title}
              onChange={(e) => {setNickName(e.target.value)}}
              defaultValue={state.nickname}
              sx={{
                mb: '15px',
              }}
            />
          </Box>
          <TextField
            id="outlined-multiline-static"
            required
            label="Content"
            onChange={(e) => {setContent(e.target.value)}}
            defaultValue={state.content}
            multiline
            fullWidth
            rows={6}
          />
          <Button
            component="button"
            fullWidth
            variant="contained"
            onClick={editPost}
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


