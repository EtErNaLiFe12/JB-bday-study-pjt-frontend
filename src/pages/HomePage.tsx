import { CardMedia, Container, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';

const HomePage = () => {
	const [auth, setAuth] = useState(false);

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
						<CardMedia
							component="img"
							image={require("../assets/image/sticky-note-bg.jpg")}
							alt="sticky-note_board"
							sx={{ width: '100%', mt: '30px', borderRadius: '20px' }}
						/>
						<Container>
							<Typography variant="h4"
								sx={{
									position: 'absolute',
									top: 40,
									left: 70,
									color: "#fff",
									padding: '10px',
									bgcolor: 'rgba(0,0,0,.5)',
									borderRadius: '10px'
								}}>
									Sticky Note Board
							</Typography>
							<LinkStyle to= {auth ? '/post' : "/login"}>
								<Typography variant="h6"
									sx={{
										position: 'absolute',
										bottom: 60,
										left: 70,
										color: "#fff",
										padding: '10px',
										bgcolor: 'rgba(0,0,0,.5)',
										borderRadius: '10px',
										fontWeight: '700'
									}}>
										{auth ? 'Post Start' : 'Start to login'}
								</Typography>
							</LinkStyle>
						</Container>
					</Container>
				</Box>
			</>
    )
}
export default HomePage;