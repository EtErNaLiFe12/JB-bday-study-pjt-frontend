import { CardMedia, Container, Box, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AuthContext } from "src/context/provider/AuthProvider";

const HomePage = () => {
	const theme = useTheme();
  const breakPoint = useMediaQuery(theme.breakpoints.down('sm'));
  const breakPoint2 = useMediaQuery(theme.breakpoints.down('md'));
  const { isAuth } = useContext(AuthContext);
	const LinkStyle = styled(Link)(() => ({
		textDecoration: 'none',
		color: '#fff',
		fontSize: '14px',
		marginRight: '20px',
		textAlign: 'center',
		transition: ".5s",
		fontWeight: '700',
	
		"&:hover": {
				color: "#fb5849",
				fontSize: '16px',
		},
	}))
    return (
			<>
				<Box>
					<Container sx={{ position: 'relative'}}>
						{/* <CardMedia
							component="img"
							image={require("../assets/image/sticky-note-bg.jpg")}
							alt="sticky-note_board"
							sx={{ width: '100%', height: '700px', mt: breakPoint ? 10 : 5, borderRadius: '20px' }}
						/> */}
						<Box
							sx={{ 
								width: '100%', 
								height: '700px', 
								// bgcolor:'rgba(255, 234, 167,1)',
								bgcolor:'#fff',
								border: 18,
								borderColor: '#888',
								boxSizing: "border-box", 
								mt: breakPoint ? 10 : 5, 
								borderRadius: '20px' 
							}}>
						</Box>
						<Container>
							<Typography variant="h3"
								sx={{
									position: 'absolute',
									top: 100,
									left: '50%',
									transform: 'translateX(-50%)',
									// left: breakPoint ? 20 : 40,
									color: "#fff",
									padding: '10px',
									bgcolor: 'rgba(0,0,0,.5)',
									borderRadius: '10px',
								}}>
									Sticky Note Board
							</Typography>
							<Typography variant="h5"
								sx={{
									position: 'absolute',
									top: breakPoint2 ? 290 : 190,
									left: '50%',
									transform: 'translateX(-50%)',
									color: "#fff",
									padding: '10px',
									bgcolor: 'rgba(0,0,0,.5)',
									borderRadius: '10px',
								}}>
									Create Your Own Post(Task memo)
							</Typography>
							<LinkStyle to= {isAuth ? '/mypost' : "/login"}>
								<Typography variant="h6"
									sx={{
										position: 'absolute',
										left: 60,
										bottom: 60,
										color: "#fff",
										padding: '10px',
										bgcolor: 'rgba(0,0,0,.5)',
										borderRadius: '10px',
										fontWeight: '700'
									}}>
										{isAuth ? 'Create Your Post' : 'Start to login'}
								</Typography>
							</LinkStyle>
						</Container>
					</Container>
				</Box>
			</>
    )
}
export default HomePage;