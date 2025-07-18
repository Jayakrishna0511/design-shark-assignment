import React from 'react';
import { Box, Typography } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

interface Props {
  name: string;
  itemCount?: number;
}

const FolderCard: React.FC<Props> = ({ name, itemCount = 0 }) => {
  return (
    <Box
      sx={{
        width: 180,
        height: 150,
        backgroundColor: '#1e1e1e',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        cursor: 'pointer',
        transition: '0.3s',
        '&:hover': { backgroundColor: '#2c2c2c' }
      }}
    >
      <FolderIcon sx={{ fontSize: 50, color: '#ccc' }} />
      <Typography fontWeight="bold" mt={1}>{name}</Typography>
      <Typography fontSize={12} color="#aaa">Total Items: {itemCount}</Typography>
    </Box>
  );
};

export default FolderCard;