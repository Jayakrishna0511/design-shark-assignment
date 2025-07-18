// src/components/FolderItem.tsx
import { Box, Typography } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import colors from '../theme';

interface FolderItemProps {
  name: string;
  itemCount: number;
}

const FolderItem: React.FC<FolderItemProps> = ({ name, itemCount }) => {
  return (
    <Box
      sx={{
        backgroundColor: colors.folder,
        borderRadius: 2,
        p: 2,
        height: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: colors.text,
        boxShadow: 3,
      }}
    >
      <FolderIcon sx={{ fontSize: 40, color: '#bbb' }} />
      <Typography fontWeight="bold">{name}</Typography>
      <Typography variant="caption" sx={{ color: '#aaa' }}>
        Total items: {itemCount}
      </Typography>
    </Box>
  );
};

export default FolderItem;
