import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';

const websiteFiles = [
  { name: 'website1.png', size: '2.1 MB', src: '/uploads/website1.png' },
  { name: 'website2.jpg', size: '1.9 MB', src: '/uploads/website2.jpg' },
  { name: 'website3.webp', size: '2.4 MB', src: '/uploads/website3.webp' },
];

const Websites: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#121212', minHeight: '100vh', marginLeft: '220px' }}>
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Typography variant="h6" color="#fff">
          {websiteFiles.length} file(s) available
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: 'red', color: '#fff' }}
          onClick={() => setOpen(true)}
          startIcon={<AddPhotoAlternateIcon />}
        >
          Add File
        </Button>
      </Box>

      <Grid container spacing={2}>
        {websiteFiles.map((file, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff' }}>
              <CardMedia
                component="img"
                height="140"
                image={file.src}
                alt={file.name}
              />
              <CardContent>
                <Typography>{file.name}</Typography>
                <Typography variant="caption">{file.size}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Upload Modal */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle
          sx={{
            backgroundColor: 'red',
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          Add File
          <IconButton onClick={() => setOpen(false)} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ backgroundColor: '#2e2e2e', color: '#fff' }}>
          <Box
            sx={{
              border: '2px dashed #888',
              borderRadius: '8px',
              padding: 3,
              mb: 2,
              textAlign: 'center',
              color: '#aaa',
              cursor: 'pointer',
            }}
            onClick={() => document.getElementById('upload-input')?.click()}
          >
            <AddPhotoAlternateIcon sx={{ fontSize: 40 }} />
            <Typography mt={1}>Drag & drop a file here, or click to select one</Typography>
            <input
              id="upload-input"
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </Box>

          <TextField
            fullWidth
            variant="outlined"
            label="File Name"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            sx={{ input: { color: '#fff' }, mb: 3 }}
          />

          <Box display="flex" justifyContent="space-between">
            <Button
              variant="outlined"
              sx={{ backgroundColor: '#000', color: '#fff' }}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: 'red' }}
              onClick={() => {
                setOpen(false);
                
              }}
            >
              Add File
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Websites;
