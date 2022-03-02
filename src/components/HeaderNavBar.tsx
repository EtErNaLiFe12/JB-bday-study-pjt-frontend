import { Box, Button, Icon } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ResponsiveDrawer from "./Drawer";
import { useContext } from "react";
import { AuthContext } from "src/context/provider/AuthProvider";
import { Logout } from "@mui/icons-material";

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

	const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down('sm'));
	// xs, extra-small: 0px
	// sm, small: 600px
	// md, medium: 900px
	// lg, large: 1200px
	// xl, extra-large: 1536px
  const { isAuth, logOut } = useContext(AuthContext);
	
    return (
			<>
			{breakpoint ? 
			(
				<ResponsiveDrawer/>
			) : (
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
							{/* <LinkStyle to="/error404">Error-page test</LinkStyle> */}
							<LinkStyle to="/allpost">All Post</LinkStyle>
							<LinkStyle to="/mypost">My Post</LinkStyle>
							<LinkStyle to="/mypage">My Page</LinkStyle>
						</Box>
						{isAuth ? 
						(
							<Box sx={{ position:'absolute', top: 16	, right: 0 }}>
								<LinkStyle to="/home">
										<Button sx={{ position: 'absolute', right: 0, top: -5, color: '#fb5849'}} onClick={logOut}>
											<Icon sx={{ width: 20, height: 20 }} component={Logout} />
										</Button>
								</LinkStyle>
							</Box>
						) : (
							<Box sx={{ position:'absolute', top: 16	, right: 0 }}>
								<LinkStyle to="/login">
										<Icon sx={{ width: 20, height: 20 }} component={LoginIcon} />
								</LinkStyle>
							</Box>
						)}
						
					</Box>
				</Box> 
				)}
			</>
    )
}

export default HeaderNavBar;