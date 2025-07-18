// src/components/UploadFileModal.tsx
import React, { useState, useCallback } from 'react';
import { Dialog, DialogTitle, Box, TextField, Button, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import ImageIcon from '@mui/icons-material/Image';

interface UploadFileModalProps {
  open: boolean;
  onClose: () => void;
  onUpload: (file: File, name: string) => void;
}

const UploadFileModal: React.FC<UploadFileModalProps> = ({ open, onClose, onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setFileName(acceptedFiles[0].name);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleUpload = () => {
    if (file && fileName) {
      onUpload(file, fileName);
      setFile(null);
      setFileName('');
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ backgroundColor: 'red', color: 'white' }}>Add File</DialogTitle>
      <Box sx={{ p: 3, backgroundColor: '#2b2b2b', color: '#fff' }}>
        <Box
          {...getRootProps()}
          sx={{
            border: '2px dashed #666',
            borderRadius: '8px',
            p: 4,
            textAlign: 'center',
            cursor: 'pointer',
            mb: 2,
          }}
        >
          <input {...getInputProps()} />
          <ImageIcon sx={{ fontSize: 48, color: '#7289da' }} />
          <Typography sx={{ color: '#aaa' }}>Drag & drop a file here, or click to select one</Typography>
        </Box>

        <TextField
          fullWidth
          placeholder="File Name"
          variant="outlined"
          size="small"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          sx={{ backgroundColor: '#fff', mb: 3 }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={onClose} variant="contained" sx={{ backgroundColor: '#111' }}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="contained" sx={{ backgroundColor: 'red' }}>
            Add File
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default UploadFileModal;
