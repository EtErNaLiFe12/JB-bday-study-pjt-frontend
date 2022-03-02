import { Box, Container, Typography } from "@mui/material";
// import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { bdayApi } from "src/api/api";
import { useEffect, useState } from "react";

interface userInfoType {
  email: string,
  username: string,
  reg_dt: number,
  splice() : () => {},
}

const MyPage = () => {

  const [userData, setUserData] = useState<userInfoType>(Object);
  const token = localStorage.getItem('token');
  const postId = localStorage.getItem('id');

  const userInfo = async () => {
    try {
      const sUser = await bdayApi.get(`/user/${Number(postId)}`, 
        {
          headers: { Authorization: 'Bearer ' + token }
        });
        setUserData(sUser.data);
      // console.log('single-user', singleData);
    } catch(e) {
      console.log('error message', e);
    }
  }

  useEffect(() => {
    userInfo();
  },[]);
  console.log(userData?.email);

  return (
      <>
        <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center'}}>
          <Box sx={{ mt: 10, color: '#000', bgcolor: 'rgba(255, 234, 167,1)', p:5, borderRadius: 3}}>
            <EmojiPeopleIcon sx={{ width: 60, height: 60, display: 'flex', margin: 'auto', mb: 3}}/>
            <Typography variant="h6" align="left">이름: {userData.username}</Typography>
            <Typography variant="h6" align="left">이메일: {userData.email}</Typography>
            <Typography variant="h6" align="left">가입 일자: {userData.reg_dt}</Typography>
          </Box>
        </Container>
      </>
  )
}

export default MyPage;