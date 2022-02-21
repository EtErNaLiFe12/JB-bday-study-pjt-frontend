import { Typography } from '@mui/material'


const Footer = (props: any) => {
    return (
        <Typography 
          variant="body2" 
          color="#fff" 
          align="center" 
          {...props} 
          sx={{ 
            minHeight: '50px', 
            marginTop: "40px" 
          }}>
            Copyright © {new Date().getFullYear()} JB-Sticky-Note.
        </Typography>
    );
}

export default Footer;