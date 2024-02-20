import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



import InventoryIcon from '@mui/icons-material/Inventory';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsIcon from '@mui/icons-material/Settings';

import { Button } from '@mui/material';


const drawerWidth = 240;

export function DashboardWrapper({title, children}) {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>

                    <Button color='inherit'>Logout</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton href='/'>
                            <ListItemIcon>
                            <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton href='/products'>
                            <ListItemIcon>
                            <InventoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton href='/orders'>
                            <ListItemIcon>
                            <LocalShippingIcon />
                            </ListItemIcon>
                            <ListItemText primary="Orders" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton href='/settings'>
                            <ListItemIcon>
                            <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, backgroundColor: "#f5f5f5", height: '100vh' }}
            >
                <Toolbar />
                <div>
                    {children}
                </div>
            </Box>
        </Box>
    );
}