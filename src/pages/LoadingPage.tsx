import { Box, Container, Typography } from "@mui/material";

const LoadingPage = () => {
    return (
			<Typography 
				variant="h2" 
				color="#fff" 
				align="center" 
				sx={{ 
					minHeight: '50px', 
					marginTop: "200px",
					marginBottom: '400px',
					fontWeight: '800'
				}}>
					...Loading
			</Typography>
    )
}

export default LoadingPage;