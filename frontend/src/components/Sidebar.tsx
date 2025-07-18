import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import FolderIcon from '@mui/icons-material/Folder';
import DashboardIcon from '@mui/icons-material/Dashboard';

const sidebarItems = [
  { label: 'All Files', path: '/all-files', icon: <DashboardIcon /> },
  { label: 'Brochures', path: '/brochures', icon: <FolderIcon /> },
  { label: 'Offline Marketing', path: '/offline-marketing', icon: <FolderIcon /> },
  { label: 'Reels', path: '/reels', icon: <FolderIcon /> },
  { label: 'Static Posts', path: '/static-posts', icon: <FolderIcon /> },
  { label: "LOGO's", path: '/logos', icon: <FolderIcon /> },
  { label: 'WEBSITES', path: '/websites', icon: <FolderIcon /> },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: '220px',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        height: '100vh',
        position: 'fixed',
        top: '64px', // adjust if Header height changes
        left: 0,
        zIndex: 1100,
        overflowY: 'auto',
        borderRight: '1px solid #333',
      }}
    >
      <List>
        {sidebarItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.path)}
              selected={location.pathname === item.path}
              sx={{
                color: '#fff',
                '&.Mui-selected': {
                  backgroundColor: 'red',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#cc0000',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
