import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import Sidebar from '../components/Sidebar';

const folders = [
  'Brochures',
  'Offline Marketing',
  'Reels',
  'Static Posts',
  "LOGO's",
  'WEBSITES',
];

const AllFiles: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#121212', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content shifted to right of sidebar */}
      <Box
        sx={{
          flexGrow: 1,
          ml: '220px', // same width as sidebar
          px: 3,
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h6" color="#fff" mb={4} textAlign="center">
            All Files
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {folders.map((folder, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    backgroundColor: '#1e1e1e',
                    color: '#fff',
                    textAlign: 'center',
                    p: 2,
                    height: '100%',
                  }}
                >
                  <CardMedia sx={{ mt: 1 }}>
                    <FolderIcon sx={{ fontSize: 60, color: '#fff' }} />
                  </CardMedia>
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {folder}
                    </Typography>
                    <Typography variant="caption" color="#aaa">
                      Total Items: --
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AllFiles;
