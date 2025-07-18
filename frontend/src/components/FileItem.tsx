// src/components/FileItem.tsx
import { Box, Typography } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import colors from '../theme';
// import Grid from '@mui/material/Grid';

interface FileItemProps {
  name: string;
  size: string;
}

const FileItem: React.FC<FileItemProps> = ({ name, size }) => {
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
      <InsertDriveFileIcon sx={{ fontSize: 40, color: '#bbb' }} />
      <Typography fontWeight="bold" noWrap>{name}</Typography>
      <Typography variant="caption" sx={{ color: '#aaa' }}>
        {size}
      </Typography>
    </Box>
  );
};

export default FileItem;
