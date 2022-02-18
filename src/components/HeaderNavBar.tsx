import { Box, Icon } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';

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

const HeaderNavBar = () => {
    return (
			<>
				<Box 
					sx={{ 
						position: 'relative',
						width: '100%',
						height: 50,
						bgcolor: '#333',
						borderBottom: 1,
						borderColor: '#fff'
					}}>
					<Box sx={{
						position: 'absolute',
						left: 20,
						lineHeight: '50px',
					}}>
						<LinkStyle to="/" sx={{fontSize: 18, fontWeight: '800'}}>Sticky Note Board</LinkStyle>			
					</Box>
					
					<Box sx={{ display: 'flex' }}>
						<Box sx={{ position: 'absolute', right: 40, lineHeight: '50px'}}>
							<LinkStyle to="/Error404">Errorpage</LinkStyle>
							<LinkStyle to="/Post">Post</LinkStyle>
							<LinkStyle to="/PostList">MyPost</LinkStyle>
							<LinkStyle to="/MyPage">MyPage</LinkStyle>
						</Box>
						<Box sx={{ position:'absolute', top: 16	, right: 0 }}>
								<LinkStyle to="/Login">
										<Icon sx={{ width: 20, height: 20 }} component={LoginIcon} />
								</LinkStyle>
						</Box>
					</Box>
				</Box> 
			</>
    )
}

export default HeaderNavBar;