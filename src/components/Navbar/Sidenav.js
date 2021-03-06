import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Category from '../Category';
import { useMediaQuery } from '@mui/material';
import './navbar.css';


export default function SwipeableTemporaryDrawer({setCategory}) {
  const [state, setState] = React.useState({
    left: false,
  });
  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List align="center">
            <ListItemIcon className='newsFeed'><span style={{color: "#e74c3c"}}>NewsFeed</span><span style={{fontSize: "12px", textAlign:"right", fontWeight:"300"}}>Stay informed</span></ ListItemIcon>  
      </List>
      <Divider />
      <List align="left">
            <ListItemIcon className='category' style={{color:"rgba(255, 255, 255, 0.9)"}}>Categories</ListItemIcon>  
      </List>
      <List className='category-list' style={{fontWeight:"300"}}>
        {Category.map((text) => (
          <ListItem button key={text} onClick={()=> setCategory(text)}>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}>
              <MenuIcon style={{color: "rgba(0,0,0,0.7)", fontSize: "2.1rem",}}/>
          </Button>
          <ThemeProvider theme={theme}>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
          </ThemeProvider>
        </React.Fragment>
    </div>
  );
}