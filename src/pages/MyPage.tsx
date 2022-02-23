import { Box, Container, Typography } from "@mui/material";
// import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const MyPage = () => {
  return (
      <>
        <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center'}}>
          <Box sx={{ mt: 10, color: '#000', bgcolor: 'rgba(255, 234, 167,1)', p:5, borderRadius: 3}}>
            <EmojiPeopleIcon sx={{ width: 60, height: 60, display: 'flex', margin: 'auto', mb: 3}}/>
            <Typography variant="h6" align="left">이름: name</Typography>
            <Typography variant="h6" align="left">아이디: id</Typography>
            <Typography variant="h6" align="left">가입 일자: xxxx-xx-xx</Typography>
          </Box>
        </Container>
      </>
  )
}

export default MyPage;