import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  IconButton,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloseIcon from '@mui/icons-material/Close';
import { uploadFile } from '../api'; // ✅ API function
import colors from '../theme';

interface Props {
  onClose: () => void;
}

const AddFileDialog: React.FC<Props> = ({ onClose }) => {
  const [fileName, setFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile); // matches `upload.single('file')` in backend
    formData.append('name', fileName);

    try {
      const response = await uploadFile(formData);
      console.log('✅ File uploaded successfully:', response.data);
      onClose(); // close dialog
    } catch (error) {
      console.error('❌ Upload failed:', error);
    }
  };

  return (
    <Box
      sx={{
        p: 3,
        width: 350,
        backgroundColor: '#1e1e1e',
        color: '#fff',
        borderRadius: 2,
        position: 'relative',
      }}
    >
      <IconButton
        sx={{ position: 'absolute', top: 8, right: 8, color: 'red' }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Add File
      </Typography>

      {/* Dropzone */}
      <Box
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        sx={{
          border: '2px dashed #555',
          borderRadius: 2,
          height: 140,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
          flexDirection: 'column',
          textAlign: 'center',
          cursor: 'pointer',
        }}
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        {previewURL ? (
          <img
            src={previewURL}
            alt="Preview"
            style={{ maxWidth: '100%', maxHeight: '120px', objectFit: 'contain' }}
          />
        ) : (
          <>
            <UploadFileIcon sx={{ fontSize: 40, color: '#aaa' }} />
            <Typography variant="body2" color="gray">
              Drag & drop or click to upload
            </Typography>
          </>
        )}
        <input
          type="file"
          id="fileInput"
          hidden
          accept="image/*"
          onChange={handleFileSelect}
        />
      </Box>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="File Name"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        sx={{
          mb: 2,
          input: { color: '#fff' },
          '& .MuiOutlinedInput-notchedOutline': { borderColor: '#555' },
        }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" color="inherit" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#f44336' }}
          onClick={handleUpload}
          disabled={!selectedFile}
        >
          Add File
        </Button>
      </Box>
    </Box>
  );
};

export default AddFileDialog;
