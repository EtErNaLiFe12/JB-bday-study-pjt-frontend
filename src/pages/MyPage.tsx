import { Box, Container, styled, Typography } from "@mui/material";
// import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { bdayApi } from "src/api/api";
import { useEffect, useState } from "react";

const TypographyStyle = styled(Typography)(() => ({
  color: '#555',
  fontSize: '16px',
  fontWeight: '700',

  "&:hover": {
      color: "#fb5849",
      fontSize: '16px',
  },
}))
interface userInfoType {
  email: string,
  username: string,
  reg_dt: number,
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
    } catch(e) {
      console.log('error message', e);
    }
  }

  useEffect(() => {
    userInfo();
  },[]);

  const date = String(userData?.reg_dt);
  const dateTime = date.slice(0,10) 
  
  return (
      <>
        <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center'}}>
          <Box sx={{ mt: 10, color: '#555', bgcolor: 'rgba(255, 234, 167,1)', p:5, borderRadius: 3}}>
            <EmojiPeopleIcon sx={{ width: 60, height: 60, display: 'flex', margin: 'auto', mb: 3}}/>
            <TypographyStyle align="left">이름: {userData?.username}</TypographyStyle>
            <TypographyStyle align="left">이메일: {userData?.email}</TypographyStyle>
            <TypographyStyle align="left">가입 일자: {dateTime}</TypographyStyle>
          </Box>
        </Container>
      </>
  )
}

export default MyPage;