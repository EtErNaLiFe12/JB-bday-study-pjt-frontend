import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'src/context/provider/AuthProvider';

const drawerWidth = 280;

export default function ResponsiveDrawer() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { isAuth, logOut } = useContext(AuthContext);

  const listItem = [
    {
      text: 'Home',
      onClick: () => { navigate('/home'); setMobileOpen(false); }
    },
    {
      text: 'AllPost',
      onClick: () => { navigate('/allpost'); setMobileOpen(false); }
    },
    {
      text: 'MyPost',
      onClick: () => { navigate('/mypost'); setMobileOpen(false); }
    },
    {
      text: 'MyPage',
      onClick: () => { navigate('/mypage'); setMobileOpen(false); }
    },
    {
      text: isAuth ? 'Logout':'Login',
      onClick: () => {
        {isAuth && logOut}; 
        navigate(isAuth ? '/home' : '/login'); 
        setMobileOpen(false); 
        location.reload(); 
      }
    },
  ]

  const drawer = (
    <Box sx={{ bgcolor: '#333', height: '100%'}}>
      <Typography  sx={{mt: 2, mb: 2, fontWeight: '700', color: '#fff'}} align='center'>
        STICKY NOTE BLOG
      </Typography>
      <Divider sx={{ bgcolor: '#fff'}}/>
      <List sx={{ ml: 2, color: '#fff', textTransform: 'uppercase' }}>
        {listItem.map((item) => {
          const { text, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              <ListItemText primary={text} />
            </ListItem>
          )
        })}
      </List>
    </Box>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: '#333',
          height: 50,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 3, display: { sm: 'none'} }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{fontWeight: '800'}} variant="h6" noWrap component="div">
            Sticky Note Board
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    
    </Box>
  );
}